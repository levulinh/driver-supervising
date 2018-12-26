import bcrypt from 'bcryptjs';
import _ from 'lodash';
import passport from 'passport';
import { User, Admin } from '../models';

const saltRounds = 10;
const emailRegex = /\S+@\S+\.\S+/;

export default app => {
  app.post('/api/admin/signup', async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email.match(emailRegex)) {
        return res.status(400).json({
          errors: { global: 'Địa chỉ email không hợp lệ' },
        });
      }
      const admin = await Admin.findOne({ email });
      if (admin) {
        return res.status(401).json({
          errors: { global: 'Địa chỉ email này đã tồn tại' },
        });
      }

      const newAdmin = await new Admin({
        email,
        password: await bcrypt.hash(password, saltRounds),
      }).save();
      return res.send(newAdmin);
    } catch (err) {
      throw err;
    }
  });

  app.post('/api/admin/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      console.log(user);
      if (err) {
        return next(err);
      }
      if (!user) {
        // *** Display message using Express 3 locals
        return res.status(401).send(info.message);
      }
      req.logIn(user, error => {
        if (error) {
          return next(error);
        }
        return res.send({ user });
      });
    })(req, res, next);
  });

  app.post('/api/user/add', async (req, res) => {
    try {
      const {
        idCode, fullName, phone, dob, certiType,
      } = req.body;
      const user = await User.findOne({ idCode });
      if (user) {
        return res.status(400).json({
          errors: 'Người dùng này đã tồn tại'
        });
      }

      const newUser = await new User({
        idCode,
        fullName,
        phone,
        dob,
        certiType,
      }).save();
      return res.send({ user: newUser });
    } catch (err) {
      throw err;
    }
  });

  app.get('/api/user/all', async (req, res) => {
    try {
      const users = await User.find({}).populate('data').exec();
      users.forEach(user => {
        const userdata = user.data;
        let drivingMinute = 0;
        let count = 0, speedsum = 0, batch = 0;

        for (let i = 0; i < userdata.length; i++) {
          count += userdata[i].detected;

          speedsum += userdata[i].speed;

          if (i % 9 == 0) batch = 10;
          else batch = i % 10 + 1;
          if (i % 10 == 9) {
            const aveSpeed = speedsum / batch;
            if (count >= 6 && aveSpeed >= 5) drivingMinute += 10;
            count = 0; speedsum = 0;
          } else if (i == userdata.length - 1) {
            const aveSpeed = speedsum / batch;
            if (count >= 0.6 * (i % 10 + 1) && aveSpeed >= 5) drivingMinute += i % 10 + 1;
          }
        }
        user.learningTime = drivingMinute / 60.0;
      });
      res.send({ users });
    } catch (error) {
      res.status(422).json({
        errors: { global: 'Unknown error' },
      });
    }
  });

  app.get('/api/user/one/:userid', async (req, res) => {
    try {
      const userid = req.params.userid;
      const user = await User.findById(userid).populate('data').exec();

      if (!user) return res.status(400).json({
        errors: { global: 'User not found' }
      })

      const userdata = user.data;
      let drivingMinute = 0;
      let count = 0, speedsum = 0, batch = 0;

      for (let i = 0; i < userdata.length; i++) {
        count += userdata[i].detected;

        speedsum += userdata[i].speed;

        if (i % 9 == 0) batch = 10;
        else batch = i % 10 + 1;
        if (i % 10 == 9) {
          const aveSpeed = speedsum / batch;
          if (count >= 6 && aveSpeed >= 5) drivingMinute += 10;
          count = 0; speedsum = 0;
        } else if (i == userdata.length - 1) {
          const aveSpeed = speedsum / batch;
          if (count >= 0.6 * (i % 10 + 1) && aveSpeed >= 5) drivingMinute += i % 10 + 1;
        }
      }

      console.log('learning minute', drivingMinute);

      user.learningTime = drivingMinute / 60.0;
      return res.send({ user })
    }
    catch (error) {
      console.log(error)
      res.status(400).json({
        errors: {
          global: 'Unknown error'
        }
      })
    }
  });
};
