<?php
$config = parse_ini_file('config.ini');
$mysqli = mysqli_connect($config['host'], $config['user'], $config['password'], $config['database']);

$name = $_POST['name'];
$tell = $_POST['tell'];
$ip = $_SERVER['REMOTE_ADDR'];

$stmt = $mysqli->prepare('INSERT INTO entrance_log (Name, Tell, IP) VALUES (?, ?, ?)');

?>
