<?php
$config = parse_ini_file('config.ini');
$mysqli = mysqli_connect($config['host'], $config['user'], $config['password'], $config['database']);
?>
<!doctype html>
<html>
  <head>
    <title>판도라큐브 체크인</title>
  </head>
  <body>
    <h1>판도라큐브 체크인</h1>
    <div class="">
      <label for="name">이름</label>
      <input id="name" name="name" type="text" />
      <label for="tell">전화번호</label>
      <input id="tell" name="tell" type="tell" />
      <button id="submit">확인</button>
    </div>

    <script src="jquery.js"></script>
    <script>
      $('#submit').click(function() {
        console.log('test');
      });
    </script>
  </body>
</html>
