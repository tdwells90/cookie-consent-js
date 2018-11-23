var cookieConsent = (function($) {
	"use strict";

	/**
	 *
	 *
	 * Checkbox functions
	 *
	 *
	 */
	// Main checkbox function
	var setCheckbox = function setCheckbox(state) {
		if (state === "unchecked") {
			$(".switch input").prop("checked", false);
		}

		if (state === "checked") {
			$(".switch input").prop("checked", true);
		}
	};

	// Marketing checkbox function
	var setMarketingCheckbox = function setMarketingCheckbox(state) {
		if (state === "unchecked") {
			$(".marketing-checkbox").prop("checked", false);
		}

		if (state === "checked") {
			$(".marketing-checkbox").prop("checked", true);
		}
	};

	// Tracking checkbox function
	var setTrackingCheckbox = function setTrackingCheckbox(state) {
		if (state === "unchecked") {
			$(".tracking-checkbox").prop("checked", false);
		}

		if (state === "checked") {
			$(".tracking-checkbox").prop("checked", true);
		}
	};

	/**
	 *
	 *
	 * Set Cookie functions
	 *
	 *
	 */
	// Marketing Cookie set
	var setMarketingCookie = function setMarketingCookie(state) {
		// Get todays date + time
		// Then get the expiry time of the cooke (1 year)
		var now = new Date();
		var time = now.getTime();
		var expireTime = time + 1000 * 31557600;
		now.setTime(expireTime);

		if (state === "allow") {
			// marketing
			document.cookie =
				"disallow_marketing=false;expires=" +
				now.toGMTString() +
				";path=/";
		} else {
			// marketing
			document.cookie =
				"disallow_marketing=true;expires=" +
				now.toGMTString() +
				";path=/";
		}
	};

	// Tracking Cookie set
	var setTrackingCookie = function setTrackingCookie(state) {
		// Get todays date + time
		// Then get the expiry time of the cooke (1 year)
		var now = new Date();
		var time = now.getTime();
		var expireTime = time + 1000 * 31557600;
		now.setTime(expireTime);

		if (state === "allow") {
			// Tracking Analytics
			document.cookie =
				"disallow_tracking=false;expires=" +
				now.toGMTString() +
				";path=/";
		} else {
			// Tracking Analytics
			document.cookie =
				"disallow_tracking=true;expires=" +
				now.toGMTString() +
				";path=/";
		}
	};

	// Empty var for popup
	var p;

	// Setup Cookies
	var setupCookies = function setupCookies(options) {
		// Tracking cookie value
		var trackingCookie;
		if (options.tracking && getStorage("consent")) {
			// trackingCookie = document.cookie.replace(
			// 	/(?:(?:^|.*;\s*)disallow_tracking\s*\=\s*([^;]*).*$)|^.*$/,
			// 	"$1"
			// );
			trackingCookie = getCookie("disallow_tracking");
		} else if (options.tracking && !getStorage("consent")) {
			trackingCookie = false;
		} else {
			trackingCookie = true;
		}
		console.log(trackingCookie);

		// marketing cookie value
		var marketingCookie;
		if (options.marketing && getStorage("consent")) {
			// marketingCookie = document.cookie.replace(
			// 	/(?:(?:^|.*;\s*)disallow_marketing\s*\=\s*([^;]*).*$)|^.*$/,
			// 	"$1"
			// );
			trackingCookie = getCookie("disallow_marketing");
		} else if (options.marketing && !getStorage("consent")) {
			marketingCookie = false;
		} else {
			marketingCookie = true;
		}

		// Options from init
		// Tracking text
		var trackingText = options.trackingText
			? options.trackingText
			: "Tracking cookies help us track use of our website and make improvements.";

		// Marketing text
		var marketingText = options.marketingText
			? options.marketingText
			: "Marketing cookies are used to provide you with personalised marketing after you have visited our website.";

		// Primary button classes
		var primaryButton = options.primary
			? options.primary
			: "btn btn-primary";

		var secondaryButton = options.secondary
			? options.secondary
			: "btn btn-secondary";

		// Main Header
		var header = options.header ? options.header : "Cookies";

		// Essential Cookies header
		var essentialHeader = options.essentialHeader
			? options.essentialHeader
			: "Strictly necessary cookies";

		// Essential Cookies text
		var essentialText = options.essentialText
			? options.essentialText
			: "These cookies are essential so that you can move around the website and use its features. Without these cookies services you have asked for cannot be provided.";

		// Main text on front of popup
		var mainText = options.mainText
			? options.mainText
			: "We use cookies to ensure you have the best browsing experience, to help us improve our website and for targeted advertising.. By continuing to browse the site you are agreeing to our use of cookies.";

		// Third party cookies checkbox
		var cookieText;
		if (options.tracking && options.marketing) {
			cookieText =
				trackingCookie && marketingCookie
					? '<h3><label class="switch"><input type="checkbox"><span class="slider round"></span></label> Third-party cookies</h3>'
					: '<h3><label class="switch"><input type="checkbox" checked><span class="slider round"></span></label> Third-party cookies</h3>';
		} else if (options.tracking && !options.marketing) {
			cookieText = trackingCookie
				? '<h3><label class="switch"><input type="checkbox"><span class="slider round"></span></label> Third-party cookies</h3>'
				: '<h3><label class="switch"><input type="checkbox" checked><span class="slider round"></span></label> Third-party cookies</h3>';
		} else {
			cookieText = marketingCookie
				? '<h3><label class="switch"><input type="checkbox"><span class="slider round"></span></label> Third-party cookies</h3>'
				: '<h3><label class="switch"><input type="checkbox" checked><span class="slider round"></span></label> Third-party cookies</h3>';
		}

		// Whether settings need to be displayed
		var showSettings =
			options.tracking || options.marketing
				? `<a href="#" class="${secondaryButton} cc-settings">Settings</a>`
				: "";

		// Tracking cookie checkbox
		var tracking = "";
		if (options.tracking) {
			tracking =
				trackingCookie !== "true" || !trackingCookie
					? `<div class="checkbox"><label><input type="checkbox" class="tracking-checkbox" value="tracking" checked>${trackingText}</label></div>`
					: `<div class="checkbox"><label><input type="checkbox" class="tracking-checkbox" value="tracking">${trackingText}</label></div>`;
		}

		// Marketing cookie checkbox
		var marketing = "";
		if (options.marketing) {
			marketing =
				marketingCookie !== "true" || !marketingCookie
					? `<div class="checkbox"><label><input type="checkbox" class="marketing-checkbox" value="marketing" checked>${marketingText}</label></div>`
					: `<div class="checkbox"><label><input type="checkbox" class="marketing-checkbox" value="marketing">${marketingText}</label></div>`;
		}

		// Init cookie consent
		window.cookieconsent.initialise(
			{
				container: $("#cookie-consent"),
				elements: {
					header: "",
					message: `<div class="cookie-consent" id="cookieconsent:desc"><h2>${header}</h2>${mainText}</div>`,
					messagelink: `<div class="cookie-consent" id="cookieconsent:desc"><h2>${header}</h2>${mainText} <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="${
						options.url
					}" target="_blank">Find out more</a></div><div class="cookie-settings"><form><div class="settings-heading"><h2>Cookie Settings</h2><a tabindex="0" class="${primaryButton} settings-dismiss">Save settings</a></div><div class="settings-form"><h3>${essentialHeader}</h3><p>${essentialText}</p>${cookieText}<div class="settings-indiv">${tracking}${marketing}</div></div></form></div>`,
					dismiss: `<a aria-label="dismiss cookie message" tabindex="0" class="${primaryButton} cc-btn cc-dismiss">Accept</a>${showSettings}`,
					allow: "",
					deny: "",
					link: "",
					close: ""
				},
				revokable: true,
				law: {
					regionalLaw: "UK"
				},
				location: false
			},
			function(popup) {
				p = popup;

				// If no localStorage is detected, open popup
				if (!getStorage("consent")) {
					// open the cookie consent popup
					p.open();
				}
			},
			function(err) {
				console.error(err);
			}
		);

		$(".cc-privacy-link").on("click", function(event) {
			// Prevent link default action
			event.preventDefault();

			// Open cookie consent
			p.open();
		});

		$(document).ready(function() {
			// By default, uncheck the tracking checkbox
			$(".switch input").prop("checked", true);
			// Settings link click
			$(document).on("click", ".cc-settings", function(event) {
				// Prevent default action (link click)
				event.preventDefault();

				// fadeout the current content, load in new
				$(".cookie-heading, .cookie-consent, .cc-compliance").fadeOut(
					400
				);

				// Fade in options
				$(".cookie-settings")
					.delay(400)
					.fadeIn(400);
			});

			// Dismiss the settings form
			$(document).on("click", ".settings-dismiss", function(event) {
				// Prevent default action (link click)
				event.preventDefault();

				// fadeout the current content, load in new
				$(".cookie-settings").fadeOut(400);

				// FadeIn prev content
				$(".cookie-heading, .cookie-consent, .cc-compliance")
					.delay(400)
					.fadeIn(400);
			});

			// Checkbox click
			$(document).on("click", ".switch input", function(event) {
				// If is not checked, disallow and uncheck Marketing + tracking checkboxes
				if (!$(".switch input").is(":checked")) {
					setCheckbox("unchecked");

					// Marketing
					if (options.marketing) {
						setMarketingCheckbox("unchecked");
					}

					// Tracking
					if (options.tracking) {
						setTrackingCheckbox("unchecked");
					}

					// Otherwise, do the opposite
				} else {
					setCheckbox("checked");

					// Marketing
					if (options.marketing) {
						setMarketingCheckbox("checked");
					}

					// Tracking
					if (options.tracking) {
						setTrackingCheckbox("checked");
					}
				}
			});

			// Check if all inputs are checked.
			$(document).on("change", ".checkbox input", function() {
				// If checked inputs matches total number of inputs, check the toggle.
				// Otherwise, uncheck
				if (
					$(".checkbox input:checked").length ===
					$(".checkbox input").length
				) {
					setCheckbox("checked");
				} else {
					setCheckbox("unchecked");
				}
			});

			// When closing the popup, set cookies
			// And refresh the page
			$(document).on("click", ".cc-dismiss", function() {
				// Check tracking checkbox
				if (options.tracking) {
					if ($(".tracking-checkbox").is(":checked")) {
						// Set cookie to allow
						setTrackingCookie("allow");
					} else {
						// Set cookie to disallow
						setTrackingCookie("disallow");
					}
				}

				// Marketing checkbox
				if (options.marketing) {
					if ($(".marketing-checkbox").is(":checked")) {
						// Set cookie to allow
						setMarketingCookie("allow");
					} else {
						// Set cookie to disallow
						setMarketingCookie("disallow");
					}
				}

				// If no localStorage is detected, open popup
				if (!getStorage("consent")) {
					// Set localStorage
					setStorage("consent", "shown");
				}

				location.reload();
			});
		});
	};

	/**
	 *
	 *
	 * Get value of cookie
	 *
	 *
	 */
	function getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(";");
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == " ") {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	/*
	 * SET LOCALSTORAGE FUNCTION
	 *
	 * == PARAMS ==
	 * name = Name of localstorage item to change
	 * update = The update to the item to apply
	 *
	 */
	var setStorage = function setStorage(name, update) {
		if (typeof Storage !== "undefined") {
			localStorage.setItem(name, update);
		} else {
			console.log("No support for local storage");
		}
	};

	/*
	 * GET LOCALSTORAGE FUNCTION
	 *
	 * == PARAMS ==
	 * name = Name of localstorage item to retrieve
	 *
	 */
	var getStorage = function getStorage(name) {
		if (typeof Storage !== "undefined") {
			return localStorage.getItem(name);
		} else {
			console.log("No support for local storage");
		}
	};

	var init = function init(options) {
		setupCookies(options);
		getStorage("consent");
	};

	return {
		init: init
	};
})(jQuery);
