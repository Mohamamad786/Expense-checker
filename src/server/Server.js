const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
app.listen(4000, () => console.log('Server running on port 4000!'))
app.get('/expenses', (req, res) => {
    const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mohammad_xyz:NYsEUlonQySCETez@cluster0.tapc0.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect((err,db) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Database Created");
  var dbo = db.db("Cluster0");
    dbo.collection("expenses").find({}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
        client.close();
    });
    });
});
app.post('/postExpense', (req, res) => {
    const expense = req.body;
    const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mohammad_xyz:NYsEUlonQySCETez@cluster0.tapc0.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect((err,db) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Database Created");
  var dbo = db.db("Cluster0");
    dbo.collection("expenses").insertOne(expense, function(err, result) {
        if (err) throw err;
        res.send(result);

        db.close();
      });
    });
});
