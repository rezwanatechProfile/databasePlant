// Dependancies
const express = require("express");
const blogSeed = require("./blogs.json");
// get .env variables
require("dotenv").config() 
const app = express();
// pull PORT from .env
const { PORT } = process.env
const cors = require("cors");

// Middlware
app.use(cors()); // makes sure that we don't get cors errors when our react app makes a request to our express app
app.use(express.urlencoded({extended: true})) //req.body
app.use(express.json())

// app.get("/", (req, res) => {
//     res.send("Listening..");
//   });

 
// import all available routes in our /routes/index.js 

app.get("/", (req, res) => {
  res.send("Welcome to the plants emergency room");
});

//get seed data of blogs
app.get("/seedblogs", (req, res) => {
  // send projects via JSON
  res.json(blogSeed);
});


const routes = require('./routes/index')

const plantRoutes = require('./routes/plantIndex')
app.use('/', plantRoutes)  

// catch route if it doesn't match to anything we will send this response 
app.use((req, res) => {
	res.status(404).json({message: "NOT A PROPER ROUTE"})
})

// Listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));