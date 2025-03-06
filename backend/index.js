const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    user: "root",
    host:"127.0.0.1",
    port: 3306,
    password: "",
    database: "felveteli"

})

app.get("/", (req,res) => {
    res.send("Fut a backend");
})

app.get("/adatok", (req,res) => {
    const sql = "SELECT diakok.nev, tagozatok.agazat, Sum(diakok.hozott + diakok.kpmagy + diakok.kpmat) from tagozatok inner join jelentkezesek on tagozatok.akod = jelentkezesek.tag inner join diakok on jelentkezesek.diak = diakok.oktazon where tagozatok.nyek = 1 GROUP BY tagozatok.agazat;";

    db.query(sql, (err,result) => {
        if(err) return res.json(err)
        return res.json(result)
    })
})

app.listen(3001, () => {
    console.log("Server is running on port 3001");
})