const mongoose  = require("mongoose"),
    Campground  = require("./modules/campground"),
    Comment     = require("./modules/comment");

mongoose.connect("mongodb://localhost/yelp_camp_v7", { useNewUrlParser: true});

let data = [
    {
        name: "Obudu Cattle Resort",
        image: "http://localhost/images/rawpixel-247282-unsplash.jpg",
        description: "Paul a prisoner of Jesus Christ and Timothy brother unto Philemon our dearly beloved and fellowlabourer and to beloved Apphia and Archippus our fellowsoldier and to the church in thy house Grace to you and peace from God our Father and the Lord Jesus Christ I thank my God making mention of thee always in my prayers hearing of thy love and faith which thou hast toward the Lord Jesus and toward all saints that the communication of thy faith may become effectual by the acknowledging of every good thing which is in you in Christ Jesus for we have great joy and consolation in thy love because the bowels of the saints are refreshed by thee brother wherefore might be much bold in Christ to enjoin thee that which is convenient yet for love sake I rather beseech being such an one as Paul the aged and now also a prisoner of Jesus Christ I beseech thee for my son Onesimus whom I have begotten in my bonds which in time past was to thee unprofitable but now profitable to thee and to me whom I have sent again thou therefore receive him that is mine own bowels whom I would have retained with me that in thy stead he might have ministered unto me in the..."
    },
    {
        name: "Snake Island",
        image: "http://localhost/images/ethan-weil-462772-unsplash.jpg",
        description: "Paul a prisoner of Jesus Christ and Timothy brother unto Philemon our dearly beloved and fellowlabourer and to beloved Apphia and Archippus our fellowsoldier and to the church in thy house Grace to you and peace from God our Father and the Lord Jesus Christ I thank my God making mention of thee always in my prayers hearing of thy love and faith which thou hast toward the Lord Jesus and toward all saints that the communication of thy faith may become effectual by the acknowledging of every good thing which is in you in Christ Jesus for we have great joy and consolation in thy love because the bowels of the saints are refreshed by thee brother wherefore might be much bold in Christ to enjoin thee that which is convenient yet for love sake I rather beseech being such an one as Paul the aged and now also a prisoner of Jesus Christ I beseech thee for my son Onesimus whom I have begotten in my bonds which in time past was to thee unprofitable but now profitable to thee and to me whom I have sent again thou therefore receive him that is mine own bowels whom I would have retained with me that in thy stead he might have ministered unto me in the..."
    },
    {
        name: "Danger's Rest",
        image: "http://localhost/images/hello-i-m-nik-669204-unsplash.jpg",
        description: "Paul a prisoner of Jesus Christ and Timothy brother unto Philemon our dearly beloved and fellowlabourer and to beloved Apphia and Archippus our fellowsoldier and to the church in thy house Grace to you and peace from God our Father and the Lord Jesus Christ I thank my God making mention of thee always in my prayers hearing of thy love and faith which thou hast toward the Lord Jesus and toward all saints that the communication of thy faith may become effectual by the acknowledging of every good thing which is in you in Christ Jesus for we have great joy and consolation in thy love because the bowels of the saints are refreshed by thee brother wherefore might be much bold in Christ to enjoin thee that which is convenient yet for love sake I rather beseech being such an one as Paul the aged and now also a prisoner of Jesus Christ I beseech thee for my son Onesimus whom I have begotten in my bonds which in time past was to thee unprofitable but now profitable to thee and to me whom I have sent again thou therefore receive him that is mine own bowels whom I would have retained with me that in thy stead he might have ministered unto me in the..."
    }
]

const comment = {
    text: "I am Homer",
    author: "That is my name!"
}

function seedDB(){
    Campground.deleteMany({}, function(err, removed){
        // if(err){
        //     console.log(err);
        // } else {
        //     // console.log("////////////");
        //     // console.log("Removed all data from Campgrounds");
        //     data.forEach(function (eachData) {
        //         Campground.create(eachData, function (err, dataCreated) {
        //             if (err) {
        //                 console.log(err);
        //             } else {
        //                 Comment.create(comment, function (err, commentCreated) {
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         dataCreated.comment.push(commentCreated);
        //                         dataCreated.save();
        //                         // console.log(commentCreated);
        //                     }
        //                 }) 
        //             }
        //         })
        //     })            
        // }
    })
};

module.exports = seedDB;