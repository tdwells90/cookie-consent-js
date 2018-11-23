var cookieConsent=function(p){"use strict";var m,b=function(e){"unchecked"===e&&p(".switch input").prop("checked",!1),"checked"===e&&p(".switch input").prop("checked",!0)},v=function(e){"unchecked"===e&&p(".marketing-checkbox").prop("checked",!1),"checked"===e&&p(".marketing-checkbox").prop("checked",!0)},f=function(e){"unchecked"===e&&p(".tracking-checkbox").prop("checked",!1),"checked"===e&&p(".tracking-checkbox").prop("checked",!0)},x=function(e){var c=new Date,i=c.getTime()+315576e5;c.setTime(i),document.cookie="allow"===e?"disallow_marketing=false;expires="+c.toGMTString()+";path=/":"disallow_marketing=true;expires="+c.toGMTString()+";path=/"},w=function(e){var c=new Date,i=c.getTime()+315576e5;c.setTime(i),document.cookie="allow"===e?"disallow_tracking=false;expires="+c.toGMTString()+";path=/":"disallow_tracking=true;expires="+c.toGMTString()+";path=/"},y=function(e,c){"undefined"!=typeof Storage?localStorage.setItem(e,c):console.log("No support for local storage")},T=function(e){if("undefined"!=typeof Storage)return localStorage.getItem(e);console.log("No support for local storage")};return{init:function(e){!function(c){var e,i;e=c.tracking&&T("consent")?document.cookie.replace(/(?:(?:^|.*;\s*)disallow_tracking\s*\=\s*([^;]*).*$)|^.*$/,"$1"):!(!c.tracking||T("consent")),i=c.marketing&&T("consent")?document.cookie.replace(/(?:(?:^|.*;\s*)disallow_marketing\s*\=\s*([^;]*).*$)|^.*$/,"$1"):!(!c.marketing||T("consent"));var t=c.trackingText?c.trackingText:"Tracking cookies help us track use of our website and make improvements.",n=c.marketingText?c.marketingText:"Marketing cookies are used to provide you with personalised marketing after you have visited our website.",o=c.primary?c.primary:"btn btn-primary",s=c.secondary?c.secondary:"btn btn-secondary",a=c.header?c.header:"Cookies",r=c.essentialHeader?c.essentialHeader:"Strictly necessary cookies",l=c.essentialText?c.essentialText:"These cookies are essential so that you can move around the website and use its features. Without these cookies services you have asked for cannot be provided.",k=c.mainText?c.mainText:"We use cookies to ensure you have the best browsing experience, to help us improve our website and for targeted advertising.. By continuing to browse the site you are agreeing to our use of cookies.",d="true"===e||"true"===i?'<h3><label class="switch"><input type="checkbox"><span class="slider round"></span></label> Third-party cookies</h3>':'<h3><label class="switch"><input type="checkbox" checked><span class="slider round"></span></label> Third-party cookies</h3>',h=c.tracking||c.marketing?'<a href="#" class="'+s+' cc-settings">Settings</a>':"",u="";c.tracking&&(u="true"===e&&e?'<div class="checkbox"><label><input type="checkbox" class="tracking-checkbox" value="tracking">'+t+"</label></div>":'<div class="checkbox"><label><input type="checkbox" class="tracking-checkbox" value="tracking" checked>'+t+"</label></div>");var g="";c.marketing&&(g="true"===i&&i?'<div class="checkbox"><label><input type="checkbox" class="marketing-checkbox" value="marketing">'+n+"</label></div>":'<div class="checkbox"><label><input type="checkbox" class="marketing-checkbox" value="marketing" checked>'+n+"</label></div>"),window.cookieconsent.initialise({container:p("#cookie-consent"),elements:{header:"",message:'<div class="cookie-consent" id="cookieconsent:desc"><h2>'+a+"</h2>"+k+"</div>",messagelink:'<div class="cookie-consent" id="cookieconsent:desc"><h2>'+a+"</h2>"+k+' <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="'+c.url+'" target="_blank">Find out more</a></div><div class="cookie-settings"><form><div class="settings-heading"><h2>Cookie Settings</h2><a tabindex="0" class="'+o+' settings-dismiss">Save settings</a></div><div class="settings-form"><h3>'+r+"</h3><p>"+l+"</p>"+d+'<div class="settings-indiv">'+u+g+"</div></div></form></div>",dismiss:'<a aria-label="dismiss cookie message" tabindex="0" class="'+o+' cc-btn cc-dismiss">Accept</a>'+h,allow:"",deny:"",link:"",close:""},revokable:!0,law:{regionalLaw:"UK"},location:!1},function(e){m=e,T("consent")||m.open()},function(e){console.error(e)}),p(".cc-privacy-link").on("click",function(e){e.preventDefault(),m.open()}),p(document).ready(function(){p(".switch input").prop("checked",!0),p(document).on("click",".cc-settings",function(e){e.preventDefault(),p(".cookie-heading, .cookie-consent, .cc-compliance").fadeOut(400),p(".cookie-settings").delay(400).fadeIn(400)}),p(document).on("click",".settings-dismiss",function(e){e.preventDefault(),p(".cookie-settings").fadeOut(400),p(".cookie-heading, .cookie-consent, .cc-compliance").delay(400).fadeIn(400)}),p(document).on("click",".switch input",function(e){p(".switch input").is(":checked")?(b("checked"),c.marketing&&v("checked"),c.tracking&&f("checked")):(b("unchecked"),c.marketing&&v("unchecked"),c.tracking&&f("unchecked"))}),p(document).on("change",".checkbox input",function(){p(".checkbox input:checked").length===p(".checkbox input").length?b("checked"):b("unchecked")}),p(document).on("click",".cc-dismiss",function(){c.tracking&&(p(".tracking-checkbox").is(":checked")?w("allow"):w("disallow")),c.marketing&&(p(".marketing-checkbox").is(":checked")?x("allow"):x("disallow")),T("consent")||y("consent","shown"),location.reload()})})}(e),T("consent")}}}(jQuery);