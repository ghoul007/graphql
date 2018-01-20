import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";
import {resolvers} from './resolvers'

const typeDefs = `
type Post{
  id:String
  title:String
  body:String
}
type Query {
  posts: [Post]
  post(title: String) :Post
}
type Mutation{
  addPost(title:String!, body:String!): Post
  deletePost(id:String): Post
}
`;

const schema = makeExecutableSchema({ typeDefs });
// addMockFunctionsToSchema({ schema , resolvers});

export default schema;
