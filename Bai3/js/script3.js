// Bài 3: Quy đổi tiền
/**
 * Khối 1: Input
 * tyGia (1USD = 23500VND)
 * soTienInput (số tiền USD cần quy đổi)
 * 
 * 
 * Khối 2: Lập công thức tính toán
 * B1: Khai báo biến
 * var tyGia = 23500;
 * var soTienInput = parseInt(prompt("Nhập số tiền cần quy đổi: "));
 * var soTienOutput = 0;
 * 
 * B2: Lập công thức tính toán 
 * soTienOutput = tyGia * soTienInput;
 * 
 * B3: In ket qua
 * alert("Số tiền bạn sẽ nhận được là " + soTienOutput + " VND");
 *
 * 
 * Khối 3: Output
 * soTienOutput (số tiền sau khi đã quy đổi tỷ giá)
 * 
 */

// B1: Khai báo biến
 var tyGia = 23500; // 1 USD = 23500VND
 var soTienInput = parseInt(prompt("Nhập số tiền cần quy đổi: "));
 var soTienOutput = 0;

 // B2: Lập công thức tính toán
 soTienOutput = tyGia * soTienInput;

 // B3: In ket qua
 alert("Số tiền bạn sẽ nhận được là " + soTienOutput + " VND");