function renderProductList(productsList) {
  var content = "";
  for (var i = 0; i < productsList.length; i++) {
    var product = productsList[i];

    var contentTr = `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td><img src="${product.image}" alt="" style="width: 200px" /></td>
            <td>${product.description}</td>
            <td>
                <button class="btn btn-warning" onclick="editProduct('${product.id}')" >Edit</button>
                <button class="btn btn-danger" onclick="delProduct('${product.id}')">Del</button>
            </td>
        </tr>
    `;

    content += contentTr;
  }

  //   in danh sách ra giao diện
  document.querySelector("#tblDanhSachSP").innerHTML = content;
}

function getInfo() {
  var id = document.getElementById("MaSP").value;
  var name = document.getElementById("TenSP").value;
  var price = document.getElementById("GiaSP").value;
  var image = document.getElementById("HinhSP").value;
  var description = document.getElementById("MoTaSP").value;

  return new Product(id, name, price, image, description);
}

// reset form
function resetForm() {
  document.querySelector("#MaSP").value = "";
  document.querySelector("#TenSP").value = "";
  document.querySelector("#GiaSP").value = "";
  document.querySelector("#HinhSP").value = "";
  document.querySelector("#MoTaSP").value = "";
}

function onLoading() {
  document.querySelector("#spinner").style.display = "flex";
}

function offLoading() {
  document.querySelector("#spinner").style.display = "none";
}
