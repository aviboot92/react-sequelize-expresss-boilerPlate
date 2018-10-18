const router = require("express").Router();
var db = require("../../models");




    router.route("/")
    .get((req,res )=> {
        console.log("in service");
        db.Service.findAll({}).then(function(prom){
            res.json(prom);
        });
    });

    // app.get("/:makeId",function(req,res){
    //     console.log(req);
    //     db.Service.findAll({
    //         where:{
    //             CarMakeId : 13
    //         }
    //     }).then(function(prom){
    //         res.json(prom);
    //     });
    // });

    // app.get("/cat",function(req,res){
    //     console.log(req);
    //     db.Service.findAll({
    //         where:{
    //             ServiceDepartmentId : 2,
    //             CarMakeId : 1
    //         }
    //     }).then(function(prom){
    //         res.json(prom);
    //     });
    // });
module.exports = router;