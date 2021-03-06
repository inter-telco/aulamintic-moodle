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


$sidePre = theme_mb2nl_isblock($PAGE, 'side-pre');
$sidePost = theme_mb2nl_isblock($PAGE, 'side-post');
$sidebarPos = theme_mb2nl_theme_setting($PAGE, 'sidebarpos', 'classic');
$sidebars = theme_mb2nl_theme_setting($PAGE, 'fpsidebars');
$sidebar = ($sidePre || $sidePost);

$contentCol = 'col-sm-12';
$sidePreCol = 'col-sm-3 col-sm-pull-6';
$sidePostCol = 'col-sm-3';



if ($sidePre && $sidePost)
{

	if ($sidebarPos === 'right')
	{
		$contentCol = 'col-sm-6';
		$sidePreCol = 'col-sm-3';
	}
	elseif ($sidebarPos === 'left')
	{
		$contentCol = 'col-sm-6 col-sm-push-6';
		$sidePostCol = 'col-sm-3 col-sm-pull-6';
	}
	else
	{
		$contentCol = 'col-sm-6 col-sm-push-3';
	}

}
elseif (!$sidePre && $sidePost)
{
	$contentCol = 'col-sm-9';

	if ($sidebarPos === 'left')
	{
		$sidePostCol = 'col-sm-3 col-sm-pull-9';
		$contentCol = 'col-sm-9 col-sm-push-3';
	}
}
elseif ($sidePre && !$sidePost)
{
	$contentCol = 'col-sm-9 col-sm-push-3';
	$sidePreCol = 'col-sm-3 col-sm-pull-9';

	if ($sidebarPos === 'right')
	{
		$contentCol = 'col-sm-9';
		$sidePreCol = 'col-sm-3';
	}
}

?>
<?php echo $OUTPUT->theme_part('head'); ?>
<?php echo $OUTPUT->theme_part('header'); ?>
<?php echo $OUTPUT->theme_part('region_slider'); ?>
<?php //echo is_siteadmin() ? $OUTPUT->theme_part('page_header') : ''; ?>
<?php echo $OUTPUT->theme_part('site_menu'); ?>
<?php echo $OUTPUT->theme_part('course_banner'); ?>
<?php echo $OUTPUT->theme_part('region_after_slider'); ?>
<?php echo $OUTPUT->theme_part('region_before_content'); ?>
<div id="main-content">
    <div class="container-fluid">
        <div class="row">
            <div class="content-col <?php echo $contentCol; ?>">
                <div id="page-content">
					<?php if (is_siteadmin()) : ?>
                    	<?php echo theme_mb2nl_check_plugins(); ?>
                    <?php endif; ?>
                	<?php echo $OUTPUT->course_content_header(); ?>
					<?php if (theme_mb2nl_isblock($PAGE, 'content-top')) : ?>
                		<?php echo $OUTPUT->blocks('content-top', theme_mb2nl_block_cls($PAGE, 'content-top','none')); ?>
             		<?php endif; ?>
                	<?php echo $OUTPUT->main_content(); ?>
                    <?php if (theme_mb2nl_isblock($PAGE, 'content-bottom')) : ?>
                		<?php echo $OUTPUT->blocks('content-bottom', theme_mb2nl_block_cls($PAGE, 'content-bottom','none')); ?>
             		<?php endif; ?>
                    <?php echo theme_mb2nl_moodle_from(2017111300) ? $OUTPUT->activity_navigation() : ''; ?>
                	<?php echo $OUTPUT->course_content_footer(); ?>
                </div>
            </div>
     		<?php if ($sidePre) : ?>
            	<div class="sidebar-col <?php echo $sidePreCol; ?>">
                	<?php echo $OUTPUT->blocks('side-pre', theme_mb2nl_block_cls($PAGE, 'side-pre')); ?>
                </div>
       		<?php endif; ?>
     		<?php if ($sidePostCol) : ?>
            	<div class="sidebar-col <?php echo $sidePostCol; ?>">
                	<?php echo $OUTPUT->blocks('side-post', theme_mb2nl_block_cls($PAGE, 'side-pre')); ?>
                </div>
        	<?php endif; ?>
        </div>
    </div>
</div>
<?php

	$builder = get_config('local_mb2builder');
	$builderfptext = isset($builder->builderfptext) ? json_decode($builder->builderfptext) : array();
	echo theme_mb2nl_page_builder_content($builderfptext);
?>
<?php echo $OUTPUT->theme_part('region_after_content'); ?>
<?php echo $OUTPUT->theme_part('region_adminblock'); ?>
<?php echo $OUTPUT->theme_part('region_bottom'); ?>
<?php echo $OUTPUT->theme_part('region_bottom_abcd'); ?>
<?php echo $OUTPUT->theme_part('footer', array('sidebar'=>$sidebar)); ?>
