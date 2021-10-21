const Sales = require("../models/sales"); 
// getSales
exports.getSales = (req, res) => {
  Sales.find()
    .then((salesList) => {
      res.status(200).json(salesList);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
//  Crea un nuevo producto
// exportaciones.createSales = (req, res) => {
//   sales const = nuevos sales (req.body);
 
//   producto
//     .ahorrar()
//     .entonces ((createdProduct) => {
//       res.status (201) .json (producto creado);
//     })
//     .catch ((err) => {
//       res.status (500) .json ({error: err});
//     });
// };
 
// // Obtener todos los productos
// exportaciones.getProductos = (req, res) => {
//   Products.find ()
//     .sort ({id: 1})
//     .entonces ((productResult) => {
//       res.status (200) .json (productResult);
//     })
//     .catch ((err) => {
//       res.status (). json ({error: err});
//     });
// };
 
// // Obtener número de productos y maxId
// export.infoProducts = (req, res) => {
//   Products.find ()
//     .entonces ((infoResult) => {
//       res.status (200) .json ({
//         count: infoResult.length,
//         maxId: infoResult.sort ((a, b) => a.id - b.id) .splice (-1) [0] .id,
//       });
//     })
//     .catch ((err) => {
//       res.json ({error: err});
//     });
// };
 
// // Obtener fragmentos de registros de acuerdo con la página
// export.sliceProducts = (req, res) => {
//   const indicesStartAt = 10000;
//   var startAt = indicesStartAt + 40 * (req.params.page - 1);
 
//   Products.find ({id: {$ gte: startAt}})
//     .límite (40)
//     .sort ({id: 1})
//     .entonces ((sliceResult) => {
//       res.status (200) .json (sliceResult);
//     })
//     .catch ((err) => {
//       res.json ({error: err});
//     });
// };
 
// // Obtener un producto por id o descripción
// Exportaciones.filterProductos = (req, res) => {
//   const filterId = /^[0-9]+$/i.test(req.params.search)
//     ? parseInt (req.params.search)
//     : 0;
 
//   let filterDesc = req.params.search
//     .split (/ \ s + /)
//     .map ((kw) => '"' + kw + '"')
//     .entrar(" ");
 
//   Products.find ({
//     $ o: [{id: {$ eq: filterId}}, {$ text: {$ search: filterDesc}}],
//   })
//     .sort ({id: 1})
//     .entonces ((filterResult) => {
//       res.status (200) .json (filterResult);
//       console.log (filterResult);
//     })
//     .catch ((err) => {
//       console.log (err);
//       res.status (404) .json ("ERROR");
//     });
// };
 
// // Actualizar un producto por id
// export.updateProduct = (req, res) => {
//   Products.updateOne ({_id: req.params.id}, req.body)
//     .entonces ((updateResult) => {
//       res.status (200) .json (updateResult);
//     })
//     .catch ((err) => {
//       res.status (500) .json ({error: err});
//     });
// };
 
// // Eliminar un usuario por id
// export.deleteProduct = async (req, res) => {
//   Products.deleteOne ({_id: req.params.id})
//     .entonces ((updateResult) => {
//       res.status (200) .json (updateResult);
//     })
//     .catch ((err) => {
//       res.status (404) .json ({error: err});
//     });
// };
const Sales = require("../models/sales")