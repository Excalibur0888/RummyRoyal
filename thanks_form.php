<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $phone = isset($_POST["phone"]) ? $_POST["phone"] : "";
    $subject = isset($_POST["subject"]) ? $_POST["subject"] : "Contact Form";
    
    $to = "contact@" . $_SERVER['HTTP_HOST'];
    $email_subject = "RummyRoyal: $subject";
    
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    if (!empty($phone)) {
        $body .= "Phone: $phone\n";
    }
    $body .= "Message:\n$message";
    
    $headers = "From: $email \r\n";
    $headers .= "Reply-To: $email \r\n";
    
    mail($to, $email_subject, $body, $headers);
    
    // Redirect to thank you page
    header("Location: thanks.html");
    exit();
}
?>
