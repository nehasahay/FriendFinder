const data = require("../data/friends");

module.exports = app => {
    app.get("/api/friends", (req, res) => {
        res.json(data);
    });
    app.post("/api/friends", (req, res) => {
        data.push(req.body);
        res.json(true);
    });
};