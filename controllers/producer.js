// @file product.js <controllers>
// REST controller definitions
let db = require('../models/index')

module.exports = {
    index: (req, res) => {            
        db.producer.findAll(
    ).then((d) => {
        let data = d.map((p) => {
             return {
                id: p.id,
                name: p.name
            }
        })
        res.json(data)
    })
    },
    new: (req, res) => {
        res.send("new forum");
    },
    create: (req, res) => {
        let data = {
        name:req.body.name
        }
        db.vuetodotable.create(data).then((p)=>{
          res.json({
              id: p.id,
              name: p.name
        })
        })
        console.log("processed")
    },
    show: (req, res) => {
        res.send("show forum " + req.params.forum);
    },
    edit: (req, res) => {
        res.send("edit forum " + req.params.forum);
    },
    update: (req, res) => {
        res.send("update forum " + req.params.forum);
    },
    delete: (req, res) => {
       res.send("destroy forum " + req.params.forum);
    }
}