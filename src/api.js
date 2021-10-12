const callApi = async (url, reqOptions) => {
  if (url === "/products/all") {
    var response = await fetch("http://localhost:3001/api" + url);
  } else {
    response = await fetch("http://localhost:3001/api" + url, reqOptions);
  }
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
};

export default api;
