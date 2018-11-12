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

        public function __construct()
        {
            // Register plugin settings
            add_action('admin_init', function () {
                register_setting('cookie-consent-gtm-settings', 'cookie-consent-gtm-tracking');
                register_setting('cookie-consent-gtm-settings', 'cookie-consent-gtm-marketing');
                register_setting('cookie-consent-gtm-settings', 'cookie-consent-gtm-code');
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
            <p>Use this page to determine what options are shown to the user. Unchecking all will leave you with a simple 'Accept' or 'Deny' option.</p>
            <p>See our docs for <a href="#">setting up Google Tag Manager</a> to work with this plugin.</p>

            <form method="post" action="options.php">
                <?php settings_fields('cookie-consent-gtm-settings'); ?>
                <?php do_settings_sections('cookie-consent-gtm-settings'); ?>
                <table>
                    <tr valign="top">
                        <th scope="row"><label for="cookie-consent-gtm-code">Google Tag Manager code</label></th>
                    </tr>
                    <tr valign="top">
                        <td><input type="text" id="cookie-consent-gtm-code" name="cookie-consent-gtm-code" value="<?php echo get_option('cookie-consent-gtm-code'); ?>" placeholder="eg. GTM-XXXX" /></td>
                    </tr>
                </table>
                <h3>Settings to display</h3>
                <label>
                    <input type="checkbox" name="cookie-consent-gtm-tracking" <?php echo esc_attr(get_option('cookie-consent-gtm-tracking')) == 'on' ? 'checked="checked"' : ''; ?> /> Tracking Cookies
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

    new cookie_consent_settings();

}