

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const db = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"P@55word",
        database:"test"
    }
)

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json("Hello this is the backend");
})

app.get("/blogs", (req, res) => {
    const q = "SELECT * FROM blogs";
    db.query(q, (err, data) => {
        if(err) return res.json("There is an error: " + err)
        return res.json(data);
    });
})

app.post("/blogs", (req, res) => {
    const q = "INSERT INTO blogs (`title`, `desc`, `image`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.image,
    ]

    db.query(q, [values], (err, data) => {
        if(err) return res.json("There is an error: " + err)
        return res.json("Blog created succesfully");
    })
})

app.listen(5000, () => console.log("Server started on port 5000"));