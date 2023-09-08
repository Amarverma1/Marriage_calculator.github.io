const express = require('express');
const mysql = require('mysql');
const app = express();

// Create a MySQL database connection
const db = mysql.createConnection({
    host: 'your_mysql_host',
    user: 'your_mysql_username',
    password: 'your_mysql_password',
    database: 'your_database_name'
});

// Connect to the MySQL database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Create a route to handle data insertion
app.post('/insertData', (req, res) => {
    // Parse the incoming data (e.g., using bodyParser or JSON middleware)
    // For simplicity, we'll assume you have a JSON body with your data
    const { yourName, partnerName, marriageDate } = req.body;

    // SQL query to insert data into a table (assuming you have a 'marriages' table)
    const insertQuery = `INSERT INTO marriages (your_name, partner_name, marriage_date) VALUES (?, ?, ?)`;

    // Execute the query
    db.query(insertQuery, [yourName, partnerName, marriageDate], (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error inserting data');
            return;
        }
        console.log('Data inserted successfully');
        res.status(200).send('Data inserted successfully');
    });
});

// Start the server on a specified port
const PORT = 3000; // You can change this port as needed
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});