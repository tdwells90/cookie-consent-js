<?php
/*
Plugin Name: Simple Cookie Consent JS
Plugin URI:  https://github.com/simonrcodrington/Introduction-to-WordPress-Plugins---Location-Plugin
Description: Simple cookie consent JS for Google Tag Manager.
Version:     0.1.0
Author:      Nfty Creative
Author URI:  http://nfty.co.uk
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

defined('ABSPATH') or die('Nope, not accessing this');

if (!class_exists('cookie_consent_js')) {

    class cookie_consent_js
    {

        public static function register()
        {

        }

    }

    cookie_consent_js::register();

}