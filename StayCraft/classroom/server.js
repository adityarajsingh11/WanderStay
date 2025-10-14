const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
// const cookieParser = require("cookie-parser");app.set("view engine" , "ejs");
app.set("view engine" , "ejs");
app.set("views" ,path.join(__dirname , "views"));



// app.use(cookieParser("secretcode"));  // cookie-parser middlewares

// app.get("/getsignedcookies",(req,res) => {
//     res.cookie("made-in" , "India",{signed:true});
//     res.send("signed cookie send");

// });

// //  to verify the signed cookies
// app.get("/verify",(req,res) => {
//     console.log(req.signedCookies);
//     res.send("verify");
// })

// app.get("/getcookies",(req,res) => {
//     res.cookie("greet","namaste");
//     res.cookie("MadeIn","India");
//     res.send("send your some cookies!");
// })

// app.get("/greet",(req,res) => {
//     let {name = "anonymous"} = req.cookies;
//     res.send(`hi ,${name}`);
// });


// app.get("/",(req,res) => {
//     console.dir(req.cookies);
//     res.send("Hi i am root");
// });

// app.use("/users",users);  // for using the user route (here /users is the common part )

// app.use("/posts",posts);  // for using the post route (here /posts is the common part )

const sessionOption = {
    secret : "mysupersecretstring",
    resave : false ,
    saveUninitialized : true,
}
app.use(session(sessionOption)); // session middleware
app.use(flash()); // flash middleware

app.get("/register", (req,res) => {
    let {name = "anonymous"} = req.query; // getting the name from query string
    req.session.name = name; // storing name in session
    
    if(name === "anonymous"){
        req.flash("error","user not registered!");  
    } else{
        req.flash("success","user registered successfully!");
    }
      
    res.redirect("/hello"); // redirecting to /hello route
});

app.get("/hello", (req,res) => {
    res.locals.successMsg = req.flash("success"); 
    res.locals.errorMsg = req.flash("error");
    res.render("page.ejs",{name : req.session.name }); 
});

// app.get("/reqcount",(req,res) => {
//     if(req.session.count){ // if count already exists in session
//         req.session.count++;
//     }else{
//         req.session.count = 1;
//     }
    
//     res.send(`You sent a request ${req.session.count} times`);
// });
    

// app.get("/test",(req,res) => {
//     res.send("test route is running");
// });



app.listen(3000,()=>{  // this is running the 3000 port 
    console.log("server is listening to 3000");
})