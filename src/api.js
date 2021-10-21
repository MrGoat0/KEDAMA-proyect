
  // if (url === "/products/all") {
  //   var response = await fetch("http://localhost:3001/api" + url);
  // } else {
  //   response = await fetch("http://localhost:3001/api" + url, reqOptions);
  // }
  // const data = await response.json();
  reqOptions.headers = {Accept: "application/json","Content-Type": "application/json",}
  const response = await fetch("http://localhost:3001/api" + url, reqOptions);
  const data = await response.json();
  return data;
};

const api = {
  products: {
    list() {
      return callApi("/products/all");
    },
    create(reqOptions) {
      return callApi("/products/", reqOptions);
    },
    update(id, reqOptions) {
      return callApi("/products/" + id, reqOptions);
    },
  },
  sales:{
    list() {
      return callApi("/sales/all");
    },//reqOptions
    create(sale) {
      return callApi("/sales/", {method: "POST", body: JSON.stringify(sale)});//{method: POST, body: JSON.stringify}
    },
    list() {
        return callApi("/sales/all");
      },
    //   create(reqOptions) {
    //     return callApi("/products/", reqOptions);
    //   },
    //   update(id, reqOptions) {
    //     return callApi("/products/" + id, reqOptions);
    //   },
  
    //   delete(id, reqOptions) {
    //     return callApi("/products/" + id, reqOptions);
    //   },
  
    //   info() {
    //     return callApi("/products/info");
    //   },
    //   slice(page) {
    //     return callApi("/products/slice/" + page);
    //   },
    //   filter(search)
    }

   },
   users:{
    list() {
      return callApi("/users/all");
    }
   },
};

export default api;
