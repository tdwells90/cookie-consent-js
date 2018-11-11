<?php

/**
 *
 *
 * SETTINGS
 *
 *
 */
defined('ABSPATH') or die('Nope, not accessing this');

if (!class_exists('cookie_consent_settings')) {

    class cookie_consent_settings
    {

        public static function register()
        {
            // Register plugin settings
            add_action('admin_init', function () {
                register_setting('cookie-consent-gtm-settings', 'cookie-consent-gtm-essential');
                register_setting('cookie-consent-gtm-settings', 'cookie-consent-gtm-advertising');
                register_setting('cookie-consent-gtm-settings', 'cookie-consent-gtm-marketing');
            });

            // Register options page
            add_action('admin_menu', array(__class__, 'register_options_page'));
        }

        // Register settings page
        public static function register_options_page()
        {
            add_options_page('Simple Cookie Consent GTM', 'Simple Cookie Consent GTM', 'manage_options', 'cookie-consent-gtm', array(__class__, 'cookie_consent_gtm_options_page'));
        }

        // Set page HTML and form
        public static function cookie_consent_gtm_options_page()
        { ?>

        <div class="wrap">
            <h1>Simple Cookie Consent GTM Settings</h1>
            <p>Use this page to determine what options are shown to the user. See our docs for setting up <a href="#">Google Tag Manager</a> to work with this plugin.</p>

            <form method="post" action="options.php">
                <?php settings_fields('cookie-consent-gtm-settings'); ?>
                <?php do_settings_sections('cookie-consent-gtm-settings'); ?>
                <h3>Settings to display</h3>
                <label>
                    <input type="checkbox" name="cookie-consent-gtm-essential" <?php echo esc_attr(get_option('cookie-consent-gtm-essential')) == 'on' ? 'checked="checked"' : ''; ?> /> Essential Cookies
                </label><br/>
                <label>
                    <input type="checkbox" name="cookie-consent-gtm-advertising" <?php echo esc_attr(get_option('cookie-consent-gtm-advertising')) == 'on' ? 'checked="checked"' : ''; ?> /> Advertising Cookies
                </label><br/>
                <label>
                    <input type="checkbox" name="cookie-consent-gtm-marketing" <?php echo esc_attr(get_option('cookie-consent-gtm-marketing')) == 'on' ? 'checked="checked"' : ''; ?> /> Marketing Cookies
                </label>
                <?php submit_button(); ?>
            </form>
        </div>
            <?php

        }

    }

    cookie_consent_settings::register();

}