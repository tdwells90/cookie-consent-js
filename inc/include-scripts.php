<?php

/**
 *
 *
 * SCRIPTS
 *
 *
 */
defined('ABSPATH') or die('Nope, not accessing this');

if (!class_exists('cookie_consent_scripts')) {

    class cookie_consent_scripts
    {

        // Register function
        public function __construct()
        {
            /* register regular theme scripts */
            add_action('wp_enqueue_scripts', array(__class__, 'register_cookie_scripts'), 50);

            // Dynamic cookie consent script
            add_action('wp_footer', array(__class__, 'cookie_consent_dynamic_script'), 60);
        }

        // Register the cookie consent scripts
        public static function register_cookie_scripts()
        {
            // Main script to include in page
            wp_register_script('cookie-consent-js', 'https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js', false, '', true);
            wp_enqueue_script('cookie-consent-js');

            wp_register_script('cookie-consent-init', plugins_url('/js/cookie-consent-init.js', dirname(__FILE__)), false, '', true);
            wp_enqueue_script('cookie-consent-init');
        }


        // Dynamic script for cookie consent
        public static function cookie_consent_dynamic_script()
        {
            $tracking = get_option('cookie-consent-gtm-tracking');
            $marketing = get_option('cookie-consent-gtm-marketing');

            // Get html to render
            $html = '<script type="text/javascript">';
            $html .= 'if(typeof cookieConsent !== "undefined"){';
            $html .= 'cookieConsent.init({';
            $html .= 'url: "/privacy",';
            $html .= $tracking ? 'tracking: true,' : 'tracking: false,';
            $html .= $marketing ? 'marketing: true,' : 'marketing: false,';
            $html .= '});';
            $html .= '}';
            $html .= '</script>';

            // Return HTML for frontend
            echo $html;
        }
    }

    new cookie_consent_scripts();

}