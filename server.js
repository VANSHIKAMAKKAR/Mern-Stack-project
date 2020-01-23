const express=require('express')
const session=require('express-session')
const mongoose=require('mongoose')
const config=require('./config/database')
const bodyParser=require('body-parser')

const app=express()

app.use(bodyParser.json())

mongoose.connect(config.database)
let db=mongoose.connection

db.once('open',()=>{
	console.log('Connected to mongodb')
})

db.on('error',(err)=>{
	console.log(err)
})


let USER=require('./models/users') 



app.listen(5000, ()=>{
	console.log('Server is running on port 5000  ...')
})
