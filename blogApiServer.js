const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Blog = require('./models/blogModel');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());


const DB = "mongodb+srv://mee112114:Mrs%40112114115@cluster0.eeausst.mongodb.net/ReactBlogWeb?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(DB).then(()=>{
    console.log("connection successful");
 }).catch((err)=>{
    console.log(err);
 });
 
 app.post('/blogs', async (req, res) => {
    try {
        const blog = new Blog(req.body);
        await blog.save();
        res.status(201).send(blog);
    } catch (error) {
        res.status(400).send(error);
    }
});

 app.get('/blogs', async (req, res) => {
    try {
        const blog = await Blog.find();
        res.send(blog);
    } catch (error) {
        res.status(500).send(error);
    }
});


app.get('/blogById/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).send();
        }
        res.send(blog);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(5000 , () => {
    console.log("Server is running on port 5000");
});