import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import bodyparser from "body-parser";
import pkg from 'pg';
import { queries } from "@testing-library/react";
const { Client } = pkg;

// Use fileURLToPath to get __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const db=new Client({
    user:"postgres",
    host:"localhost",
    database:"User_data",
    password:"dochania.8855",
    port:5432,
});

app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'build')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.post("/read",(req,res)=>{
    db.query("SELECT * FROM users",(err,dbres)=>{
        if(err){
            console.log("Error encountered",err.stack);
        } else{
            // write an ejs code here which renders this data in the html fil in the form of a table
            res.json(dbres.rows);
        }
    });
});

app.post("/create",(req,res)=>{
    const { Name, Email, PhoneNumber, DateofBirth } = req.body;
    const query = "INSERT INTO users(name, email, phone_number, dob) VALUES($1, $2, $3, $4)";
    const values = [Name, Email, PhoneNumber, DateofBirth];

    db.query(query, values, (err, dbres) => {
        if(err){
            console.log("Error encountered",err.stack);
        } 
        else{
            res.sendFile(path.join(__dirname, 'build', 'index.html'));
        }
    })
})

app.post("/update",(req,res)=>{
    var PhoneNumberVer= req.body.PhoneNumberVer;
    var Name=req.body.Name;
    var Email=req.body.Email;
    var PhoneNumber=req.body.PhoneNumber;
    var DateofBirth=req.body.DateofBirth;
    var query = "UPDATE users SET";
    if(Name!==""){
        query=query+" name='"+Name+"'";
    }
    if(Email!==""){
        query=query+" ,email='"+Email+"'";
    }
    if(PhoneNumber!==""){
        query=query+" ,Phone_number='"+PhoneNumber+"'";
    }
    if(DateofBirth!==""){
        query=query+" ,dob='"+DateofBirth+"'";
    }
    query=query+" WHERE Phone_number='"+PhoneNumberVer+"'";
    console.log(query);

    db.query(query,(err, dbres) => {
        if(err){
            console.log("Error encountered",err.stack);
        } 
        else{
            res.sendFile(path.join(__dirname, 'build', 'index.html'));
        }
    })
})

app.post("/delete",(req,res)=>{
    const PhoneNumber = req.body.PhoneNumber;
    const query = "DELETE FROM users WHERE phone_number=$1 ";
    const values = [ PhoneNumber];

    db.query(query, values, (err, dbres) => {
        if(err){
            console.log("Error encountered",err.stack);
        } 
        else{
            res.sendFile(path.join(__dirname, 'build', 'index.html'));
        }
    })
})

db.connect(err => {
    if (err) {
        console.error('connection error', err.stack);
    } else {
        console.log('connected to the database');
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});