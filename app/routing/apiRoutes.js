const data = require("../data/friends");

module.exports = app => {
    app.get("/api/friends", (req, res) => {
        res.json(data);
    });
    app.post("/api/friends", (req, res) => {
        const newFriend = req.body;
        const bestFriend = {
            name: "",
            photo: ""
        };
        let smallestDifference = 99999999;

        for (friend of data) {
            const totalDifference = newFriend.scores.reduce((accumulator, score, i) => {
                const difference = Math.abs(score - friend.scores[i]);
                return accumulator + difference;
            }, 0);

            if (totalDifference < smallestDifference) {
                smallestDifference = totalDifference;
                bestFriend.name = friend.name;
                bestFriend.photo = friend.photo;
            };
        };

        data.push(newFriend);
        res.json(bestFriend);
    });
};