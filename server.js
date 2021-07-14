const express = require("express")
const fs = require("fs")
const path = require("path")
const PORT = process.env.PORT || 3001
const app =express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("./devlop/public"))

app.get('/notes', (req,res)=>{
    res.sendFile(path.join(__dirname,"./develop/public/notes.html"))
    })

    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname,"./develop/public/index.html"))
        })

        app.get('/notes', (req, res) => {
            res.json((notes))
          });

          app.post('/notes', (req, res) => {
            notes.push(req.body)
            res.json(notes)
          });
app.listen(PORT,() =>{console.log("Server is Listening");})