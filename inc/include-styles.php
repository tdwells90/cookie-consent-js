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
        }

        public static function cookie_consent_gtm_styles()
        {
            wp_enqueue_style(
                'cookie-consent-style',
                'https ://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css',
                '',
                '',
                'all'
            );
        }

    }

    new cookie_consent_styles();

}