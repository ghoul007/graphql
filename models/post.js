import mongoose, { Schema } from "mongoose";
import uuid from "node-uuid";
const schema = mongoose.schema;
const postSchema = new Schema({
  id: { type: String, default: uuid.v1 },
  title: String,
  body: String
});

const model = mongoose.model('post',postSchema)
export default model