const Producto = require('../models/category')
exports.CreateCategory=(req,res)=>{
    const categoryAdd= new Category({
        name: req.body.name,
        code:req.body.code,
        
})
CreateCategory.save().then((createdcategory)=>
res.status(201).json(createdcategory))
}