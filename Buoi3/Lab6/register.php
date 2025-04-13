<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $captcha_input = $_POST["captcha_input"];
    $captcha_session = $_SESSION["captcha_code"];

    if ($captcha_input != $captcha_session) {
        echo "<h3 style='color:red;'>❌ CAPTCHA sai. Vui lòng quay lại và thử lại!</h3>";
        echo "<a href='index.php'>Quay lại</a>";
        exit;
    }

    // Nếu đúng CAPTCHA, xử lý dữ liệu và lưu vào session
    // Nếu đúng CAPTCHA, xử lý dữ liệu và lưu vào session
    $sinhVien = [
        "hoTen" => $_POST["hoTen"],
        "matKhau" => $_POST["matKhau"],
        "email" => $_POST["email"],
        "tuoi" => $_POST["tuoi"],
        "ngaySinh" => $_POST["ngaySinh"],
        "gioiTinh" => $_POST["gioiTinh"],
        "soThich" => $_POST["soThich"] ?? [],
        "nganhHoc" => $_POST["nganhHoc"],
        "gioiThieu" => $_POST["gioiThieu"],
        "avatar" => ""
    ];

    // Upload file
    if ($_FILES["avatar"]["error"] == 0) {
        $target = "uploads/" . basename($_FILES["avatar"]["name"]);
        move_uploaded_file($_FILES["avatar"]["tmp_name"], $target);
        $sinhVien["avatar"] = $target;
    }

    // Lưu vào session một lần duy nhất
    $_SESSION["sinhVien"] = $sinhVien;


    // Hiển thị thông tin
    echo "<h2>✅ Đăng ký thành công!</h2>";
    echo "<strong>Thông tin đã lưu vào session:</strong><br>";
    echo "Họ tên: " . $_SESSION["sinhVien"]["hoTen"] . "<br>";
    echo "Email: " . $_SESSION["sinhVien"]["email"] . "<br>";
    echo "Tuổi: " . $_SESSION["sinhVien"]["tuoi"] . "<br>";
    echo "Ngày sinh: " . $_SESSION["sinhVien"]["ngaySinh"] . "<br>";
    echo "Giới tính: " . $_SESSION["sinhVien"]["gioiTinh"] . "<br>";
    echo "Sở thích: " . implode(", ", $_SESSION["sinhVien"]["soThich"]) . "<br>";
    echo "Ngành học: " . $_SESSION["sinhVien"]["nganhHoc"] . "<br>";
    echo "Giới thiệu: " . nl2br($_SESSION["sinhVien"]["gioiThieu"]) . "<br>";

    if ($_SESSION["sinhVien"]["avatar"]) {
        echo "Ảnh đại diện: <img src='" . $_SESSION["sinhVien"]["avatar"] . "' width='100'><br>";
        echo "Đường dẫn ảnh (debug): " . $_SESSION["sinhVien"]["avatar"] . "<br>";
    }
}
