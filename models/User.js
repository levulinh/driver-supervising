import mongoose from 'mongoose';
// import uniqueValidator from 'mongoose-unique-validator';
// import bcrypt from 'bcryptjs';

const { Schema } = mongoose;

const UserSchema = new Schema({
  fullName: {
    type: String, required: true,
  },
  idCode: {
    type: String, required: true,
  },
  phone: {
    type: String, required: true,
  },
  dob: {
    type: String, required: true,
  },
  certiType: {
    type: String, required: true,
  },
  model: String,
  learningTime: {
    type: Number, required: true, default: 0,
  },
});

const AdminSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    index: true,
  },
  password: String,
});

export const Admin = mongoose.model('Admin', AdminSchema);

export const User = mongoose.model('User', UserSchema);
