import express from "express"
import { handleGenerateNewUrl, handleGet } from "../controllers/Usercontrollers.js"

 const route=express.Router()

 route.post("/",handleGenerateNewUrl)
 route.get("/analytics/:shortid",handleGet)

 export default route
