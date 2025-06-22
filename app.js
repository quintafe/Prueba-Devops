const express = require("express")
const app = express()
const PORT= 3000

app.get("/",(req,res)=>{
    res.sendFile(__dirname + `/public/index.html`)
})

app.get("/enlace",(req,res)=>{
    res.sendFile(__dirname + `/public/enlace.html`)
})

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el  http//:lochalhost${PORT}`)
})