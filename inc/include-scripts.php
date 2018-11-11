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
        public static function register()
        {
            /* register regular theme scripts */
            add_action('wp_enqueue_scripts', array(__class__, 'register_cookie_scripts'), 90);

            // Defer specific scripts
            add_filter('script_loader_tag', array(__class__, 'defer_scripts'), 10, 3);
        }

        // Register the cookie consent scripts
        public static function register_cookie_scripts()
        {
            // Main script to include in page
            wp_register_script('cookie-consent-js', 'https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js', false, '', true);
            wp_enqueue_script('cookie-consent-js');

            wp_register_script('cookie-consent-init', plugins_url('/js/cookie-consent-init.js', __FILE__), false, '', true);
            wp_enqueue_script('cookie-consent-init');
        }

        public static function defer_scripts($tag, $handle, $src)
        {

            // The handles of the enqueued scripts we want to defer
            $defer_scripts = array(
                'cookie-consent-js',
                'cookie-consent-init'
            );

            // If scripts are in array, get the source and output with defer tag
            if (in_array($handle, $defer_scripts)) {
                return '<script src="' . $src . '" defer="defer" type="text/javascript"></script>' . "\n";
            }

            return $tag;
        }
    }

    cookie_consent_scripts::register();

}