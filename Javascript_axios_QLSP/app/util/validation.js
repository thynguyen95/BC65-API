// Kiểm tra rỗng
function kiemTraRong(value, idErr, message) {
  if (value.trim() === "") {
    getEle(idErr).innerHTML = message;
    return false;
  } else {
    getEle(idErr).innerHTML = "";
    return true;
  }
}

function kiemTraSo(value, idErr, message) {
  const re = /^[0-9]+$/;

  var isNumber = re.test(value);

  if (isNumber) {
    getEle(idErr).innerHTML = "";
    return true;
  } else {
    getEle(idErr).innerHTML = message;
    return false;
  }
}

function kiemTraTrung(id, array, idErr, message) {
  var viTri = array.findIndex(function (sv) {
    return sv.maSV === id;
  });

  if (viTri != -1) {
    // tìm thấy => bị trùng
    getEle(idErr).innerHTML = message;
    return false;
  } else {
    // không tìm thấy
    getEle(idErr).innerHTML = "";
    return true;
  }
}

// 4~6
// toán: 4 < value < 6
// js: value >= min && value <= max
function kiemTraDoDai(value, idErr, min, max, message) {
  var length = value.length;

  if (length >= min && length <= max) {
    getEle(idErr).innerHTML = "";
    return true;
  } else {
    getEle(idErr).innerHTML = message;
    return false;
  }
}

// kiểm tra chữ
function kiemTraChuoi(value, idErr, message) {
  const re =
    /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]+$/;
  var isString = re.test(value);

  if (isString) {
    getEle(idErr).innerHTML = "";
    return true;
  } else {
    getEle(idErr).innerHTML = message;
    return false;
  }
}

// kiểm tra email
function kiemTraEmail(value, idErr, message) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var isEmail = re.test(value);

  if (isEmail) {
    getEle(idErr).innerHTML = "";
    return true;
  } else {
    getEle(idErr).innerHTML = message;
    return false;
  }
}

// kiểm tra MK
function kiemTraMatKhau(value, idErr, message) {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  var isPassWord = re.test(value);

  if (isPassWord) {
    getEle(idErr).innerHTML = "";
    return true;
  } else {
    getEle(idErr).innerHTML = message;
    return false;
  }
}
