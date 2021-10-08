const mongoose = require('mongoose');


const products = mongoose.Schema({ 
  name:{type:String,required:true},
  description:{type:String,required:true},
  price: {type:Number,required:true},
  url: {type:String,required:true},
  category: {type:String,required:true},
  available: {type:Boolean,required:true},
  


});

module.exports=mongoose.model('Producto',products)