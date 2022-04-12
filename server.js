const fs = require('fs');
const express = require('express');
const mysql = require('mysql');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const connection = mysql.createConnection({
  host:conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

connection.connect();

const upload = multer({ dest: './upload' });

app.get('/api/customers', (req, res) => {
  connection.query(
    "SELECT * FROM management.customer;",
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

app.use('/image', express.static('./upload'));

app.post('/api/customers', upload.single('image'), (req, res) => {
  let sql = 'INSERT INTO management.customer VALUES (null, ?, ?, ?, ?, ?)';
  console.log(req.body);
  let image = '/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  console.log(image);
  console.log(name);
  console.log(birthday);
  console.log(gender);
  console.log(job);


  let params = [image, name, birthday, gender, job];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  })
});

app.listen(port, () => console.log(`Listening on port ${port}`));
