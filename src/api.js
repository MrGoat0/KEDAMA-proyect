const callApi = async (url, reqOptions = {}) => {
  // if (url === "/products/all") {
  //   var response = await fetch("http://localhost:3001/api" + url);
  // } else {
  //   response = await fetch("http://localhost:3001/api" + url, reqOptions);
  // }
  // const data = await response.json();
  reqOptions.headers = {Accept: "application/json","Content-Type": "application/json",authorization: "Bearer " + localStorage.getItem('token'),};
  const response = await fetch("http://localhost:3001/api" + url, reqOptions);
  const data = await response.json();
  console.log(data);
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

    delete(id, reqOptions) {
      return callApi("/products/" + id, reqOptions);
    },

    info() {
      return callApi("/products/info");
    },
    slice(page) {
      return callApi("/products/slice/" + page);
    },
    filter(search) {
      return callApi("/products/filter/" + search);
    },
  },
  users: {
    getUser(reqOptions) {
      return callApi("/users/", reqOptions);
    },
    validateRole(reqOptions) {
      return callApi("/users/roles", reqOptions);
    },
    getAllUsers() {
      return callApi("/users/all");
    },
    getByEmail(email) {
      return callApi("/users/search/" + email);
    },
    updateUser(reqOptions) {
      return callApi("/users", reqOptions);
    },
  },
  sales:{
    list() {
      return callApi("/sales/app");
    },//reqOptions
    create(sale) {
      return callApi("/sales/", {method: "POST", body: JSON.stringify(sale)});//{method: POST, body: JSON.stringify}
    }
    // update(id, reqOptions) {
    //   return callApi("/products/" + id, reqOptions);
    // },
   },
};

export default api;
