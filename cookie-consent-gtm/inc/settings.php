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
                // Custom Text
                register_setting('cookie-consent-gtm-settings', 'cookie-consent-gtm-main-text');
                register_setting('cookie-consent-gtm-settings', 'cookie-consent-gtm-header');
                register_setting('cookie-consent-gtm-settings', 'cookie-consent-gtm-essential-heading');
                register_setting('cookie-consent-gtm-settings', 'cookie-consent-gtm-essential-text');
                register_setting('cookie-consent-gtm-settings', 'cookie-consent-gtm-tracking');
                register_setting('cookie-consent-gtm-settings', 'cookie-consent-gtm-tracking-text');
                register_setting('cookie-consent-gtm-settings', 'cookie-consent-gtm-marketing');
                register_setting('cookie-consent-gtm-settings', 'cookie-consent-gtm-marketing-text');
                register_setting('cookie-consent-gtm-settings', 'cookie-consent-gtm-code');

                // Custom Colours
                register_setting('cookie-consent-gtm-settings', 'cookie-consent-gtm-link-color');
                register_setting('cookie-consent-gtm-settings', 'cookie-consent-gtm-bg-color');

                // Privacy Link
                register_setting('cookie-consent-gtm-settings', 'cookie-consent-gtm-privacy-link');
            });

            // Register options page
            add_action('admin_menu', array(__class__, 'register_options_page'));

            add_action('admin_menu', array(__class__, 'check_user_roles'));
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
                <p><label><input type="checkbox" name="cookie-consent-gtm-tracking" <?php echo esc_attr(get_option('cookie-consent-gtm-tracking')) == 'on' ? 'checked="checked"' : ''; ?> /> Tracking Cookies</label><br/>
                <label><input type="checkbox" name="cookie-consent-gtm-marketing" <?php echo esc_attr(get_option('cookie-consent-gtm-marketing')) == 'on' ? 'checked="checked"' : ''; ?> /> Marketing Cookies</label></p>

                <hr />

                <h3>Colours</h3>
                <p>Choose a background and link colour.</p>

                <table class="form-table">
                    <tbody>
                        <tr>
                            <th scope="row"><label for="cookie-consent-gtm-link-color">Link Colour</label></th>
                            <td><input type="text" name="cookie-consent-gtm-link-color" value="<?php echo get_option('cookie-consent-gtm-link-color'); ?>" class="color-picker-field" /></td>
                        </tr>
                        <tr>
                            <th scope="row"><label for="cookie-consent-gtm-bg-color">Background Colour</label></th>
                            <td><input type="text" name="cookie-consent-gtm-bg-color" value="<?php echo get_option('cookie-consent-gtm-bg-color'); ?>" class="color-picker-field" /></td>
                        </tr>
                    </tbody>
                </table>

                <hr />

                <h3>Custom text</h3>
                <p>Give the popup a personality and change the content for it here.</p>
                <table class="form-table">
                    <tbody>
                        <tr>
                            <th scope="row"><label for="cookie-consent-gtm-privacy-link">Privacy link</label></th>
                            <td><input class="regular-text ltr" type="text" name="cookie-consent-gtm-privacy-link" value="<?php echo get_option('cookie-consent-gtm-privacy-link'); ?>" placeholder="Default: /privacy/" /></td>
                        </tr>
                        <tr>
                            <th scope="row"><label for="cookie-consent-gtm-header">Header Text</label></th>
                            <td><input class="regular-text ltr" type="text" id="cookie-consent-gtm-header" name="cookie-consent-gtm-header" value="<?php echo get_option('cookie-consent-gtm-header'); ?>" placeholder="Default: Cookies" /></td>
                        </tr>
                        <tr>
                            <th scope="row"><label for="cookie-consent-gtm-main-text">Main Text</label></th>
                            <td><textarea class="regular-text ltr" type='textarea' id="cookie-consent-gtm-main-text" name="cookie-consent-gtm-main-text" placeholder="Default: We use cookies to ensure you have the best browsing experience, to help us improve our website and for targeted advertising. By continuing to browse the site you are agreeing to our use of cookies."><?php echo get_option('cookie-consent-gtm-main-text'); ?></textarea></td>
                        </tr>
                        <tr>
                            <th scope="row"><label for="cookie-consent-gtm-essential-heading">Essential Cookies Header Text</label></th>
                            <td><input class="regular-text ltr" type="text" id="cookie-consent-gtm-essential-heading" name="cookie-consent-gtm-essential-heading" value="<?php echo get_option('cookie-consent-gtm-essential-heading'); ?>" placeholder="Default: Strictly necessary cookies" /></td>
                        </tr>
                        <tr>
                            <th scope="row"><label for="cookie-consent-gtm-essential-text">Essential Cookies Text</label></th>
                            <td><textarea class="regular-text ltr" type='textarea' id="cookie-consent-gtm-essential-text" name="cookie-consent-gtm-essential-text" placeholder="Default: These cookies are essential so that you can move around the website and use its features. Without these cookies services you have asked for cannot be provided."><?php echo get_option('cookie-consent-gtm-essential-text'); ?></textarea></td>
                        </tr>
                        <tr>
                            <th scope="row"><label for="cookie-consent-gtm-tracking-text">Tracking Cookies text</label></th>
                            <td><input class="regular-text ltr" type="text" id="cookie-consent-gtm-tracking-text" name="cookie-consent-gtm-tracking-text" value="<?php echo get_option('cookie-consent-gtm-tracking-text'); ?>" placeholder="Default: Tracking cookies help us track use of our website and make improvements." /></td>
                        </tr>
                        <tr>
                            <th scope="row"><label for="cookie-consent-gtm-marketing-text">Marketing Cookies text</label></th>
                            <td><input class="regular-text ltr" type="text" id="cookie-consent-gtm-marketing-text" name="cookie-consent-gtm-marketing-text" value="<?php echo get_option('cookie-consent-gtm-marketing-text'); ?>" placeholder="Default: Marketing cookies are used to provide you with personalised marketing after you have visited our website." /></td>
                        </tr>
                    </tbody>
                </table>
                <?php submit_button(); ?>
            </form>
        </div>
            <?php

        }

        public static function check_user_roles()
        {
            if (!current_user_can('manage_options')) {
                wp_die(__('You do not have sufficient permissions to access this page.'));
            }
        }

    }

    new cookie_consent_settings();

}