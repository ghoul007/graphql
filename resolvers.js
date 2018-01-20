import mongoose from "mongoose";
import postModel from "./models/post.js";
const resolvers = {
  Query: {
    posts: () => {
      return posts;
    },
    post: (root, args) => {
      const title = args.title;
      return posts.find(post => post.title === title);
    }
  },
  Mutation: {
    addPost: (root, { title, body }) => {
      const post = new postModel({ title: title, body: body });
      return post.save();
    },
    deletePost: (root, { id }) => {
      return postModel.remove({ id: id });
    }
  }
};
export default resolvers;
