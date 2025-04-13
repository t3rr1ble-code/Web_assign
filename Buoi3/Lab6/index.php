<!DOCTYPE html>
<html>
<head>
    <title>Form Đăng Ký Sinh Viên</title>
</head>
<body>
    <h2>Form Đăng Ký Thông Tin Sinh Viên</h2>
    <form action="register.php" method="post" enctype="multipart/form-data">
        Họ và tên: <input type="text" name="hoTen" required><br><br>
        Mật khẩu: <input type="password" name="matKhau" required><br><br>
        Email: <input type="email" name="email" required><br><br>
        Tuổi: <input type="number" name="tuoi" min="18" max="100"><br><br>
        Ngày sinh: <input type="date" name="ngaySinh"><br><br>

        Giới tính:
        <input type="radio" name="gioiTinh" value="Nam"> Nam
        <input type="radio" name="gioiTinh" value="Nữ"> Nữ
        <input type="radio" name="gioiTinh" value="Khác"> Khác<br><br>

        Sở thích:
        <input type="checkbox" name="soThich[]" value="Đọc sách"> Đọc sách
        <input type="checkbox" name="soThich[]" value="Nghe nhạc"> Nghe nhạc
        <input type="checkbox" name="soThich[]" value="Du lịch"> Du lịch<br><br>

        Ngành học:
        <select name="nganhHoc">
            <option value="CNTT">Công nghệ thông tin</option>
            <option value="Kinh tế">Kinh tế</option>
            <option value="Ngôn ngữ Anh">Ngôn ngữ Anh</option>
        </select><br><br>

        Giới thiệu bản thân:<br>
        <textarea name="gioiThieu" rows="4" cols="50"></textarea><br><br>

        Ảnh đại diện: <input type="file" name="avatar"><br><br>

        <!-- CAPTCHA -->
        Nhập mã xác thực: <img src="captcha.php" alt="CAPTCHA" width="300"><br>
        <input type="text" name="captcha_input" required><br><br>

        <input type="submit" value="Đăng ký">
    </form>
</body>
</html>
