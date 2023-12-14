// Author: Lindsey Wessel
// ISU Netid : lkwessel@iastate.edu
// Date :  12 2, 2023

var express = require("express");
var cors = require("cors");
var app = express();
// var fs = require("fs");
var bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const mongodb = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "reactData";
const client = new MongoClient(url);
const db = client.db(dbName);


app.use(cors());
app.use(bodyParser.json());

const port = "8081";
const host = "localhost";

app.listen(port, () => {
  console.log("App listening at http://%s:%s", host, port);
  });

app.get("/get", async (req, res) => {
  await client.connect();
  console.log("Node connected successfully to GET MongoDB");
  const query = {};
  const results = await db
    .collection("clip")
    .find(query)
    .limit(100)
    .toArray();
  
  // console.log("Results: ");
  // console.log(results);
  res.status(200);
  res.send(results);
});



app.post("/addMessage", async (req, res) => {
  await client.connect();
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  const name = values[0]; // id
  const email = values[1]; // name
  const subject = values[2]; // price
  const type_project = values[3]; // description
  const how_help = values[4]; // description
  const hear_about_me = values[5]; // imageUrl
  // console.log(id, name, price, description, imageUrl);
  const newDocument = {
    "Name": name,
    "Email": email,
    "Subject": subject,
    "Project_Type": type_project,
    "How_Help": how_help,
    "Heared_About_Me": hear_about_me,
    "Notes":""
};
  const results = await db.collection("contact").insertOne(newDocument);
  res.status(200);
  res.send(results);
  });


  app.get("/getMessage", async (req, res) => {
    await client.connect();
    // console.log("Node connected successfully to GET MongoDB");
    const query = {};
    const results = await db
      .collection("contact")
      .find(query)
      .limit(100)
      .toArray();
    // console.log(results);
    res.status(200);
    res.send(results);
  });

  app.delete("/removeMessage/:id", async (req, res) => {
    const msgid= req.params.id;

    await client.connect();
  
    const query = { _id: new mongodb.ObjectId(msgid) };
    const result = await db.collection("contact").deleteOne(query);

    if (result.deletedCount === 1) {
      res
        .status(200)
        .json({ message:"Good"});
    } else {
      res.status(404).json({message: "Bad"});
    }
  });
  
  app.get("/:id", async (req, res) => {
    const msgid= req.params.id;
    await client.connect();
  
    const query = { _id: new mongodb.ObjectId(msgid) };
    const results = await db.collection("contact").findOne(query);
    console.log("Results :", results);
    if (!results) res.send("Not Found").status(404);
    else res.send(results).status(200);
  });
  

  app.put("/putMessage", async (req, res) => {
    //console.log(req.body);
    const values = Object.values(req.body);
    const msgid = values[0]; // id
    const notes = values[1]; // name
      await client.connect();
    const query = { "_id": new mongodb.ObjectId(msgid) };
    const results = await db.collection("contact").updateOne(
      {"_id": new mongodb.ObjectId(`${msgid}`)},{$set:{
        "Notes" : notes
      }}
    );
  });