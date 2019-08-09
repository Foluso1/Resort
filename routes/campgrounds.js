        const   express     =   require("express"),
                router      =   express.Router()
                mongoose    =   require("mongoose"), 
                Campground  = require("../modules/campground");


//INDEX ROUTE
router.get("/", function (req, res) {
    const currentUser = req.user;
    // res.send("Campgrounds page is here!");
    Campground.find({}, function (err, allCampgrounds) {
        if (err) {
            // console.log("Something Went Wrong!");
            console.log(err);
        } else {
            // res.send("Hello you!");
            res.render("campgrounds", { allCampgrounds, currentUser });
        }
    });
});


//CREATE ROUTE
router.post("/", IsLoggedIn, function (req, res) {
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    Campground.create(
        {
            name: name,
            author: author,
            image: image,
            description: desc
        }, function (err, campground) {
            if (err) {
                // console.log("Something Went Wrong!!!");
                console.log(err);
            } else {
                // console.log("You added a new data to database");
                // console.log(campground);
                //redirect to campgrouns page
                res.redirect("/");
            }
        });
});


//NEW ROUTE (FORM)
router.get("/new", IsLoggedIn, function (req, res) {
    res.render("new");
});


//SHOW ROUTE
router.get("/:id", function (req, res) {
    //get id of current campground
    let id = req.params.id;
    // console.log(id);
    Campground.findById({ _id: id }).populate("comment").exec(function (err, thisCampground) {
        if (err) {
            console.log(err);
        } else {
            // console.log("\\\\\\FOZA\\\\\\");
            //console.log(thisCampground);
            res.render("show", { thisCampground });
        }
    });
})

// I S   L O G G E D   I N //
function IsLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
};

module.exports = router;