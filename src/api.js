const callApi = async (url, reqOptions) => {
  if (url === "/products/") {
    var response = await fetch("http://localhost:3001/api" + url, reqOptions);
  } else {
    response = await fetch("http://localhost:3001/api" + url);
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
  },
};

export default api;
