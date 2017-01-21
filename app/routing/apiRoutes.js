// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.


var friends = require("../data/friends.js");

module.exports = function apiRoutes(app) {
    // Route to api/friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // Route to create friends JSON
    app.post("/api/friends", function(req, res) {
        // matchedFriendInfo variable is set equal to what is being returned in the next function because 
        // will be displayed in the modal
        var matchFriendInfo = bestMatch(friends, req.body);
        // pushes the new friend to the array
        friends.push(req.body);
        // the information that displays in the modal for the matched friend
        res.json(matchFriendInfo);

    });
};

function bestMatch(friends, newFriend) {
    // initialize a variable to find the closest difference between a person in the friends array to a person in the newFriend array
    var closestDifference;
    // initialize a variable to match the user inputed answers from the newFriend array to a person in the friend array
    var matchFriend;
    // for loop to iterate through the current friends array
    for (var i = 0; i < friends.length; i++) {
        // define a variable that can match the friend data at each index
        var friend = friends[i];
        // set a variable equal to the current difference between the two arrrays before they have been compared
        var difference = 0;
        // loop  through the newFriends (user) scores data from the array generated from their answers
        for (var j = 0; j < newFriend.scores.length; j++) {
            // set a variable equal to the scores of the users scores at each index
            var answerA = newFriend.scores[j];
            // set a variable equal to the scores of the preloaded scores at each index
            var answerB = friend.scores[j];
            // set the variable difference equal to itself plus the absolute value of the result of subtracting answerA from answerB
            difference = difference + (Math.abs(answerA - answerB));
        }
        // if the result of that difference is less than closestDifference OR closestDifference returns undefined
        if (difference < closestDifference || closestDifference === undefined) {
            // then closest match is the friend with the least amount of difference, 
            closestDifference = difference;
            // matchFriend is set equal to friend
            matchFriend = friend;
        }
        return {
            // information from the matched Friend that will display in the modal
            name: matchFriend.name,
        photo: matchFriend.photo

        };
    }
}
