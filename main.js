// Bài tập 6 (thêm)
// In số nguyên tố
// Hàm kiểm tra số nguyên tố
function ktSoNguyenTo(x) {
    if (x <= 1) return 0; //0 : false
    for (var j = 2; j <= Math.sqrt(x); j++) {
        if (x % j == 0) return 0;
    }
    return 1; //1 : true
}

// function main(n) {
//     for(var i = 2; i <= n; i++) {
//         if (ktSoNguyenTo(i)) {
//             console.log(i)
//         }
//     }
//     return i
// }
// console.log(main(30))
document.getElementById("btnKetQua").onclick = function() {
    var soNguyenTo = document.getElementById("soNguyenTo").value * 1;
    var result = "";

    for (var i = 2; i <= soNguyenTo; i++) {
        if (ktSoNguyenTo(i)) {
            result += " " + i;
        }
    }
    document.getElementById("txtFooter").innerHTML = "Số nguyên tố nhỏ hơn " + soNguyenTo + " là : " + result;
}