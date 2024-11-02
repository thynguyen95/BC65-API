const BASE_URL = "https://65fc26b514650eb2100ba786.mockapi.io/products";

var productServ = {
  getProduct: function (name) {
    return axios({
      url: BASE_URL,
      method: "GET",

      // những cặp key:value khai báo bên trong object param sẽ được gửi lên url theo định dạng
      // https://65fc26b514650eb2100ba786.mockapi.io/products?key1=value&key2=value
      params: {
        name: name || undefined,
      },
    });
  },

  delProductByID: function (id) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "DELETE",
    });
  },
  addProduct: function (sp) {
    return axios({
      url: BASE_URL,
      method: "POST",
      data: sp,
    });
  },
  getProductByID: function (id) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "GET",
    });
  },
  updateProductByID: function (id, sp) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "PUT",
      data: sp,
    });
  },
};
