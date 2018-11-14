var cookieConsent=function(u){"use strict";var g,p=function(e){"unchecked"===e&&u(".switch input").prop("checked",!1),"checked"===e&&u(".switch input").prop("checked",!0)},b=function(e){"unchecked"===e&&u(".marketing-checkbox").prop("checked",!1),"checked"===e&&u(".marketing-checkbox").prop("checked",!0)},m=function(e){"unchecked"===e&&u(".tracking-checkbox").prop("checked",!1),"checked"===e&&u(".tracking-checkbox").prop("checked",!0)},v=function(e){var c=new Date,i=c.getTime()+315576e5;c.setTime(i),document.cookie="allow"===e?"disallow_marketing=false;expires="+c.toGMTString()+";path=/":"disallow_marketing=true;expires="+c.toGMTString()+";path=/"},x=function(e){var c=new Date,i=c.getTime()+315576e5;c.setTime(i),document.cookie="allow"===e?"disallow_tracking=false;expires="+c.toGMTString()+";path=/":"disallow_tracking=true;expires="+c.toGMTString()+";path=/"},f=function(e,c){"undefined"!=typeof Storage?localStorage.setItem(e,c):console.log("No support for local storage")},w=function(e){if("undefined"!=typeof Storage)return localStorage.getItem(e);console.log("No support for local storage")};return{init:function(e){var c,i,o,t,n,a,s,l,r,k,d,h;c=e,i=document.cookie.replace(/(?:(?:^|.*;\s*)disallow_tracking\s*\=\s*([^;]*).*$)|^.*$/,"$1"),o=document.cookie.replace(/(?:(?:^|.*;\s*)disallow_marketing\s*\=\s*([^;]*).*$)|^.*$/,"$1"),a='<h2><label class="switch"><input type="checkbox"><span class="slider round"></span></label> Third-party cookies</h2>',s=n=t="",l=c.trackingText?c.trackingText:"Tracking cookies help us track use of our website and make improvements.",r=c.marketingText?c.marketingText:"Marketing cookies are used to provide you with personalised marketing after you have visited our website.",c.header&&c.header,k=c.essentialHeader?c.essentialHeader:"Strictly necessary cookies",d=c.essentialText?c.essentialText:"These cookies are essential so that you can move around the website and use its features. Without these cookies services you have asked for cannot be provided.",h=c.mainText?c.mainText:"We use cookies to ensure you have the best browsing experience, to help us improve our website and for targeted advertising.. By continuing to browse the site you are agreeing to our use of cookies.",c.tracking&&c.marketing&&(i||x("disallow"),"true"===i&&i||(n="true"===i&&i?'<div class="checkbox"><label><input type="checkbox" class="tracking-checkbox" value="tracking">'+l+"</label></div>":'<div class="checkbox"><label><input type="checkbox" class="tracking-checkbox" value="tracking" checked>'+l+"</label></div>")),c.tracking&&!c.marketing&&(i||x("disallow"),"true"===i&&i||(n="true"===i&&i?'<div class="checkbox"><label><input type="checkbox" class="tracking-checkbox" value="tracking">'+l+"</label></div>":'<div class="checkbox"><label><input type="checkbox" class="tracking-checkbox" value="tracking" checked>'+l+"</label></div>")),c.marketing&&(o||v("disallow"),t="true"===o&&o?'<div class="checkbox"><label><input type="checkbox" class="marketing-checkbox" value="marketing">'+r+"</label></div>":'<div class="checkbox"><label><input type="checkbox" class="marketing-checkbox" value="marketing" checked>'+r+"</label></div>"),(c.marketing||c.tracking)&&(a="true"===i||"true"===o?'<h2><label class="switch"><input type="checkbox"><span class="slider round"></span></label> Third-party cookies</h2>':'<h2><label class="switch"><input type="checkbox" checked><span class="slider round"></span></label> Third-party cookies</h2>',s='<a href="#" class="cc-settings">Settings</a>'),window.cookieconsent.initialise({container:u("#cookie-consent"),elements:{header:"",message:'<div class="cookie-heading"><h2>Cookies</h2></div><div class="cookie-consent" id="cookieconsent:desc">'+h+"</div>",messagelink:'<div class="cookie-heading"><h2>Cookies</h2></div><div class="cookie-consent" id="cookieconsent:desc">'+h+' <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="'+c.url+'" target="_blank">Find out more</a></div><div class="cookie-settings"><form><div class="settings-heading"><h2>Cookie Settings</h2><div class="form-group"><a tabindex="0" class="settings-dismiss">Save settings</a></div></div><div class="settings-form"><h2>'+k+"</h2><p>"+d+"</p>"+a+'<div class="settings-indiv">'+n+t+"</div></div></form></div>",dismiss:'<a aria-label="dismiss cookie message" tabindex="0" class="cc-btn cc-dismiss">Accept</a>'+s,allow:"",deny:"",link:"",close:""},revokable:!0,law:{regionalLaw:"UK"},location:!1},function(e){g=e,w("consent")||(g.open(),f("consent","shown"))},function(e){console.error(e)}),u(".cc-privacy-link").on("click",function(e){e.preventDefault(),g.open()}),u(document).ready(function(){u(".switch input").prop("checked",!0),u(document).on("click",".cc-settings",function(e){e.preventDefault(),u(".cookie-heading, .cookie-consent, .cc-compliance").fadeOut(400),u(".cookie-settings").delay(400).fadeIn(400)}),u(document).on("click",".settings-dismiss",function(e){e.preventDefault(),u(".cookie-settings").fadeOut(400),u(".cookie-heading, .cookie-consent, .cc-compliance").delay(400).fadeIn(400)}),u(document).on("change",".checkbox input",function(){u(".checkbox input:checked").length===u(".checkbox input").length?p("checked"):p("unchecked")}),u(document).on("change",".marketing-checkbox",function(){u(".marketing-checkbox").is(":checked")?v("allow"):v("disallow")}),u(document).on("change",".tracking-checkbox",function(){u(".tracking-checkbox").is(":checked")?x("allow"):x("disallow")}),u(document).on("click",".switch input",function(e){u(".switch input").is(":checked")?(p("checked"),v("allow"),b("checked"),x("allow"),m("checked")):(p("unchecked"),v("disallow"),b("unchecked"),x("disallow"),m("unchecked"))})}),w("consent")}}}(jQuery);