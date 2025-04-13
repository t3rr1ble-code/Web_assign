<?php
    require "function.php";
    session_start();
    setPNGHeader();
    $alphabet = "aaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789";
    $captcha = makeCaptcha($alphabet, 8);
    makePNGCatpcha($captcha);

    $_SESSION['captcha_code'] = $captcha;
?>