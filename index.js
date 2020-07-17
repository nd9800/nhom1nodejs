const express = require("express");
const app = express();
const PORT=process.env.PORT || 5000;
app.listen(PORT,function () {
    console.log("sever is running...");
});
app.use(express.static("public"));
app.set("view engine","ejs");
const fs = require("fs");
app.get("/khuyenmai",function(req,res){
    res.render("nam");
});

app.get("/menu", function(req,res) {
    let data = fs.readFileSync("data/sanphamburger.json","utf-8");
    let burgers = JSON.parse(data);
    let productId = req.params.id;
    let product = {};
    burgers.map(function (e) {
        if(e.id == productId){
            product = e;
        };
    })
    res.render("lap_shop",{
        burgers: burgers,
        product: product
    });
});
app.get("/home",function(req,res){
    res.render("toan-home");
});