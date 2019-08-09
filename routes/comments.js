const           express     = require("express"),
                router      = express.Router({ mergeParams: true })
                mongoose    = require("mongoose"),
                passport    = require("passport"),
                Campground  = require("../modules/campground"),
                Comment     = require("../modules/comment");


//Create New Comment
router.get("/new", IsLoggedIn, function (req, res) {
    //find Campground by id so as to be able to pass data to ejs
    const username = req.user.username;
    console.log(username);
    Campground.findById(req.params.id, function (err, campground) {
        if (err) {
            console.log(err);
        } else {
            //display form
            res.render("./comments/new", { campground: campground, username });
        }
    })
});


//Post New Comment
router.post("/", IsLoggedIn, function (req, res) {
    //get data from body parser
    const commentUser = req.body.comment;
    const idCampComment = req.params.id;
    const username = req.user.username;
    const userId = req.user._id;
    // Creates Campground in MongoDB
    Campground.findById(idCampComment, function (err, thisCampground) {
        if (err) {
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            // Creates comment in MongoDB 
            Comment.create(commentUser, function (err, commentCreatedUser) {
                if (err) {
                    console.log(err);
                    res.redirect("/campgrounds");
                } else {
                    //pass the data to database (mongoDB)
                    // commentCreatedUser.author.push(username);
                    commentCreatedUser.author.username = username;
                    commentCreatedUser.author.id = userId;
                    commentCreatedUser.save();
                    thisCampground.comment.push(commentCreatedUser);
                    thisCampground.save();
                    console.log(thisCampground);
                    console.log("///new data has been added to database///");
                }
            })
            res.redirect("/campgrounds/" + idCampComment);
        }
    })
});


function IsLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
};

module.exports = router;