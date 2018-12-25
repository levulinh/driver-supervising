// const passport = require('passport');
import passport from 'passport';

// const LocalStrategy = require('passport-local').Strategy;
import { Strategy as LocalStrategy } from 'passport-local';

import mongoose from 'mongoose';

import bcrypt from 'bcryptjs';

const User = mongoose.model('User');
const Admin = mongoose.model('Admin');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const user = await Admin.findOne({ email });
        if (!user) {
          return done(null, false, { message: { errors: { global: 'Người dùng không tồn tại' } } });
        }
        if (!await bcrypt.compare(password, user.password)) {
          return done(null, false, { message: { errors: { global: 'Mật khẩu nhập vào không đúng' } } });
        }
        return done(null, user, { message: { errors: { global: 'Login successfully' } } });
      } catch (err) {
        return done(err);
      }
    },
  ),
);
