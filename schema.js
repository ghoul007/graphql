import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";
const typeDefs = `
type Post{
  title:String
  body:String
}
type Query {
  post: [Post]
}
`;

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });

export default schema;
