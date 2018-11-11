<?php
/*
Plugin Name: Simple Cookie Consent JS
Plugin URI:  https://github.com/tdwells90/cookie-consent-js
Description: Simple cookie consent JS for Google Tag Manager.
Version:     0.1.0
Author:      Nfty Creative
Author URI:  http://nfty.co.uk
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

defined('ABSPATH') or die('Nope, not accessing this');

// Main plugin class
if (!class_exists('cookie_consent_js')) {

    class cookie_consent_js
    {

        public static function register()
        {
            //include scripts
            include(plugin_dir_path(__FILE__) . 'inc/include-scripts.php');
        }
    }

    cookie_consent_js::register();

}