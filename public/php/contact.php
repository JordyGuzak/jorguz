<?php
$to      = 'jordy_guzak@hotmail.com';
$subject = $_REQUEST('subject');
$message = $_REQUEST('name') . "\n\n" . $_REQUEST('email') . "\n\n" .  $_REQUEST('message');
$headers = 'From: jordy@jorguz.nl' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>