// Bài 5: Tính tổng 2 ký số
/**
 * Khối 1: Input
 * Nhập số có 2 chữ số, VD: 12,33,34
 * 
 * Khối 2: Lập công thức tính toán
 * B1: Khai báo biến
 * number (số có 2 chữ số)
 * soHangChuc, soDonVi
 * 
 * B2: Tính toán
 * soHangChuc = Math.floor(number/10);
 * soDonVi = number % 10;
 * tong = soHangChuc + soDonVi;
 * 
 * B3: In kết quả
 * console.log("Tổng của số có 2 chữ số: " + number);
 * console.log("Là: " + soHangChuc + " + " + soDonVi + " = " + tong);
 * 
 * Khối 3: Output
 * In kết quả, VD: 12 = 1 + 2;
 * 
 */


// B1: Khai báo biến
var number = 35;
var soHangChuc = 0;
var soDonVi = 0;
var tong = 0;

// B2: Tính toán
soHangChuc = Math.floor(number/10);
soDonVi = number % 10;
tong = soHangChuc + soDonVi;

// B3: In kết quả
console.log("Tổng của số có 2 chữ số: " + number);
console.log("Là: " + soHangChuc + " + " + soDonVi + " = " + tong);