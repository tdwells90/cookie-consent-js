<?php
/*
Plugin Name: Simple Cookie Consent GTM
Plugin URI:  https://github.com/tdwells90/cookie-consent-js
Description: Simple cookie consent for Google Tag Manager, built on Cookie Consent JS by insights.com.
Version:     0.1.0
Author:      Nfty Creative
Author URI:  http://nfty.co.uk
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

defined('ABSPATH') or die('Nope, not accessing this');

// Main plugin class
if (!class_exists('cookie_consent_gtm')) {

    class cookie_consent_gtm
    {

        public function __construct()
        {
            //include scripts
            include(plugin_dir_path(__FILE__) . 'inc/scripts.php');

            //include styles
            include(plugin_dir_path(__FILE__) . 'inc/styles.php');

            //include plugin settings
            include(plugin_dir_path(__FILE__) . 'inc/settings.php');

            //include GTM code snippet
            include(plugin_dir_path(__FILE__) . 'inc/gtm.php');

            // Add HTML to footer for the cookie consent popup
            add_action('wp_footer', array(__class__, 'cookie_add_html'));

            // Setup initial cookies
            add_action('init', array(__class__, 'init_cookies'));
        }

        // HTML for the cookie consent
        public static function cookie_add_html()
        {
            $html = '<div id="cookie-consent"></div>';
            echo $html;
        }

        // Set up initial cookies
        public static function init_cookies()
        {
            if (!is_admin()) {
                if (!isset($_COOKIE['disallow_tracking'])) {
                    setcookie('disallow_tracking', 'true', time() + 31556926);
                }
                if (!isset($_COOKIE['disallow_marketing'])) {
                    setcookie('disallow_marketing', 'true', time() + 31556926);
                }
            }
        }

    }

    new cookie_consent_gtm();

}