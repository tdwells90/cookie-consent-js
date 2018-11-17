<?php

/**
 *
 *
 * Google Tag Manager Include
 *
 *
 */
defined('ABSPATH') or die('Nope, not accessing this');

if (!class_exists('cookie_consent_gtm_include')) {

    // GTM Include class
    class cookie_consent_gtm_include
    {

        // Constructor
        public function __construct()
        {
            // Register the google tag manager code snippet
            add_action('wp_head', array(__class__, 'register_gtm'));
        }

        // Get GTM code and input into <head>
        public static function register_gtm()
        {
            // Get GTM code from settings
            $gtm_code = strip_tags(get_option('cookie-consent-gtm-code'));
            if ($gtm_code) {
                ?>
            <!-- Google Tag Manager -->
            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','<?php echo $gtm_code; ?>');</script>
            <!-- End Google Tag Manager -->
                <?php

            }
        }

    }

    // Init the class
    new cookie_consent_gtm_include();

}