function fetchProductList() {
  onLoading();
  //   axios({
  //     url: "https://65fc26b514650eb2100ba786.mockapi.io/products",
  //     method: "GET",
  //   })
  //     .then(function (response) {
  //       console.log("response: ", response.data);
  //       renderProductList(response.data);
  //     })
  //     .catch(function (err) {
  //       console.log("err");
  //     });

  productServ
    .getProduct()
    .then(function (response) {
      offLoading();
      console.log("response: ", response.data);
      renderProductList(response.data);
    })
    .catch(function (err) {
      offLoading();

      console.log("err", err);
    });
}

fetchProductList();

// xóa SP
function delProduct(id) {
  productServ
    .delProductByID(id)
    .then(function (response) {
      fetchProductList();
      console.log("sp đã bị xóa: ", response);
    })
    .catch(function (err) {
      console.log("err: ", err);
    });
}

// disable btn
function handleBtn(id, status) {
  document.querySelector(id).disabled = status;
}

// trả btn của modal về trang able khi đóng modal
$("#myModal").on("hidden.bs.modal", function () {
  // do something...
  handleBtn("#addProduct", false);
  handleBtn("#updateProduct", false);
});

// check khi click btn thêm thì disable btn update
document.querySelector("#btnThemSP").onclick = function () {
  handleBtn("#updateProduct", true);
};

// thêm sp
function addProduct() {
  var sp = getInfo();
  console.log("sp: ", sp);

  productServ
    .addProduct(sp)
    .then(function (response) {
      console.log("response: ", response);

      // tắt modal của BS sau khi thêm thành tắt công
      $("#myModal").modal("hide");
      resetForm();

      // lấy lại danh sách sp mới nhất từ api
      fetchProductList();
    })
    .catch(function (error) {
      console.log("error: ", error);
    });
}

// cập nhật sản phẩm
// Bước 1: lấy thông tin sp cần sửa show lên form
function editProduct(id) {
  productServ
    .getProductByID(id)
    .then(function (response) {
      console.log("response: ", response.data);
      var sp = response.data;

      // hiển thị thông sp cần sửa lên modal
      document.querySelector("#MaSP").value = sp.id;
      document.querySelector("#TenSP").value = sp.name;
      document.querySelector("#GiaSP").value = sp.price;
      document.querySelector("#HinhSP").value = sp.image;
      document.querySelector("#MoTaSP").value = sp.description;

      // disable btn
      handleBtn("#addProduct", true);
      handleBtn("#updateProduct", false);
      // mở modal
      $("#myModal").modal("show");
    })
    .catch(function (err) {
      console.log("err: ", err);
    });
}

// Bước 2: lấy thông tin từ form sau khi chỉnh sửa để cập nhật
function updateProduct() {
  var sp = getInfo();
  console.log("sp: ", sp);

  productServ
    .updateProductByID(sp.id, sp)
    .then(function (response) {
      console.log("response: ", response);

      //tắt modal sau khi update thành công
      $("#myModal").modal("hide");
      resetForm();

      // lấy lại data mới nhất
      fetchProductList();
    })
    .catch(function (err) {
      console.log("err: ", err);
    });
}

// tìm kiếm
function searchProductByName() {
  var name = document.querySelector("#txtSearch").value.trim().toLowerCase();

  productServ
    .getProduct()
    .then(function (response) {
      console.log("response: ", response);

      // array data
      var productList = response.data;

      // tìm kiếm tên người dùng nhập
      var result = productList.filter(function (sp) {
        return sp.name.toLowerCase().includes(name);
      });

      // render lại kết quả tìm thấy
      renderProductList(result);
    })
    .catch(function (err) {
      console.log("err", err);
    });
}

// tìm kiếm bằng sự kiện nhấn enter
document
  .querySelector("#txtSearch")
  .addEventListener("keydown", function (event) {
    console.log("event: ", event);
    // event là 1 object chứa thông tin về sự kiện
    // event.target: trả ra element phát sinh ra sự kiện
    // event.key: trả ra phím vừa mới nhấn

    if (event.key !== "Enter") return;

    var name = event.target.value;
    console.log("name: ", name);

    productServ
      .getProduct(name)
      .then(function (response) {
        console.log("response: ", response);

        renderProductList(response.data);
      })
      .catch(function (err) {
        console.log("err: ", err);
      });
  });
