require('dotenv').config()
const express = require('express');
const mysql2 = require('mysql2')
const path = require('path')

// console.log(process.env.HOST, process.env.USERNAME, process.env.DATABASE);
const connection = mysql2.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
});

const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.get('/api/calendar', (req, res) => {
    connection.query(
        'SELECT * FROM concerts;',
        function (err, results, fields) {
            if (err) console.error(err);
            res.json(results)
        }
    );
});

if (process.env.NODE_ENV === 'production') { // If this is in production, then we need to use react as a static thing, instead of in the client folder. 
    const folder = path.join(__dirname, 'client', 'build');
    app.use(express.static(path.join(folder)));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(folder, 'index.html'));
    });
}


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
});