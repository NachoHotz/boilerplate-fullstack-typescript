import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },

    first_name: {
      type: String,
      required: true,
    },

    last_name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    username: {
      type: String,
      required: true,
    },
  },
  { versionKey: false },
);

export default model('user', UserSchema);
