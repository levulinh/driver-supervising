import mongoose from 'mongoose';

const { Schema } = mongoose;

const DataSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  lat: Number,
  long: Number,
  speed: Number,
  detected: Number,
});

export const Data = mongoose.model('Data', DataSchema);
