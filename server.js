const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

const cors=require('cors');

var corsOptions = {
  origin:"http://localhost:4200"
};
 
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
 
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'',
  database: 'details'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//show all feeds
app.get('/api/feed',(req, res) => {
  let sql = "SELECT * FROM feed";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify(results));
  });
});
 
//show feed based on role
app.get('/api/feed/:role',(req, res) => {
  let sql = "SELECT * FROM feed WHERE Role =?";
  let query = conn.query(sql, req.params.role, (err, results) => {
    if(err) throw err;
    // res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    res.send(JSON.stringify(results));
  });
});

 
//add new feed
app.post('/api/feed',(req, res) => {
  let data = {Name: req.body.Name, Email: req.body.Email, Phone: req.body.Phone, Role: req.body.Role, Content: req.body.Content};
  let sql = "INSERT INTO feed SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
