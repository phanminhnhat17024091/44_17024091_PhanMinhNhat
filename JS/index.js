$(document).ready(function() {
    var i = 1; // Khởi tạo số thứ tự
    $("#btn2").click(function() {
        $("#myModal").modal();
    });



function kiemtraTen () {
    var i =1 ;
    let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
    if ($("#Name").val() == ""){
        $("#tbName").html("Không để trống");
        return false;
    }
    if (!mauKT.test($("#Name").val())) {
        $("#tbName").html("Mỗi kí tự đầu viết hoa không sử dụng số");
        return true;
    }
    $("#tbName").html("*");
    return true;
}
$("#Name").blur(kiemtraTen);

function kiemtraCmnd () {
    var mauKT = /[0-9]{9}$/;
    if ($("#Cmnd").val() == ""){
        $("#tbCmnd").html("Không để trống");
        return false;
    }
    if (!mauKT.test($("#Cmnd").val())) {
        $("#tbCmnd").html("Yêu cầu 9 chữ số");
        return true;
    }
    $("#tbCmnd").html("*");
    return true;    
}
$("#Cmnd").blur(kiemtraCmnd);

function kiemtraEmail () {
    var mauKT = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ($("#Email").val() == ""){
        $("#tbEmail").html("Không để trống");
        return false;
    }
    if (!mauKT.test($("#Email").val())) {
        $("#tbEmail").html("Theo mẫu xxxxxx@iuh.edu.vn");
        return true;
    }
    $("#tbEmail").html("*");
    return true;    
}
$("#Email").blur(kiemtraEmail);

function KiemTraDiaChi () {
    var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
    if ($("#DC").val() == ""){
        $("#tbDc").html("Không để trống");
        return false;
    }
    if (!mauKT.test($("#DC").val())) {
        $("#tbDc").html("Mỗi kí tự đầu viết hoa không sử dụng số");
        return true;
    }
    $("#tbDc").html("*");
    return true;
}
$("#DC").blur(KiemTraDiaChi);





function kiemtraSDT () {
    var mauKT = /^0\d{3}-\d{3}-\d{4}$/;
    if ($("#SDT").val() == ""){
        $("#tbSDT").html("Không để trống");
        return false;
    }
    if (!mauKT.test($("#SDT").val())) {
        $("#tbSDT").html("Theo dạng 0xxx-xxx-xxxx trong đó x là số");
        return true;
    }
    $("#tbSDT").html("*");
    return true;
}
$("#SDT").blur(kiemtraSDT);


$("#Save").click(function () {
    if (kiemtraTen() == true && kiemtraCmnd () == true && KiemTraDiaChi () == true && kiemtraEmail() == true && kiemtraSDT () == true) {
        row = "<tr>";
        row += "<th>" + (i++) + "</th>";
        row += "<th>" + $("#Name").val() + "</th>";
        row += "<th>" + $("#Cmnd").val() + "</th>";
        row += "<th>" + $("#DC").val() + "</th>";
        row += "<th>" + $("#Email").val() + "</th>";
        row += "<th>" + $("#SDT").val() + "</th>";
        row += "<th>" + $("#ADD").val() + "</th>";
        $("#danhSach").append(row);
        $("#myModal").modal("hide");
    }
})
})
