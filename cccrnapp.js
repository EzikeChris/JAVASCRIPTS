// var express = require("express");
// var app = express();

// app.get("/", function (reg,res){
//     res.send("this will be the landing page soon!");

// })


// app.listen(process.env.PORT, process.env.ip, function(){
//     console.log("the cccrn website has started!");
// // })
// const express = require("express");

// const app = express();

// app.listen(5539, () => {
//     console.log("server is listening on port: 5539");
// })
 
const express = require("express");

 const PORT = 5538;
 const app = express();

 app.set("view engine", "ejs");

 app.get("/", (req, res) => {
     res.render("landing");
 });

 app.get("/projects",function (req, res){
     var projects =[
         { name:"cross river", image:"https://gwg.ng/wp-content/uploads/2020/01/Cross-River-Map.jpg"},
         { name:"benue", image:"https://headlinenewsnigeria.com/wp-content/uploads/2017/09/benue-Map.png"},
         { name:"enugu", image:"https://www.researchgate.net/profile/Henry_Ijeomah/publication/319065681/figure/fig1/AS:526180429123584@1502462598561/Map-of-Enugu-State-showingthe-study-sites.png"},
        ]

        res.render("projects",{projects:projects});
        });
  

 app.listen(PORT, () => {
     console.log("server is listening on port: ${PORT}");
 });