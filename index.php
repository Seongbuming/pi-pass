<?php
$config = parse_ini_file('config.ini');
$mysqli = mysqli_connect($config['host'], $config['user'], $config['password'], $config['database']);
?>
<!doctype html>
<html>
  <head>
    <title>판도라큐브 체크인</title>
    <style>
      .message {
        display: none;
      }
    </style>
  </head>
  <body>
    <h1>판도라큐브 체크인</h1>

    <form id="form">
      <label for="name">이름</label>
      <input id="name" name="name" type="text" />
      <label for="tell">전화번호</label>
      <input id="tell" name="tell" type="tell" />
      <button id="submit">확인</button>
    </form>

    <div id="message" class="message">
      <div id="message-result" class="message-result"></div>
      <button id="close-button" class="close-button">닫기</button>
    </div>

    <script src="jquery.js"></script>
    <script>
      $('#submit').click(function() {
        $.ajax({
          type: 'post',
          url: 'submit.php',
          cache: false,
          contentType: false,
          processData: false,
          data: new FormData($('#form')[0])
        }).done(function(result) {
          if (result === '1') {
            $('#message-result').text('완료되었습니다.');
            $('#message').show();
          }
        }).fail(function() {
          
        });
      });
    </script>
  </body>
</html>
