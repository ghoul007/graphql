import express from "express";
import bodyPerser from"body-parser"
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import schema from "./schema.js"

let server = express();

server.use("/graphiql", graphiqlExpress({
  endpointURL:"/graphql"
}));


server.use('/graphql',bodyPerser.json(),  graphqlExpress({
schema
}))
server.listen(3000, function() {
  console.log("listner 127.0.0.0:3000");
});
