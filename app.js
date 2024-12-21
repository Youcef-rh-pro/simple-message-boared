


const messages= require("./db")
const express = require("express")


const path = require('node:path')
const app = express()
const assetsPath = path.join(__dirname,"public")
const indexRouter= require("./routes/indexRoute")
const newRouter= require("./routes/newRouter")
app.use(express.static(assetsPath))
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use("/",indexRouter)
app.use("/new",newRouter)


const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`listening on port: ${PORT}`)
})