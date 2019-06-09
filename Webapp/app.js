const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

var n = 0;

app.get("/",(req, res)=>{
    if(n == 0){
        res.render("index", {login : "Login" , sub : ""});
}
else{
    res.render("index", {login : "Login" , sub : "Submitted"});
}
})

app.post("/", (req, res)=>{
    console.log(req.body);
    n = n+1;
    res.redirect("/");
})

app.post("/login", (req, res)=>{
    res.render("login", {login : "Logout"});
});

app.get("/details", (req, res)=>{
    res.render("details", {login: "Login"});
})
app.listen(3001, () => console.log(`listening on http://localhost:3000`));
