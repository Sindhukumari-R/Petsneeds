const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');    
const app = express();

app.use(cors({                  
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',     
  password: 'Sindhu@123', 
  database: 'dogsite_login'  
});

db.connect((err) => {
  if (err) {
    console.error('DB connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ 
      error: 'Please fill all fields',
      success: false
    });
  }

  const sql = "INSERT INTO users (Name, Email, Pass) VALUES (?, ?, ?)";

  db.query(sql, [name, email, password], (err, results) => {
    if (err) {
      console.error('DB insert error:', err);
      return res.status(500).json({ 
        error: 'Database error',
        success: false
      });
    }

    res.json({ 
      message: 'User registered successfully!',
      success: true
    });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ 
      message: 'Please fill all fields',
      success: false
    });
  }

  const sql = "SELECT * FROM users WHERE Email = ? AND Pass = ?";

  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error('Login error:', err);
      return res.status(500).json({ 
        message: 'Database error',
        success: false
      });
    }

    if (results.length > 0) {
      res.json({
        message: 'Login successful!',
        success: true,
        name: results[0].Name  
      });
    } else {
      res.status(401).json({
        message: 'Invalid email or password',
        success: false
      });
    }
  });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
