const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyParser =  require("body-Parser")
const cookieParser =  require("cookie-Parser")
const expressValidator = require("express-validator")


 

require("dotenv").config()
const routes = require("./Routes/route")
const router = require("./Routes/user")
const categoryRoutes = require("./Routes/category")
const productRoutes = require("./Routes/product")






// app
const app = express()

const port = process.env.PORT || 5000


// db
mongoose.connect(process.env.DATABASE , {
    useNewUrlParser:true,
    
}).then(()=>{
    console.log("Database connected")
})

 

// middlewares 

app.use(morgan('dev')) 
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())

app.use(routes)
app.use(router)
app.use(categoryRoutes)
app.use(productRoutes)
 

// Server
app.listen(port , ()=>{
    console.log("Server created")
}) 