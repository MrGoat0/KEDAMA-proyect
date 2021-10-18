const callApi = async (url, reqOptions = {}) => {
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
  },
};

export default api;
