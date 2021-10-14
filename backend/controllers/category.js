const Category = require("../models/category");

exports.CreateCategory = (request, response) => {
  const categoriesForAdd = new Category({
    code: request.body.code,
    name: request.body.name
    ,
  });

  categoriesForAdd.save().then((categories) => {
    response.status(201).json(categories);
  });


};
exports.GetallCategories=(req,res)=>{

  Category.find().then((categorias)=>
  res.status(200).json(categorias))
}