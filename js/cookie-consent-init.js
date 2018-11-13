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
		var trackingCookie = document.cookie.replace(
			/(?:(?:^|.*;\s*)disallow_tracking\s*\=\s*([^;]*).*$)|^.*$/,
			"$1"
		);

		// marketing cookie value
		var marketingCookie = document.cookie.replace(
			/(?:(?:^|.*;\s*)disallow_marketing\s*\=\s*([^;]*).*$)|^.*$/,
			"$1"
		);

		// Init empty variables for plugin defaults
		var marketing = "";
		var tracking = "";
		var cookieText = "";
		var showSettings = "";
		var advertisingText =
			"We use cookies to ensure the best browsing experience and help us improve this website";

		// check options
		// If there's both ticked
		if (options.tracking && options.marketing) {
			// Check if tracking cookie exists or not
			if (!trackingCookie) {
				// Init tracking cookie
				setTrackingCookie("disallow");
			}

			if (trackingCookie !== "true" || !trackingCookie) {
				// Tracking code for popup
				tracking =
					'<div class="checkbox"><label><input type="checkbox" class="tracking-checkbox" value="tracking" checked>Tracking cookies help us track use of our website and make improvements.</label></div>';
			} else {
				// tracking code for popup
				tracking =
					'<div class="checkbox"><label><input type="checkbox" class="tracking-checkbox" value="tracking">Tracking cookies help us track use of our website and make improvements.</label></div>';
			}
		}

		// If just tracking
		if (options.tracking && !options.marketing) {
			// Check if tracking cookie exists or not
			if (!trackingCookie) {
				// Init tracking cookie
				setTrackingCookie("disallow");
			}

			if (trackingCookie !== "true" || !trackingCookie) {
				// Tracking code for popup
				tracking =
					'<div class="checkbox"><label><input type="checkbox" class="tracking-checkbox" value="tracking" checked>Tracking cookies help us track use of our website and make improvements.</label></div>';
			} else {
				// tracking code for popup
				tracking =
					'<div class="checkbox"><label><input type="checkbox" class="tracking-checkbox" value="tracking">Tracking cookies help us track use of our website and make improvements.</label></div>';
			}
		}

		// Marketing
		if (options.marketing) {
			advertisingText =
				"We use cookies to ensure you have the best browsing experience, to help us improve our website and for targeted advertising";

			// Check if marketing cookie exists or not
			if (!marketingCookie) {
				// Init marketing cookie
				setMarketingCookie("disallow");
			}

			if (marketingCookie !== "true" || !marketingCookie) {
				// Marketing message for popup
				marketing =
					'<div class="checkbox"><label><input type="checkbox" class="marketing-checkbox" value="marketing" checked>Marketing cookies are used to provide you with personalised marketing after you have visited our website.</label></div>';
			} else {
				// Marketing message for popup
				marketing =
					'<div class="checkbox"><label><input type="checkbox" class="marketing-checkbox" value="marketing">Marketing cookies are used to provide you with personalised marketing after you have visited our website.</label></div>';
			}
		}

		// If options exist, show the toggler
		if (options.marketing || options.tracking) {
			// If cookies are set to true (disallowed), uncheck the toggle
			if (trackingCookie === "true" || marketingCookie === "true") {
				cookieText =
					'<h2><label class="switch"><input type="checkbox"><span class="slider round"></span></label> Third-party cookies</h2>';
				// Otherwise, set toggle checked
			} else {
				cookieText =
					'<h2><label class="switch"><input type="checkbox" checked><span class="slider round"></span></label> Third-party cookies</h2>';
			}
			showSettings = '<a href="#" class="cc-settings">Settings</a>';
		}

		// Init cookie consent
		window.cookieconsent.initialise(
			{
				container: $("#cookie-consent"),
				elements: {
					header: "",
					message:
						'<div class="cookie-heading"><h2>Cookies</h2></div><div class="cookie-consent" id="cookieconsent:desc">' +
						advertisingText +
						". By continuing to browse the site you are agreeing to our use of cookies.</div>",
					messagelink:
						'<div class="cookie-heading"><h2>Cookies</h2></div><div class="cookie-consent" id="cookieconsent:desc">' +
						advertisingText +
						'. By continuing to browse the site you are agreeing to our use of cookies.</div><div class="cookie-settings"><form><div class="settings-heading"><h2>Cookie Settings</h2><div class="form-group"><a tabindex="0" class="btn btn-wide btn-brand-2 settings-dismiss">Save settings</a></div></div><div class="settings-form"><h2>Strictly necessary cookies</h2><p>These cookies are essential so that you can move around the website and use its features. Without these cookies services you have asked for cannot be provided.</p>' +
						cookieText +
						'<div class="settings-indiv">' +
						tracking +
						marketing +
						"</div></div></form></div>",
					dismiss:
						'<a aria-label="dismiss cookie message" tabindex="0" class="btn btn-primary cc-btn cc-dismiss">Accept</a>' +
						showSettings +
						'<a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="' +
						options.url +
						'" target="_blank">Find out more</a>',
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

					// Set localStorage
					setStorage("consent", "shown");
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

			// On Marketing checkbox change
			$(document).on("change", ".marketing-checkbox", function() {
				if ($(".marketing-checkbox").is(":checked")) {
					// Set cookie to allow
					setMarketingCookie("allow");
				} else {
					// Set cookie to disallow
					setMarketingCookie("disallow");
				}
			});

			// On tracking checkbox change
			$(document).on("change", ".tracking-checkbox", function() {
				if ($(".tracking-checkbox").is(":checked")) {
					// Set cookie to allow
					setTrackingCookie("allow");
				} else {
					// Set cookie to disallow
					setTrackingCookie("disallow");
				}
			});

			// Checkbox click
			$(document).on("click", ".switch input", function(event) {
				// If is not checked, disallow and uncheck Marketing + tracking checkboxes
				if (!$(".switch input").is(":checked")) {
					setCheckbox("unchecked");

					// Marketing
					setMarketingCookie("disallow");
					setMarketingCheckbox("unchecked");

					// Tracking
					setTrackingCookie("disallow");
					setTrackingCheckbox("unchecked");

					// Otherwise, do the opposite
				} else {
					setCheckbox("checked");

					// Marketing
					setMarketingCookie("allow");
					setMarketingCheckbox("checked");

					// Tracking
					setTrackingCookie("allow");
					setTrackingCheckbox("checked");
				}
			});
		});
	};

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
