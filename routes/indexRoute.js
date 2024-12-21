const {Router, text}= require("express")
const indexRouter= Router()
const messages= require("../db")


indexRouter.get("/",(req,res)=>{
    res.render("index",{title:"Mini messageboard",messages:messages})
})
module.exports= indexRouter