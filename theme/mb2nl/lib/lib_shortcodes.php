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



/*
 *
 * Method to get shortcode content template
 *
 */
function theme_mb2nl_shortcodes_content_template ($items, $options)
{

	global $CFG;
	$output = '';
	$i = 0;
	$x = 0;
	$z = 0;
	$col_style = '';
	$carousel = ($options['layout'] === 'slidercols' && count($items) > $options['colnum']);

	if ($options['layout'] === 'slidercols' && count($items) <= $options['colnum'])
	{
		$options['layout'] = 'cols';
	}

	if ($options['layout'] === 'cols')
	{
		$col = round(100/$options['colnum'], 10);
		$col_style = ' style="width:' . $col . '%;"';
	}

	foreach ($items as $item)
	{
		$z++;

		if ($options['limit'] < $z)
		{
			$item->showitem = false;
		}

		if ($item->showitem)
		{
			$i++;
			$x++;
			$item_cls = $i%2 ? ' item-odd' : ' item-even';

			// Color class
			$c_color = theme_mb2nl_shortcodes_custom_color($item->id, $options);
			$item_cls .= $c_color ? ' color' : '';
			$item_cls .= $options['col_cls'];

			// Show item b
			$showtext = ($options['desclimit'] > 0 || $options['link'] == 1 || $item->price);

			// Item id for admin users
			$item_ID  = '';
			$item_edit_link  = '';

			if (is_siteadmin())
			{
				$item_ID = ' <span style="background-color:green;color:#fff;padding:0 3px;">ID: ' . $item->id . '</span>';
				$item_edit_link = ' <a href="' . $item->link_edit . '"><i class="fa fa-edit"></i> ' . $item->edit_text . '</a>';
			}

			$output .= '<div class="mb2-pb-content-item item-' . $item->id . $item_cls .'"' . $col_style . '>';
			$output .= $item_ID . $item_edit_link;
			$output .= $options['link'] == 2 ? '<a href="' . $item->link . '">' : '';
			$output .= '<div class="mb2-pb-content-item-inner">';
			$output .= '<div class="mb2-pb-content-item-a">';

			$output .= theme_mb2nl_shortcodes_image_notice($item->description);

			if ($item->imgurl)
			{
				$output .= '<div class="mb2-pb-content-img">';
				$output .= $options['link'] != 2 ? '<a href="' . $item->link . '">' : '';
				$output .= '<img src="' . $item->imgurl . '" alt="' . $item->imgname . '" />';
				$output .= $options['link'] != 2 ? '</a>' : '';
				$output .= '</div>';
			}

			$output .= '<div class="mb2-pb-content1">';
			$output .= '<div class="mb2-pb-content2">';
			$output .= '<div class="mb2-pb-content3">';
			$output .= '<div class="mb2-pb-content4">';

			$output .= '<h4 class="mb2-pb-content-title">';
			$output .= $options['link'] != 2 ? '<a href="' . $item->link . '">' : '';
			$output .= theme_mb2nl_wordlimit($item->title, $options['titlelimit']);
			$output .= $options['link'] != 2 ? '</a>' : '';
			$output .= '</h4>';
			$output .= $item->details ? '<div class="mb2-pb-content-details">' . $item->details . '</div>' : '';
			$output .= $c_color ? '<span class="color-el" style="background-color:' . $c_color . ';"></span>' : '';
			$output .= '</div>';
			$output .= '</div>';
			$output .= '</div>';
			$output .= '</div>';
			$output .= '</div>';

			if ($showtext)
			{
				$output .= '<div class="mb2-pb-content-item-b">';
				$output .= theme_mb2nl_wordlimit($item->description, $options['desclimit']);

				if ($options['link'] == 1)
				{
					$readmoretext = $options['readmoretext'] ? $options['readmoretext'] : get_string('readmore','theme_mb2nl');

					$output .= '<div class="mb2-pb-content-readmore">';
					$output .= '<a class="btn btn-primary" href="' . $item->link . '">' . $readmoretext . '</a>';
					$output .= '</div>';
				}

				if ($item->price)
				{
					$output .= '<div class="mb2-pb-content-price">';
					$output .=  $item->price;
					$output .= '</div>';
				}

				$output .= '</div>';
			}

			$output .= '</div>';
			$output .= $options['link'] == 2 ? '</a>' : '';
			$output .= '</div>';

			if (!$carousel && $x == $options['colnum'])
			{
				$output .= '<div class="mb2-pb-content-sep clearfix"></div>';
				$x = 0;
			}
		}
	}

	return $output;

}






/*
 *
 * Method to get image notice
 * It's require fro categories images
 *
 */
function theme_mb2nl_shortcodes_image_notice ($desc)
{

	$urlfromdesc = theme_mb2nl_shortcodes_categories_image_from_text(s($desc),true);
	$namefromdesc = basename($urlfromdesc);

	if (preg_match('@%20@', $namefromdesc))
	{
		return '<span style="color:red;"><strong>' . get_string('imgnoticespace','local_mb2pages', array('img'=>urldecode($namefromdesc))) . '</strong></span>';
	}

	return;

}





/*
 *
 * Method to get category image from category description
 *
 */
function theme_mb2nl_shortcodes_content_get_image($attribs = array(), $name = false, $desc = '', $cid = 0)
{

	global $CFG;
	require_once($CFG->libdir . '/filelib.php');

	$output = '';
	$desc_img = true;


	if (!empty($attribs))
	{
		$files = get_file_storage()->get_area_files($attribs['context'], $attribs['mod'], $attribs['area'], $attribs['itemid']);
	}

	// Get image from course summary files
	if ($cid)
	{
		$courseObj = new course_in_list(get_course($cid));
		$files = $courseObj->get_course_overviewfiles();
	}

	if ($desc)
	{
		$urlfromdesc = theme_mb2nl_shortcodes_categories_image_from_text(s($desc),true);
		$namefromdesc = basename($urlfromdesc);
	}

	foreach ($files as $file)
	{

		if ($desc)
		{
			$desc_img = ($namefromdesc === $file->get_filename());
		}

		$isimage = ($file->is_valid_image() && $desc_img);

		if ($isimage)
		{
			if ($name)
			{
				return $file->get_filename();
			}

			$item_id = NULL;

			if (isset($attribs['itemid']) && $attribs['itemid'])
			{
				$item_id = $file->get_itemid();
			}

			return moodle_url::make_pluginfile_url($file->get_contextid(), $file->get_component(), $file->get_filearea(),
			$item_id, $file->get_filepath(), $file->get_filename());
		}
	}

}




/*
 *
 * Method to get image from text
 *
 */
function theme_mb2nl_shortcodes_categories_image_from_text($text)
{

	$output = '';

	$matches = array();
	$str = '@@PLUGINFILE@@/';

	$isplug = preg_match('|' . $str . '|', $text);

	if ($isplug)
	{
		preg_match_all('!@@PLUGINFILE@@/[^?#]+\.(?:jpe?g|png|gif)!Ui', $text, $matches);
	}
	else
	{
		preg_match_all('!http://[^?#]+\.(?:jpe?g|png|gif)!Ui', $text, $matches);
	}

	foreach ($matches as $el)
	{
		$output = isset($el[0]) ? $isplug ? str_replace($str, '', $el[0]) : $el[0] : '';
	}

	return $output;

}





/*
 *
 * Method to set content carousel data attributes
 *
 */
function theme_mb2nl_shortcodes_slider_data ($atts)
{

	$output = '';

	$iscols = $atts['colnum'];
	$isDots = $atts['sdots'];
	$isMargin = $atts['gridwidth'];

	if ($atts['gridwidth'] === 'thin')
	{
		$isMargin = 4;
	}
	elseif ($atts['gridwidth'] === 'normal')
	{
		$isMargin = 30;
	}

	$output .= ' data-items="' . $iscols . '"';
	$output .= ' data-margin="' . $isMargin . '"';
	$output .= ' data-loop="' . $atts['sloop'] . '"';
	$output .= ' data-nav="' . $atts['snav'] . '"';
	$output .= ' data-dots="' . $isDots . '"';
	$output .= ' data-autoplay="' . $atts['sautoplay'] . '"';
	$output .= ' data-pausetime="' . $atts['spausetime'] . '"';
	$output .= ' data-animtime="' . $atts['sanimate'] . '"';

	return $output;

}




/*
 *
 * Method to set custom color for content item
 *
 */
function theme_mb2nl_shortcodes_custom_color ($id, $atts)
{

	$colors = theme_mb2nl_shortcodes_custom_color_arr($atts);

	foreach ($colors as $color)
	{
		if ($color['id'] == $id)
		{
			return $color['color'];
		}
	}

	return false;

}




/*
 *
 * Method to get custo colors from shortcode settings
 *
 */
function theme_mb2nl_shortcodes_custom_color_arr ($atts)
{

	$colors = array();
	$defColors = $atts['colors'];
	$colorArr1 = explode(',',str_replace(' ','',$defColors));
	$i=-1;

	foreach ($colorArr1 as $color)
	{
		if ($color)
		{
			$i++;
			$colorEl = explode(':',$color);
			$colors[$i]['id']= $colorEl[0];
			$colors[$i]['color'] = $colorEl[1];
		}
	}

	return $colors;

}
