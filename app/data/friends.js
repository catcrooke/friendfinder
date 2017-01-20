// You should save the data in your app as an array of objects. 
// Each of these objects should roughly follow the format below.
var friends = [{
    "name": "Sergey",
    "photo": "http://i.huffpost.com/gen/1358010/images/o-SERGEY-BRIN-facebook.jpg",
    "scores": ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
}, {
    "name": "Alan",
    "photo": "http://a2.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NDg0MDU1MTUzMTE2Njg3.jpg",
    "scores": ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
}, {
    "name": "Grace",
    "photo": "http://history-computer.com/ModernComputer/Software/images/Hopper_young.jpg",
    "scores": ["5", "2", "2", "2", "4", "1", "3", "2", "5", "5"]
}, {
    "name": "John",
    "photo": "https://www.wired.com/wp-content/uploads/blogs/wiredenterprise/wp-content/uploads/2011/10/john-mccarthy.png",
    "scores": ["3", "3", "4", "2", "2", "1", "3", "2", "2", "3"]
}, {
    "name": "Ada",
    "photo": "http://vignette1.wikia.nocookie.net/curious-expedition/images/a/a0/Lovelace.jpg/revision/latest?cb=20160129184107",
    "scores": ["4", "3", "4", "1", "5", "2", "5", "3", "1", "4"]
}];

module.exports = friends;


// Determine the user's most compatible friend using the following as a guide:
// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).


// With that done, compare the difference between current user's scores a
// against those from other users, question by question. 
// Add up the differences to calculate the totalDifference.
// Remember to use the absolute value of the differences. Put another way: no negative solutions! 
// Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.
// Once you've found the current user's most compatible friend, display the result as a modal pop-up.
// The modal should display both the name and picture of the closest match.
