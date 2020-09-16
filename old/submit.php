<?php
$config = parse_ini_file('config.ini');
$mysqli = mysqli_connect($config['host'], $config['user'], $config['password'], $config['database']);

$name = $_POST['name'];
$tell = $_POST['tell'];
$ip = $_SERVER['REMOTE_ADDR'];

$stmt = $mysqli->prepare('INSERT INTO entrance_log (Name, Tell, IP) VALUES (?, ?, ?)');
$stmt->bind_param('sss', $name, $tell, $ip);
$result = $stmt->execute();
if ($result)
  print('1');
else
  print('0');
?>
