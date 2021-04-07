const express = require('express')
const mongojs = require('mongojs')
const db = mongojs('lazarovadb',['todos'])

const app = express();
app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.post('/save',(req,res)=>{
    let msg = req.body.msg;
    db.todos.insert({msg:msg,date:new Date().toDateString()},(err,data)=>{
        res.send("Sve ok")
    })
})

app.get('/get_data',(req,res)=>{
    db.todos.find((err,data)=>{
        res.send(data);
    })
})

app.listen(3000,()=>{
    console.log('3000')
})