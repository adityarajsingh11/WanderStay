const User = require("../models/user"); 

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.signup = async (req, res) => {
    try{
        let { username, email, password } = req.body;   
        const newUser = new User({ username, email });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        // Automatically log in the user after registration 
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err); // handle login error
            }
            req.flash("success", "Welcome to Wanderlust!"); 
            res.redirect("/listings");
        });
        
    }catch (e) {
        req.flash("error", e.message); // flash error message
        res.redirect("/signup"); // redirect to signup page
    }
    
};

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.login = async(req, res) => {
    req.flash("success","Login successful!"); 
    res.redirect(res.locals.redirectUrl || "/listings"); // redirect to the saved URL or listings page
};

module.exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Logged out successfully!");
        res.redirect("/listings"); // redirect to listings page after logout
    });
};