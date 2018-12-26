import { Data, User } from '../models';

export default app => {
    app.post('/api/data/add', async (req, res) => {
        try {
            const { user, lat, long, speed, detected } = req.body;
            const targetUser = await User.findById(user);
            if (!targetUser) {
                return res.status(400).json({
                    errors: { global: 'User not found' }
                });
            }

            const newData = await new Data({
                user,
                lat,
                long,
                speed,
                detected
            }).save();

            await User.findByIdAndUpdate(user, { $push: {data: newData.id } })

            return res.send({data: newData});
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                errors: { global: 'Unkown error' }
            });
        }
    });

};
