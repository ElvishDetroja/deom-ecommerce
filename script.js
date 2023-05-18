const express = require("express");
const server = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();

//
//
//
//
//

const productRouter = require("./route/product.js");

//
//
//

server.use(express.static("build"));

//
//

server.use(cors());
// ek server bija server sathe communicate kare tyare cross origin error ave te solve karva.

server.use(express.json());

//
//

server.use("/products", productRouter.router);

//
//

server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname,"build", "index.html"))
});

server.listen(process.env.PORT, () => {
  console.log("server start");
});

// static server banavu hoy to be rite banavi sakay.

// 1. open folder in terminal and type http-server.
// 2. server.use(express.static("public"));

// jo build folder public folder ni andar hoy and
// index.html public folder ni direct child hoy and
// public folder ne static server banavama ave to,
// localhost:8080 pr direct index.html open thai jay,
// localhost:8080/build karo to react ma je direct homepage che te open thase.
// pan react nu routing work nai kare.

// jo build folder ne public ni bahar lavine static server banava ma ave to,
// to pan react routing work nai kare. only homepage open.

// localhost:8080/form aa to react routing che.
// to application ne kem khabar padse ke aama javanu che because
// koi form namni request ave to phela te build folder ma find karse
// pachi te backened na routing ma find karse
// jo nai male to error apse.
// have tene react routing sudhi lai javanu che.


// server.use("*", (req, res) => {
//   res.sendFile(__dirname+"/build/index.html");
// });

// here __dirname gives C:\Users\elvis\vs files\Backend\node\8 view

//  res.sendFile(__dirname+"/build/index.html");
// or we can write
// res.sendFile(path.resolve(__dirname,"build", "index.html"))