// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.

// Route to api/friends
app.get("/api/friends", function(req, res) {
    res.json(friends);
});


// Route to create friends JSON
app.post("/api/friends", function(req, res) {
    var newFriends = req.body;
    var listType;
    console.log(newFriends);
    // if (friends.length < 5) {
    //     listType = 'friendsList';
    //     friends.push(newFriends);
    // } else {
    //     listType = 'waitlist';
    //     waitlist.push(newTable);
    // }


    console.log('friends: ' + JSON.stringify(friends));
    res.send(listType);

});
