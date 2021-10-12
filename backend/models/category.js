const mongoose = require('mongoose');


const categoria = mongoose.Schema({ 
  name:{type:String,required:true},
  code:{type:String,required:true},

  


});

module.exports=mongoose.model('Categoria',categoria)