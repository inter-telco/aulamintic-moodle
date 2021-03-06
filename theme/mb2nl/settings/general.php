<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 *
 * @package   theme_mb2nl
 * @copyright 2017 - 2018 Mariusz Boloz (http://marbol2.com)
 * @license   Commercial https://themeforest.net/licenses
 *
 */


defined('MOODLE_INTERNAL') || die();


$temp = new admin_settingpage('theme_mb2nl_settingsgeneral',  get_string('settingsgeneral', 'theme_mb2nl'));

$headerToolsStyleOpt = array(
	'icon' => get_string('toolsicon','theme_mb2nl'),
	'text' => get_string('toolstext','theme_mb2nl'),
);

$headerStyleOpt = array(
	'light' => get_string('light','theme_mb2nl'),
	'light2' => get_string('light','theme_mb2nl') . ' 2',
	'dark' => get_string('dark','theme_mb2nl')
);

$setting = new admin_setting_configmb2start('theme_mb2nl/startlogo', get_string('logo','theme_mb2nl'));
$setting->set_updatedcallback('theme_reset_all_caches');
$temp->add($setting);


	$name = 'theme_mb2nl/logo';
	$title = get_string('logoimg','theme_mb2nl');
	$desc = '';
	$setting = new admin_setting_configstoredfile($name, $title, $desc, 'logo');
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


	$name = 'theme_mb2nl/logow';
	$title = get_string('logow','theme_mb2nl');
	$desc = get_string('logowdesc', 'theme_mb2nl');
	$setting = new admin_setting_configtext($name, $title, $desc, '180');
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


	$name = 'theme_mb2nl/logom';
	$title = get_string('logom','theme_mb2nl');
	$desc = get_string('margindesc', 'theme_mb2nl');
	$setting = new admin_setting_configtext($name, $title, $desc, '15px 0 15px 0');
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


	$name = 'theme_mb2nl/logotitle';
	$title = get_string('logotitle','theme_mb2nl');
	$desc = get_string('logotitledesc', 'theme_mb2nl');
	$setting = new admin_setting_configtext($name, $title, $desc, 'New Learning');
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


	$name = 'theme_mb2nl/logoalttext';
	$title = get_string('logoalttext','theme_mb2nl');
	$desc = get_string('logoalttextdesc', 'theme_mb2nl');
	$setting = new admin_setting_configtext($name, $title, $desc, 'New Learning');
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


	$name = 'theme_mb2nl/favicon';
	$title = get_string('favicon','theme_mb2nl');
	$desc = get_string('favicondesc', 'theme_mb2nl');
	$setting = new admin_setting_configstoredfile($name, $title, $desc, 'favicon', 0, array('accepted_types'=>array('.ico')));
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


$setting = new admin_setting_configmb2end('theme_mb2nl/endlogo');
$setting->set_updatedcallback('theme_reset_all_caches');
$temp->add($setting);



$setting = new admin_setting_configmb2start('theme_mb2nl/startlayout', get_string('layout','theme_mb2nl'));
$setting->set_updatedcallback('theme_reset_all_caches');
$temp->add($setting);


	$name = 'theme_mb2nl/pagewidth';
	$title = get_string('pagewidth','theme_mb2nl');
	$setting = new admin_setting_configtext($name,$title,'',1240);
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


	$layoutArr = array(
		'fw' => get_string('layoutfw','theme_mb2nl'),
		'fx' => get_string('layoutfx','theme_mb2nl'),
		//'fxw' => get_string('layoutfxc','theme_mb2nl')
	);
	$name = 'theme_mb2nl/layout';
	$title = get_string('layout','theme_mb2nl');
	$desc = '';
	$setting = new admin_setting_configselect($name, $title, $desc, 'fw', $layoutArr);
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


	$sidebarPosArr = array(
		'classic' => get_string('classic','theme_mb2nl'),
		'left' => get_string('left','theme_mb2nl'),
		'right' => get_string('right','theme_mb2nl')
	);

	$name = 'theme_mb2nl/sidebarpos';
	$title = get_string('sidebarpos','theme_mb2nl');
	$desc = '';
	$setting = new admin_setting_configselect($name, $title, $desc, 'right', $sidebarPosArr);
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);

	$sidebarBtArr = array(
		'0' => get_string('none','theme_mb2nl'),
		'1' => get_string('sidebaryesshow','theme_mb2nl'),
		'2' => get_string('sidebaryeshide','theme_mb2nl')
	);

	$name = 'theme_mb2nl/sidebarbtn';
	$title = get_string('sidebarbtn','theme_mb2nl');
	$setting = new admin_setting_configselect($name, $title, '', '1', $sidebarBtArr);
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


$setting = new admin_setting_configmb2end('theme_mb2nl/endlayout');
$setting->set_updatedcallback('theme_reset_all_caches');
$temp->add($setting);



$setting = new admin_setting_configmb2start('theme_mb2nl/startheaderstyle', get_string('headerstyleheading','theme_mb2nl'));
$setting->set_updatedcallback('theme_reset_all_caches');
$temp->add($setting);


	$name = 'theme_mb2nl/headerstyle';
	$title = get_string('headerstyle','theme_mb2nl');
	$setting = new admin_setting_configselect($name, $title, '', 'light', $headerStyleOpt);
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


	$name = 'theme_mb2nl/headertoolstype';
	$title = get_string('headertoolstype','theme_mb2nl');
	$setting = new admin_setting_configselect($name, $title, '', 'text', $headerToolsStyleOpt);
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


	$name = 'theme_mb2nl/navbarplugin';
	$title = get_string('navbarplugin','theme_mb2nl');
	$setting = new admin_setting_configcheckbox($name,$title,'',1);
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


$setting = new admin_setting_configmb2end('theme_mb2nl/endheaderstyle');
$setting->set_updatedcallback('theme_reset_all_caches');
$temp->add($setting);


$setting = new admin_setting_configmb2start('theme_mb2nl/startcourse', get_string('coursesettings','theme_mb2nl'));
$setting->set_updatedcallback('theme_reset_all_caches');
$temp->add($setting);


	$name = 'theme_mb2nl/courseplimg';
	$title = get_string('courseplimg','theme_mb2nl');
	$setting = new admin_setting_configcheckbox($name,$title,'',1);
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


	$name = 'theme_mb2nl/coursebtn';
	$title = get_string('coursebtn','theme_mb2nl');
	$setting = new admin_setting_configcheckbox($name, $title,'',1);
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


	$name = 'theme_mb2nl/coursestudentscount';
	$title = get_string('coursestudentscount','theme_mb2nl');
	$setting = new admin_setting_configcheckbox($name,$title,'',1);
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


	$name = 'theme_mb2nl/studentsroleid';
	$title = get_string('studentsroleid','theme_mb2nl');
	$setting = new admin_setting_configtext($name,$title,'',5);
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


	$cbannerStyleArr = array(
		'' => get_string('none','theme_mb2nl'),
		'fw' => get_string('layoutfw','theme_mb2nl'),
		'fx' => get_string('layoutfx','theme_mb2nl')
	);
	$name = 'theme_mb2nl/cbannerstyle';
	$title = get_string('cbannerstyle','theme_mb2nl');
	$desc = '';
	$setting = new admin_setting_configselect($name, $title, $desc, '', $cbannerStyleArr);
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


	$name = 'theme_mb2nl/cbannertitle';
	$title = get_string('cbannertitle','theme_mb2nl');
	$setting = new admin_setting_configcheckbox($name, $title, '', 1);
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


	$name = 'theme_mb2nl/coursescls';
	$title = get_string('coursescls','theme_mb2nl');
	$desc = get_string('coursesclsdesc','theme_mb2nl');
	$setting = new admin_setting_configtextarea($name, $title, $desc, '');
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


$setting = new admin_setting_configmb2end('theme_mb2nl/endcourse');
$setting->set_updatedcallback('theme_reset_all_caches');
$temp->add($setting);



$setting = new admin_setting_configmb2start('theme_mb2nl/startregions', get_string('regions','theme_mb2nl'));
$setting->set_updatedcallback('theme_reset_all_caches');
$temp->add($setting);


	$regionOptions = array(
		'none'=>get_string('none','theme_mb2nl'),
		'slider'=>get_string('region-slider','theme_mb2nl'),
		'after-slider'=>get_string('region-after-slider','theme_mb2nl'),
		'before-content'=>get_string('region-before-content','theme_mb2nl'),
		'after-content'=>get_string('region-after-content','theme_mb2nl'),
		'bottom'=>get_string('region-bottom','theme_mb2nl')
	);
	$name = 'theme_mb2nl/regionnogrid';
	$title = get_string('regionnogrid','theme_mb2nl');
	$desc = '';
	$setting = new admin_setting_configmultiselect($name, $title, $desc, array(), $regionOptions);
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


	$name = 'theme_mb2nl/blockstyle';
	$title = get_string('blockstyle','theme_mb2nl');
	$desc = get_string('blockstyledesc','theme_mb2nl');
	$setting = new admin_setting_configtextarea($name, $title, $desc, '');
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


$setting = new admin_setting_configmb2end('theme_mb2nl/endregions');
$setting->set_updatedcallback('theme_reset_all_caches');
$temp->add($setting);



$setting = new admin_setting_configmb2start('theme_mb2nl/startfooter', get_string('footer','theme_mb2nl'));
$setting->set_updatedcallback('theme_reset_all_caches');
$temp->add($setting);

	$name = 'theme_mb2nl/foottext';
	$title = get_string('foottext','theme_mb2nl');
	$desc = '';
	$setting = new admin_setting_configtextarea($name, $title, $desc, 'Copyright &copy; New Learning Theme ' . date('Y') . '. All rights reserved.');
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


	$name = 'theme_mb2nl/footlogin';
	$title = get_string('footlogin','theme_mb2nl');
	$desc = '';
	$setting = new admin_setting_configcheckbox($name, $title, $desc, 0);
	$setting->set_updatedcallback('theme_reset_all_caches');
	$temp->add($setting);


$setting = new admin_setting_configmb2end('theme_mb2nl/endfooter');
$setting->set_updatedcallback('theme_reset_all_caches');
$temp->add($setting);



$ADMIN->add('theme_mb2nl', $temp);
