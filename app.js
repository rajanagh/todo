const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
var app = express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost:27017/todo");
// var found = [];
const trySchema = new mongoose.Schema({
    name:String
});
const item = mongoose.model("task",trySchema);
const todo = new item({
    name : "Create some Videos"
});
const todo2 = new item({
    name : "Learn DSA"
});
const todo3 = new item({
    name : "Create one App"
});
const todo4 = new item({
    name : "Saturday Vibes"
});
// todo2.save();
// todo3.save();
// todo4.save();

// app.get("/",function(req,res){
//     item.find({},function(err,foundItems){
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.render("list",{ejes : foundItems});
//         }
//     })
// });
// found = item.find({});
// app.get("/",function(req,res){
     
//     res.render("index",{ejes : found});
// });

app.get("/", function (req, res) {

    var today = new Date();
  
    
  
    item.find({}).then(function(FoundItems){
     
      res.render("index", {ejes : FoundItems});
  
    })
     .catch(function(err){
      console.log(err);
    })
  
  });
  app.post("/",function(req,res){
    const ele = req.body.textbox;
    const todo5 = new item({
        name : ele
    });
    todo5.save();
    res.redirect("/");
  });
  app.post("/delete",function(req,res){
    const checked = req.body.checkbox1;
    item.findByIdAndRemove(checked);
  });

app.listen(3000,function(){
    console.log('Server Engaged');
})