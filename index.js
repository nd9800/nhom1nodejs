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
    res.render("lap_shop",{
        burgers: burgers
    });
});

app.get("/api/product",function(req,res) {
    let data = fs.readFileSync("data/sanphamburger.json","utf-8");
    let product = JSON.parse(data);
    res.send(product);
});

app.get("/home",function(req,res){
    res.render("toan-home");
});
app.get("/khuyen-mai",function(req,res){
    res.render("khuyen-mai");

});
app.get("/shop",function (req,res) {
    res.render("linhburger");
});
app.get("/about-us",function(req,res){
    res.render("hung-about-us");
});
app.get("/instruction",function(req,res){
    res.render("hung-instruction");
});
app.get("/recruit",function(req,res){
    res.render("hung-recruit");
});


app.get("/khuyen-mai/mua-1-tang-1-thu-nam", function(req,res) {
    let data = fs.readFileSync("data/discountburger.json","utf-8");
    let burgersdiscount = JSON.parse(data);
    res.render("mua-1-tang-1-thu-nam",{
        burgersdiscount: burgersdiscount
    });
});
app.get("/khuyen-mai/so-tay", function(req,res) {
    let data = fs.readFileSync("data/discountso_tay.json","utf-8");
    let burgersdiscount = JSON.parse(data);
    res.render("so-tay",{
        burgersdiscount: burgersdiscount
    });
});
app.get("/khuyen-mai/combo-de-khang", function(req,res) {
    let data = fs.readFileSync("data/combo.json","utf-8");
    let burgersdiscount = JSON.parse(data);
    res.render("combo-de-khang",{
        burgersdiscount: burgersdiscount
    });
});