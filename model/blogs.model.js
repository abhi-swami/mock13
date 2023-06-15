const { Schema, model } = require("mongoose");

const stringType = { required: true, type: String };
const numberType = { required: true, type: Number };

const blogsSchema = new Schema(
  {
    username: stringType,
    title: stringType,
    content: stringType,
    date: {default:new Date().toLocaleString("en-IN"),type:String},
    likes: numberType,
    userId:stringType,
    comments: [
      {
        username: stringType,
        content: stringType,
      },
    ],
  },
  { versionKey: false }
);

const blogsModel = model("blogs", blogsSchema);

module.exports = { blogsModel };

