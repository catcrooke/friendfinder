// You should save the data in your app as an array of objects. 
// Each of these objects should roughly follow the format below.
var friends = [{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
}, {
    "name": "Jacob Deming",
    "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
    "scores": ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
}, {
    "name": "Jeremiah Scanlon",
    "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
    "scores": ["5", "2", "2", "2", "4", "1", "3", "2", "5", "5"]
}, {
    "name": "Louis T. Delia",
    "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
    "scores": ["3", "3", "4", "2", "2", "1", "3", "2", "2", "3"]
}, {
    "name": "Lou Ritter",
    "photo": "https://m.facebook.com/photo.php?fbid=10208500699025296&id=1542229019&set=a.1549418665704.77596.1542229019&source=11",
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
