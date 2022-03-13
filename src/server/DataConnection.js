const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mohammad_xyz:NYsEUlonQySCETez@cluster0.tapc0.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect((err,db) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Database Created");
  var dbo = db.db("Cluster0");
//   const dummy_expenses = [
//     {
//       id: 'e1',
//       title: 'Toilet Paper',
//       amount: 94.12,
//       date: new Date(2020, 7, 14),
//     },
//     { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
//     {
//       id: 'e3',
//       title: 'Car Insurance',
//       amount: 294.67,
//       date: new Date(2021, 2, 28),
//     },
//     {
//       id: 'e4',
//       title: 'New Desk (Wooden)',
//       amount: 450,
//       date: new Date(2021, 5, 12),
//     },
//   ];
// to create collection = tables
//   dbo.createCollection("expenses", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
// dbo.collection("expenses").insertMany(dummy_expenses, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//     client.close();
// });
dbo.collection("expenses").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
    client.close();
});
});