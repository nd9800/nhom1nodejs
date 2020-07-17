const express = require("express");
const app = express();

const PORT=process.env.PORT || 5000;
app.listen(PORT,function () {
    console.log("server is running...");
});
app.use(express.static("public"));
app.set("view engine","ejs");
const fs = require("fs");


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
app.get("/khuyen-mai",function(req,res){
    res.render("khuyen-mai");

});

app.get("/khuyen-mai/mua-1-tang-1-thu-nam",function(req,res){
    res.render("mua-1-tang-1-thu-nam");
});

app.get("/khuyen-mai/combo-de-khang",function(req,res){
    res.render("combo-de-khang");
});
app.get("/khuyen-mai/so-tay",function(req,res){
    res.render("so-tay");
});