const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log('Server started at http://localhost:5000');
});


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'priyanshi',
  database: 'priyanshi',
  connectionLimit: 10, 
});


function queryDatabase(sql, params, callback) {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      callback(err, null);
      return;
    }

    connection.query(sql, params, (err, results) => {
      connection.release();

      if (err) {
        console.error('Error executing MySQL query:', err);
        callback(err, null);
        return;
      }

      callback(null, results);
    });
  });
}

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM login WHERE Username = ? AND Password = ?';

  queryDatabase(sql, [username, password], (err, data) => {
    if (err) {
      console.error('Error during login:', err);
      return res.status(500).json({ error: 'An error occurred during login.' });
    }

   

   
    res.json(data);
  });
});
