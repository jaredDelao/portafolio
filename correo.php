<?php

    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];

    $destino=$_POST['jaredhm07@gmail.com'];

    $asunto = $_POST['Correo jareddelao.top'];
    $card = "Nombre: $nombre \n".
            "Teléfono / Correo: $telefono \n";


    mail($destino, $asunto, $card);
    header("Location: index.html");
?>