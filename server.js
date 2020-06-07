const express=require('express');
const cors=require('cors');
const path=require('path');
const connectDB=require('./config/db');
const storeRoute=require('./routes/stores');



// connect to db
connectDB();

const app=express();

// post
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// enable cors
app.use(cors());

// static files
app.use(express.static(path.join(__dirname,'public')));

// routes
app.use('/api/v1/stores',storeRoute);



const PORT=3000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`)
);