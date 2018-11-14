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

            // Register admin scripts (color picker)
            add_action('admin_enqueue_scripts', array(__class__, 'register_admin_scripts'));

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

        // Register admin scripts
        public static function register_admin_scripts()
        {
            if (is_admin()) {
                // Add the color picker css file
                wp_enqueue_style('wp-color-picker');
                // Include our custom jQuery file with WordPress Color Picker dependency
                wp_enqueue_script('custom-script-handle', plugins_url('/admin-js/color-picker.js', dirname(__FILE__)), array('wp-color-picker'), false, true);
            }
        }


        // Dynamic script for cookie consent
        public static function cookie_consent_dynamic_script()
        {
            // Tracking / Marketing cookies enable
            $tracking = get_option('cookie-consent-gtm-tracking');
            $marketing = get_option('cookie-consent-gtm-marketing');

            // Custom text
            $main_text = get_option('cookie-consent-gtm-main-text');
            $header = get_option('cookie-consent-gtm-header');
            $essential_header = get_option('cookie-consent-gtm-essential-heading');
            $essential_text = get_option('cookie-consent-gtm-essential-text');
            $tracking_text = get_option('cookie-consent-gtm-tracking-text');
            $marketing_text = get_option('cookie-consent-gtm-marketing-text');

            // Get html to render
            $html = '<script type="text/javascript">';
            $html .= 'if(typeof cookieConsent !== "undefined"){';
            $html .= 'cookieConsent.init({';
            $html .= 'url: "/privacy",';
            $html .= $tracking ? 'tracking: true,' : 'tracking: false,';
            $html .= $marketing ? 'marketing: true,' : 'marketing: false,';
            $html .= $main_text ? 'mainText: "' . $main_text . '",' : 'mainText: false,';
            $html .= $header ? 'header: "' . $header . '",' : 'header: false,';
            $html .= $essential_header ? 'essentialHeader: "' . $essential_header . '",' : 'essentialHeader: false,';
            $html .= $tracking_text ? 'trackingText: "' . $tracking_text . '",' : 'trackingText: false,';
            $html .= $marketing_text ? 'marketingText: "' . $marketing_text . '",' : 'marketingText: false,';
            $html .= '});';
            $html .= '}';
            $html .= '</script>';

            // Return HTML for frontend
            echo $html;
        }
    }

    new cookie_consent_scripts();

}