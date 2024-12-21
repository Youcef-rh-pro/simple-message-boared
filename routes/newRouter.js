
const {Router, text}= require("express")
const newRouter= Router()
const messages= require("../db")
const formatDate=require("../formatDate")

newRouter.get("/",(req,res)=>{
    res.render("form")
})
newRouter.post("/",(req,res)=>{
    const { messageText , messageUser }=req.body
messages.push({text:messageText,user:messageUser, added: formatDate(new Date())})
res.redirect("/")
})
module.exports = newRouter