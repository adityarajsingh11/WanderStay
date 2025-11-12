if(process.env.NODE_ENV != "production") {
    require('dotenv').config()
}

const  express = require("express");
const  app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js"); // user model

// the below is not use in this file
const Listing = require("./models/listing.js");
const wrapAsync = require("./utils/wrapAsync.js");
const {listingSchema , reviewSchema} = require("./schema.js");
const Review = require("./models/review.js");

const listingRouter = require("./routes/listing.js");  
const reviewRouter =  require("./routes/review.js");
const userRoute = require("./routes/user.js"); 



const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"

main().then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.log("Error connecting to MongoDB", err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}



app.set("view engine" , "ejs");
app.set("views" ,path.join(__dirname , "views"));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate); // Use ejs-mate as the template engine
app.use(express.static(path.join(__dirname , "public")));

const sessionOption = {
    secret : "mysupersecretstring",
    resave : false ,
    saveUninitialized : true,
    cookie : {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 1 week
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        httpOnly: true, 
    }
};

// app.get("/",(req,res) => {
//     res.send("Hi I am root");
// });


app.use(session(sessionOption)); 
app.use(flash()); // flash middleware

app.use(passport.initialize()); // initialize passport
app.use(passport.session()); // use session for passport
passport.use(new LocalStrategy(User.authenticate()));// use static authenticate method of model in LocalStrategy

passport.serializeUser(User.serializeUser()); // serialize user
passport.deserializeUser(User.deserializeUser()); // deserialize user

app.use((req, res, next) => {
    res.locals.success = req.flash("success"); // for flash messages
    res.locals.error = req.flash("error"); // for flash messages
    res.locals.currUser = req.user; // current user
    next(); 
});

// app.get("/demouser", async(req,res) => {
//     let fakeUser = new User({
//         email: "student@gmail.com",
//         username: "delta-student",
//     });
//     let registeredUser = await User.register(fakeUser, "password123");  
//     res.send(registeredUser); // this will register the user and send the user object
// })


// to access listing and review 
app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRoute); 




// app.get("/testListing" , async(req,res) => {
//     let sampleListing = new Listing({
//         title : "My new Villa",
//         description : "By the beach",
//         price : 1200,
//         location : "Goa",
//         country : "India",
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });

//when  we uncomment this server is crashed 
// app.all("*" ,(req,res,next) => {
//     next(new ExpressError(404,"Page not Found!"));
// });

// defining the middlewares
app.use((err,req,res,next) => {
    // Log the error stack for debugging
    //console.error(err.stack);
    let {statusCode = 500, message = "Something went wrong"} = err;
    res.status(statusCode).render("error.ejs",{message});
    //res.status(statusCode).send(message);
});

app.listen(8080 , () => {  // this is runnung the port 8080 
    console.log("Server is running on port 8080");
});