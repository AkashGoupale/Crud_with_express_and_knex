const express = require("express");
const app=express()

const knex = require("./connection/connection");
const port=3000;

app.use(express.json())

app.listen(port , () => {
    console.log("Server Starting.....")
})

/// router for inserting the data..

app.post("/insert" , async (req,res) => {
    try {
        const data = await knex("ng_students").insert(req.body)
        console.log(data);
        res.send({massage:"successful" , stauts:req.body})
    }
    catch(err) {
        console.log(err);
        res.send("data does not insert..try again..")
    }
})

// router for showing all data...

app.get("/showdata" , async (req,res) => {
    try{
    const data = await knex ("ng_students")
    res.send({massage:"All data is ...." , stauts:data})
    }
    catch{
        console.log("Data does not found..")
    }
})

// router for showing data by unique id...

app.get("/data/:id" , async (req,res) => {
    try {
    const data = await knex ("ng_students").where({id:req.params.id})
    res.send({massage:"data showing by id" , stauts:data})
    }
    catch {
        res.send("data does not found..")
    }
})

// router for updating data by unique id...

app.put("/update/:id" , async (req,res) => {
    try {
    const data = await knex("ng_students").where({id:req.params.id}).update(req.body)
    res.send({massage:"Update successful" , status:req.body})
    }
    catch {
        res.send("Data does not update.")
    }
})

// router for Delete data by unique id...

app.delete("/delete/:id" , async (req,res) => {
    try {
    const data = await knex ("ng_students").where({id:req.params.id}).delete(req.body)
    res.send({massage:"delete successful"})
    }
    catch {
        res.send("Data does not delete..")
    }
})



