// bất đồng bộ
// event loop

console.log("a");

// setTimeout: chờ trong 1 khoảng thời gian mới thực hiện code
setTimeout(() => {
  console.log("b");
}, 3000);

console.log("c");

// x: param
function abc(x) {
  console.log("x", x);

  callback();
}

function callback() {
  console.log("callback");
}

abc("xxxxx");

abc(callback);

// promise: sẽ giải quyết vấn đề callback hell
// promise: sẽ trả về 3 trạng thái - pending, resolve, reject
var sum = 10;
const promiseA = new Promise(function (resolve, reject) {
  // thực thi các tác vụ bất đồng bộ(call api)
  setTimeout(function () {
    if (sum > 10) {
      reject("fail");
    }

    resolve("success");
  }, 1000);
});

const promiseB = function (param) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (param === "fail") {
        reject("test fail");
      }

      resolve("test success");
    }, 1000);
  });
};

// đối tượng promise cung cấp 2 phương thức: then(trả về data khi chạy thành công) và catch(trả về error khi chạy lỗi)
// promise chaining
promiseA
  .then(function (response) {
    return promiseB(response);
  })
  .then(function (res) {
    // kết quả của promiseB trả về
    console.log("res", res);
  })
  .catch(function (err) {
    console.log("err", err);
  });

// sử dụng axios để call API từ backend
// axios viết dựa trên promise trả về cho mình 1 promise

// console.log(axios());
axios({
  url: "https://65fc26b514650eb2100ba786.mockapi.io/products",
  method: "GET",
})
  .then(function (respone) {
    console.log("respone", respone);
  })
  .catch(function (err) {
    console.log("error", err);
  });
