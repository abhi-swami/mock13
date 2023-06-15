const { Schema, model } = require("mongoose");

const stringType = { required: true, type: String };
const numberType = { required: true, type: Number };
const userSchema = new Schema(
  {
    username:stringType,
    avatar:stringType,
    email: stringType,
    password: stringType,
  },
  {
    versionKey: false,
  }
);

const userModel = model("user", userSchema);

module.exports = { userModel };
