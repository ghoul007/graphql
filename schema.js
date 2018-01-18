import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";
import {resolvers} from './resolvers'

const typeDefs = `
type Post{
  title:String
  body:String
}
type Query {
  posts: [Post]
  post(title: String) :Post
}
`;

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema , resolvers});

export default schema;
