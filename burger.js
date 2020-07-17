const express = require("express");
const app = express();
const PORT = 4000;
app.listen(PORT,function () {
    console.log("sever is running...");
});
app.use(express.static("public"));
app.set("view engine","ejs");
app.get("/",function (req,res) {
    res.render("linhburger");
});