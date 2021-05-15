// console.log('This is log 3')
// console.log('This is log 4')
// var bienA = 1;
// console.log(bienA);
// //string
// var ten = 'Bùi Minh Quang';
// console.log(typeof ten);
// ten = 12;
// console.log(typeof ten);
// //number
// var so = 21;
// console.log(typeof so);
// // boolean
// var gioitinh = true;
// console.log(typeof gioitinh);
// // null
// var lop = null;
// // undefined
// var chieucao;
// console.log(typeof chieucao);

// Toán tử
// var a = 1;
// var b = 3;
// var c = 4;
// console.log(a);
// Phép cộng
// var sum = a + b + c;
// console.log(sum);
// // Phép trừ
// var minus = a - b;
// console.log(minus);
// // Phép Nhân
// var mul = b * c;
// console.log(mul);
// // Phép chia
// var div = b/c;
// console.log(div);
// Phép gán
// a = a + 1;
// console.log(a);
// // Tăng giá trị
// var tangGiaTri = a++;
// console.log(tangGiaTri);
// console.log(a);
// // Chia lấy dư
// var chiaLayDu = 5 % 2;
// console.log(chiaLayDu);

// // Hằng số
// const NAM_SINH = 2000;

// Bài 1
// Bước 1
// var a = 1;
// var b = 2;
// // Bước 2
// var sum = a + b;
// // Bước 3
// console.log('Tổng ' + a + '+' + b + '=' + sum);
// alert('Tổng là: ' + sum);

//Bài 2
// Tính chiều dài cạnh huyền của một tam giác vuông khi biết 2 cạnh góc vuông, edge1 = 10, edge2 = 12;

// // Bước 1
// var edge1 = 10;
// var edge2 = 12;
// // Bước 2
// var edge3 = Math.sqrt(edge1 * edge1 + edge2 * edge2)
// // Bước 3
// console.log("Chiều dài cạnh huyền là: " + edge3 + ' cm');

//Bài 3
// Tên phim, giá vé người lớn, giá vé trẻ em, số vé người lớn đã bán, số vé trẻ em được bán và tỷ lệ phần trăm của tổng số tiền quyên góp từ thiên

// Bước 1
var tenPhim = "TOM & JERRY";
var giaVeNguoiLon = 95000;
var giaVeTreEm = 25000;
var soVeNguoiLonDaBan = 5234;
var soVeTreEmDaBan = 2145;
var phanTramQuyenGop = 0.1;
// Bước 2
var tongSoVeBan = soVeTreEmDaBan + soVeNguoiLonDaBan;
var doanhThuNguoiLon = giaVeNguoiLon * soVeNguoiLonDaBan;
var doanhThuTreEm = giaVeTreEm * soVeTreEmDaBan;
var doanhThu = doanhThuNguoiLon + doanhThuTreEm;
var tongSoTienTrichTuThien = doanhThu * phanTramQuyenGop;
var tongTien = doanhThu - tongSoTienTrichTuThien;
// Bước 3
console.log(tenPhim);
console.log(tongSoVeBan);
console.log(phanTramQuyenGop * 100 + '%');
console.log('Tổng doanh thu: ' + doanhThu + 'VND');
console.log('Tổng số tiền trích từ thiện: ' + tongSoTienTrichTuThien + ' VND');
console.log('Tổng số tiền sau khi quyên góp: ' + tongTien + ' VND');
