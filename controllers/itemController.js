const Item = require('../models/Item');

/* GET ITEM */
module.exports.get_items = (req,res) => {
    Item.find().sort({date:-1}).then(items => res.json(items));
}

/* POST ITEM*/ 
module.exports.post_item = (req,res) => {
    const newItem = new Item(req.body);
    newItem.save().then(item => res.json(item));
}
/* UPDATE AN ITEM*/
module.exports.update_item = (req,res) => {
    Item.findByIdAndUpdate({_id: req.params.id},req.body).then(function(item){
        Item.findOne({_id: req.params.id}).then(function(item){
            res.json(item);
        });
    });
}
/* DELETE ITEM */
module.exports.delete_item = (req,res) => {
    Item.findByIdAndDelete({_id: req.params.id}).then(function(item){
        res.json({success: true});
    });
}