import express from "express";
import bodyPerser from"body-parser"
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import schema from "./schema.js"
import mongoose from "mongoose"

let server = express();

server.use("/graphiql", graphiqlExpress({
  endpointURL:"/graphql"
}));

mongoose.connect('mongodb://localhost/demo-graphql')

const connection = mongoose.connection;
connection.once('open', ()=>{
  console.log('connection suucesfull')
})
server.use('/graphql',bodyPerser.json(),  graphqlExpress({
schema
}))
server.listen(3000, function() {
  console.log("listner 127.0.0.0:3000");
});
