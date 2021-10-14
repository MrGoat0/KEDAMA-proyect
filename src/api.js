

//aqui hacemos la peticion
async function callApi(){
const response= await fetch("http://localhost:3002/api/products/");
const data= await response.json();
console.log(data);
return data;

}
export default callApi;