=== Simple Cookie Consent GTM ===
Contributors: nftycreative
Tags: gtm, cookies, gdpr, cookie-consent, cookie-law,
Donate link: https://nfty.co.uk
Requires at least: 3.5
Tested up to: 4.9.8
Requires PHP: 5.6
Stable tag: 0.1.0

Do you use Google Tag Manager? Give your users control over their cookies with this simple plugin.

== Description ==
This WordPress plugin is a simple solution for GDPR compliance, working in tandem with Google Tag Manager exceptions.

Built on the javascript cookie consent plugin by [https://cookieconsent.insites.com](insites.com), this plugin allows the user to select the types of cookies they want enabled. Using GTM, the site administrator can enable exceptions to prevent stuff like Facebook Pixel, Google Analytics etc from firing if the user doesn\'t want them to.

This plugin does not help create a privacy policy. This plugin is just for handling cookies and exceptions specifically within GTM.

**This plugin requires the site administrator to enable the exceptions correctly, otherwise the website is not GDPR compliant.**

== Installation ==
This section describes how to install the plugin and get it working.

1. Upload the `cookie-consent-gtm` folder to the `/wp-content/plugins/` directory.
2. Activate the plugin through the ‘Plugins’ menu in WordPress.
3. Go to \"settings > Simple Cookie Consent GTM\" to configure all settings.

== Frequently Asked Questions ==

= How do I configure Google Tag Manager to work with this plugin? =

For full instructions, see our [documentation online]().

= Do I need to load in my Google Tag Manager code? =

No, this plugin will load in your Tag Manager code.

= Does this plugin work with Javascript disabled? =

No, but it won't load in Google Tag Manager at all. This is intentional, as otherwise the user won't be able to turn their cookies on or off. This is the safest solution in order to be GDPR compliant.

== Screenshots ==
1. Settings Page

== Changelog ==
= 0.1.0 =

Public release.

== Upgrade Notice ==
= 0.1.0 =

N/A