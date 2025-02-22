const express = require('express');
const mysql = require('mysql');
const path = require('path');
const cors = require('cors');
// const { error } = require('console');
const app = express();
const port =3050;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'/')));

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Roopa@2000',
    database: 'wildlife'
});

db.connect(err =>{
    if(err) throw err;
    console.log('mysql connected..')
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/', 'complaint.html'));
  });
  
  app.post('/wildlife', (req, res) => {
    const { Species, Location, Date, Time, Urgency, Details } = req.body;
    const sql = 'INSERT INTO complaint (Species, Location, Date, Time, Urgency, Details) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [Species, Location, Date, Time, Urgency, Details], (err, result) => {
      if (err) throw err;
      res.send('Complaint Registered Successfully!');
    });
  });
  
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
