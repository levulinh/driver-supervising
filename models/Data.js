import mongoose from 'mongoose';

const { Schema } = mongoose;

const DataSchema = new Schema({
  location: [Number],
  speed: Number,
  detected: Number,
});

export const Data = mongoose.model('Data', DataSchema);
