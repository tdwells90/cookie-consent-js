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
            include(plugin_dir_path(__FILE__) . 'inc/include-scripts.php');

            //include plugin settings
            include(plugin_dir_path(__FILE__) . 'inc/include-settings.php');

            //include GTM code snippet
            include(plugin_dir_path(__FILE__) . 'inc/include-gtm.php');
        }
    }

    new cookie_consent_gtm();

}