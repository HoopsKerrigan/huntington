<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "maccoykerrigan@gmail.com";
$subject = "Newsletter Contact Form";
$mailheader = "From: $email \r\n";
mail('maccoykerrigan@gmail.com', $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>
