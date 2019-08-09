        var express     = require("express"),
            app         = express(),
        expressSession  = require("express-session"),
            mongoose    = require("mongoose"),
            passport    = require("passport"),
        LocalStrategy   = require("passport-local"),
passportLocalMongoose   = require("passport-local-mongoose"),
            User        = require("./modules/user"),
            seedDB      = require("./seeds");

    const campgrounds   = require("./routes/campgrounds"),
            comments    = require("./routes/comments"),
                index   = require("./routes/index");

var port = process.env.PORT || 8080;
var ip = process.env.IP || "localhost";
mongoose.connect("mongodb://localhost/yelp_camp_v7", { useNewUrlParser: true });

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); 
app.use(expressSession({
    secret: "I am sitted in Christ Jesus!",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
})

app.use("/campgrounds", campgrounds);
app.use("/campgrounds/:id/comments", comments);
app.use(index);


// seedDB(); //Seeds the Database

// I S   L O G G E D   I N //
function IsLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
};


app.get("/", function (req, res) {
    res.render("landing");
});






app.listen(port, ip, function () {
    console.log("The YelpCamp Server v6 is running and listening at port: " + port);
});