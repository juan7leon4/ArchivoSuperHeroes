<?php
// Conexión a la base de datos
$conexion = new mysqli("localhost", "root", "", "superheroes_bd");

// Verificar conexión
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

// Obtener datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

// Insertar datos en la base de datos
$sql = "INSERT INTO mensajes_contacto (nombre, email, asunto, mensaje)
        VALUES ('$nombre', '$email', '$asunto', '$mensaje')";

if ($conexion->query($sql) === TRUE) {
    echo "Mensaje guardado con éxito.";
} else {
    echo "Error: " . $sql . "<br>" . $conexion->error;
}

$conexion->close();
?>
