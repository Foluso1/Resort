const           express = require("express"),
                router  =   express.Router()
            mongoose    =   require("mongoose"), 
            passport    =   require("passport"), 
       LocalStrategy    =   require("passport-local")
                User    =   require("../modules/user");



////////////////////////////////////////////////
////////// A U T H    R O U T E ////////////////
////////////////////////////////////////////////

router.get("/register", function (req, res) {
    res.render("register");
});

router.post("/register", function (req, res) {
    //receive data from req.body
    //post to db
    User.register({ username: req.body.username }, req.body.password, function (err, user) {
        if (err) {
            console.log(err)
        } else {
            console.log("New User Details in DB:" + user);
            res.redirect("/login");
        }
    });
    //res.send("Hello Post route for register");
});

router.get("/login", function (req, res) {
    res.render("login");
});

router.post("/login", passport.authenticate("local", {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function (req, res) {
});

router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/campgrounds");
});

////// S E C R E T   P A G E //////
// router.get("/secret", IsLoggedIn, function(req, res){
//     res.render("secret");
// })

module.exports = router;
