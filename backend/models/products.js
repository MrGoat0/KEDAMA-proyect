const mongoose = require('mongoose');


const products = mongoose.Schema({ 
  name:{type:String,required:true},
  description:{type:String},
  price: {type:Number,required:true},
  url: {type:String,required:true},
  category: { type:mongoose.Schema.Types.ObjectId,ref:"Categoria",required:true},
  available: {type:Boolean,required:true},
  


});

module.exports=mongoose.model('Producto',products)