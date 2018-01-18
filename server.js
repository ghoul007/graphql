import express from "express";
let server = express();
server.listen(3000, function() {
  console.log("listner 127.0.0.0:3000");
});
