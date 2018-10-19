const router = require("express").Router();
var db = require("../../models");




router.route("/")
    .get((req, res) => {
        console.log("in service");
        db.Service.findAll({}).then(function (prom) {
            res.json(prom);
        });
    });


module.exports = router;