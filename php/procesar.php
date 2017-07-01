<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$cuerpo = '<p style="margin-bottom: 15px;"> <span style="font-weight: bold;">Remitente:</span> ' . $nombre . '</p>';
$cuerpo .= '<p style="margin-bottom: 15px;"> <span style="font-weight: bold;">Email:</span> ' . $email . '</p>';
$cuerpo .= '<p style="margin-bottom: 15px; line-height: 16px;"> <span style="font-weight: bold;">Mensaje:</span> ' . $mensaje . '</p>';

$destino = 'federico.mirandaa@gmail.com';
$asunto = 'Mensaje web';

$encabezados = 'MIME-Version: 1.0' . "\r\n";
$encabezados .= 'Content-type:text/html;charset=UTF-8' . "\r\n";
$encabezados .= 'From: ' . $nombre . '<' . $mail . '>' . "\r\n"; 

mail( $destino, $asunto, $cuerpo, $encabezados );
header("Location: ../gracias.html")  
?>