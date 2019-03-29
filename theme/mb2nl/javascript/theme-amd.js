/**
 *
 * @package   theme_mb2nl
 * @copyright 2017 - 2018 Mariusz Boloz (http://marbol2.com)
 * @license   Commercial https://themeforest.net/licenses
 *
 */

require(['jquery','core/first'], function(jQuery) {

	window.jQuery = jQuery;

    require(['theme_mb2nl/bootstrap', 'core/log'], function(b, log) {
				
		jQuery('[data-toggle="tooltip"]').tooltip();
		jQuery('[data-toggle="popover"]').popover();

    });

});
