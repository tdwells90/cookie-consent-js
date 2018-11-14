<?php

/**
 *
 *
 * Stylesheets for cookie popup
 *
 *
 */
defined('ABSPATH') or die('Nope, not accessing this');

if (!class_exists('cookie_consent_styles')) {

    class cookie_consent_styles
    {

        public function __construct()
        {
            // Cookie consent styles
            add_action('wp_enqueue_scripts', array(__class__, 'cookie_consent_gtm_styles'), 10);

            // Custom styles
            add_action('wp_head', array(__class__, 'custom_styles'));
        }

        public static function cookie_consent_gtm_styles()
        {
            wp_enqueue_style(
                'cookie-consent-plugin-style',
                plugins_url('/css/cookie-consent-init.css', dirname(__FILE__)),
                '',
                '',
                'all'
            );
        }

        // Custom styles
        public static function custom_styles()
        {
            // Tracking / Marketing cookies enable
            $link_color = get_option('cookie-consent-gtm-link-color');
            $bg_color = get_option('cookie-consent-gtm-bg-color');

            $styles = '<style>';
            $styles .= $link_color ? '.cc-compliance a, .settings-dismiss, .cc-revoke {color:' . $link_color . ';}.cookie-settings input:checked+.slider{background-color:' . $link_color . ';}' : '.cc-compliance a, .settings-dismiss, .cc-revoke{color: #90EE90}.cookie-settings input:checked+.slider{background-color: #90EE90;}';
            $styles .= $bg_color ? '.cc-window, .cc-revoke {background-color : ' . $bg_color . ';}' : '.cc-window, .cc-revoke {background-color :#fff;}';
            $styles .= '</style>';

            echo $styles;
        }

    }

    new cookie_consent_styles();

}