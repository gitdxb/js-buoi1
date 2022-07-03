/**
 * Bài toán: Tính tiền lương nhân viên
 * Khối 1:Input
 * ngayCong
 * soNgayLam
 * 
 * Khối 2:
 * B1: Khai báo và gán giá trị cho biến
 * B2: Lập công thức tính toán
 * var ngayCong = 100000; // Lương 1 ngày = 100k
 * var soNgayLam = prompt("Tháng này bạn làm được bao nhiêu ngày? ");
 * var tongLuong = 0;
 * tongLuong = ngayCong * soNgayLam;
 * 
 * B3: Thông báo kết quả 
 * alert("Tiền công của bạn tháng này là: " + tongLuong + " đồng");
 * 
 * Khối 3: Output
 * Tính lương theo ngày công
 * tongLuong = ngayCong * soNgayLam;
 */

//Bài toán: Tính tiền lương nhân viên
function tinhTienLuong() {
    var ngayCong = 100000; // Lương 1 ngày = 100k vnd
    var soNgayLam = parseInt(prompt("Tháng này bạn làm được bao nhiêu ngày? "));
    var tongLuong = 0;
    tongLuong = ngayCong * soNgayLam;
    alert("Tiền công của bạn tháng này là: " + tongLuong + " đồng");
}

tinhTienLuong();
