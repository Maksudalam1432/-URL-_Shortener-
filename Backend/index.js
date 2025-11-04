import express from "express"
import dotenv from "dotenv"
import connectdb from "./config/dbcon.js"


const app=express()
dotenv.config()

const PORT=process.env.PORT ||4000
app.get("/",(req,res)=>{
     res.send("hello duniya")
})

app.listen(PORT,()=>{
  connectdb()
     console.log(`SERVER START FROM  PORT NO ${PORT}`)
})