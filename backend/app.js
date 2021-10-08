var express = require("express");
var app = express();
const mongoose = require('mongoose');
const productsRoutes = require("./router/products");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//link de prueba completo (para productos) seria: http://localhost:3002/api/products
app.use("/api/products", productsRoutes);

//conexion a mongoose:
//Sigrun password to database:oxyzgJ5ELGuVvBR7
mongoose.connect('mongodb+srv://Sigrun:oxyzgJ5ELGuVvBR7@cluster0.kls93.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>console.log('estamos conectados'))


// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

module.exports = app;