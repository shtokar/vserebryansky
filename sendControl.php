<?php
 
 $controlName = $_POST['controlName'];
 $controlPhone = $_POST['controlPhone'];

 
// Load Composer's autoloader
require 'phpMailer/Exception.php';
require 'phpMailer/PHPMailer.php';
require 'phpMailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->CharSet = "UTF-8";
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.mail.ru';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'shtokar@mail.ru';                     // SMTP username
    $mail->Password   = '1912tva';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('shtokar@mail.ru', 'Repair Design');
    $mail->addAddress('shtokar1987@gmail.com');     // Add a recipient      

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта Repair (онлайн-форма)';
    $mail->Body    = "Пользователь оставил данные:
    Имя пользователя: ${controlName},
    Телефон: ${controlPhone}";

    if($mail->send())
    {         
        $new_url = '.modal-thanks-wrap--visible';
     //   $new_url = 'thanks.html';
        echo "<script>document.location.href='$new_url';</script>";

    }else{
        echo "Письмо не было отправлено, так как есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    }
    
} catch (Exception $e) {
    echo "Письмо не было отправлено, так как есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}
