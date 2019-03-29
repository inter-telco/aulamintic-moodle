jQuery(document).ready(function($){var lang_span=$("#mb2-pb-lang");function local_mb2builder_import_validation(text){if(""===text)return alert(lang_span.data("importtextempty")),!1;try{JSON.parse(text)}catch(t){return alert(lang_span.data("importtextnotvalidjson")),!1}try{eval("["+text+"]")[0][0].type}catch(t){return alert(langStrings.data("importtextnotvalidjson")),!1}return!0}$(document).on("click",".mb2-pb-builder-toggle",function(t){t.preventDefault(),$(this).closest(".mb2-pb-container").find(".mb2-pb-builder-toggle-content").slideToggle(250),$(this).toggleClass("active")}),$(document).on("click","#mb2-pb-import-btn1",function(t){t.preventDefault();var e=$("#mb2-pb-import-json1").val();local_mb2builder_import_validation(e)&&($("#builderfptextimport").val(e),$("#mb2-pb-modal-import-export-fp .close").click(),setTimeout(function(){alert(lang_span.data("importsuccess"))},250)),$("#mb2-pb-import-json1").val("")}),$(document).on("click","#mb2-pb-import-btn2",function(t){t.preventDefault();var e=$("#mb2-pb-import-json2").val();local_mb2builder_import_validation(e)&&($("#builderfootertextimport").val(e),setTimeout(function(){alert(lang_span.data("importsuccess"))},250)),$("#mb2-pb-import-json2").val("")});var sortable_cols=$(".mb2-pb-sortable-cols");function local_mb2builder_ui_layout(){local_mb2builder_sortable_el("section"),local_mb2builder_sortable_el("row"),local_mb2builder_sortable_el("col"),local_mb2builder_sortable_el("element"),local_mb2builder_sortable_el("subelement")}function local_mb2builder_sortable_el(t){var e=$(".mb2-pb-sortable-"+t+"s");(function t(){return"function"==typeof e.sortable||(setTimeout(t,100),!1)})()&&e.sortable({axis:"element"!==t&&("col"===t?"x":"y"),placeholder:"ui-state-highlight",forcePlaceholderSize:!0,handle:".mb2-pb-"+t+"-header",connectWith:"col"!==t&&"subelement"!==t&&".mb2-pb-sortable-"+t+"s",opacity:.95,start:function(t,a){var l=$(a.item).innerHeight();e.find(">.ui-state-highlight").addClass($(a.item).attr("class")),e.find(">.ui-state-highlight").css("height",l)}})}function local_mb2builder_buld_row_columns(t){var e,a="",l=[12],s=[],i=0,n=0;12!==t&&(l=t.split(","));var o=$(".mb2-pb-row-active");for((e=o.length)&&o.find(".mb2-pb-col").each(function(t,e){s[t]=$(this).find(".mb2-pb-sortable-elements").html()}),n=0;n<l.length;n++){if(a+='<div class="mb2-pb-col col-'+l[n]+'" data-col="'+l[n]+'">',a+='<div class="mb2-pb-col-header clearfix">',a+='<span class="mb2-pb-title">'+lang_span.data("col")+"</span>",a+='<div class="mb2-pb-actions">',a+='<a href="#" class="settings-col" title="'+lang_span.data("settings")+'" data-toggle="modal" data-target="#mb2-pb-modal-settings-col">',a+='<i class="fa fa-cog"></i> ',a+=lang_span.data("settings"),a+="</a>",a+="</div>",a+="</div>",a+='<div class="mb2-pb-sortable-elements clearfix">',e&&n==l.length-1){if(s.length>n)for(i=n;i<s.length;i++)a+=s[i]}else s[n]&&(a+=s[n]);a+="</div>",a+='<div class="mb2-pb-col-footer">',a+='<a href="#" class="mb2-pb-add-element" title="'+lang_span.data("addelement")+'" data-toggle="modal" data-target="#mb2-pb-modal-elements">&plus; '+lang_span.data("addelement")+"</a>",a+="</div>",a+="</div>"}return a}function local_mb2builder_row_html(t){var e="";return e+='<div class="mb2-pb-row">',e+='<div class="mb2-pb-row-header clearfix">',e+='<span class="mb2-pb-title">'+lang_span.data("row")+"</span>",e+='<div class="mb2-pb-actions">',e+='<a href="#" class="settings-row" title="'+lang_span.data("settings")+'" data-toggle="modal" data-target="#mb2-pb-modal-settings-row">',e+='<i class="fa fa-cog"></i> ',e+=lang_span.data("settings"),e+="</a>",e+='<a href="#" class="layout-row" title="'+lang_span.data("columns")+'" data-toggle="modal" data-target="#mb2-pb-modal-row-layout">',e+='<i class="fa fa-columns"></i> ',e+=lang_span.data("columns"),e+="</a>",e+='<a href="#" class="duplicate-row" title="'+lang_span.data("duplicate")+'">',e+='<i class="fa fa-clone"></i> ',e+=lang_span.data("duplicate"),e+="</a>",e+='<a href="#" class="remove-row" title="'+lang_span.data("remove")+'">',e+='<i class="fa fa-trash"></i> ',e+=lang_span.data("remove"),e+="</a>",e+="</div>",e+="</div>",e+='<div class="mb2-pb-sortable-cols clearfix">',e+=local_mb2builder_buld_row_columns(t),e+="</div>",e+="</div>"}function local_mb2builder_el_html(t,e,a,l){var s="";return s+='<div class="mb2-pb-element" data-id="'+t+'" data-subelement="'+e+'" data-admin_label="'+a+'" data-subelement_name="'+l+'">',s+='<div class="mb2-pb-element-header clearfix">',s+='<span class="mb2-pb-title">'+a+"</span>",s+='<div class="mb2-pb-actions">',s+='<a href="#" class="settings-element" title="'+lang_span.data("settings")+'" data-toggle="modal" data-target="#mb2-pb-modal-settings-element">',s+='<i class="fa fa-cog"></i> ',s+="</a>",s+='<a href="#" class="duplicate-element" title="'+lang_span.data("duplicate")+'">',s+='<i class="fa fa-clone"></i> ',s+="</a>",s+='<a href="#" class="remove-element" title="'+lang_span.data("remove")+'">',s+='<i class="fa fa-trash"></i> ',s+="</a>",s+="</div>",s+="</div>",1==e&&(s+='<div class="mb2-pb-sortable-subelements clearfix">',s+="</div>",s+='<div class="mb2-pb-element-footer">',s+='<a href="#" class="mb2-pb-add-subelement" title="'+lang_span.data("addelement")+'">&plus; '+lang_span.data("addelement")+"</a>",s+="</div>"),s+="</div>"}function local_mb2builder_subel_html(t){var e="",a=t[0].toUpperCase()+t.slice(1);return e+='<div class="mb2-pb-subelement" data-id="'+t+'" data-admin_label="'+(a=a.replace("_"," "))+'">',e+='<div class="mb2-pb-subelement-header clearfix">',e+='<span class="mb2-pb-title">'+a+"</span>",e+='<div class="mb2-pb-actions">',e+='<a href="#" class="settings-subelement" title="'+lang_span.data("settings")+'" data-toggle="modal" data-target="#mb2-pb-modal-settings-subelement">',e+='<i class="fa fa-cog"></i> ',e+="</a>",e+='<a href="#" class="duplicate-subelement" title="'+lang_span.data("duplicate")+'">',e+='<i class="fa fa-clone"></i> ',e+="</a>",e+='<a href="#" class="remove-subelement" title="'+lang_span.data("remove")+'">',e+='<i class="fa fa-trash"></i> ',e+="</a>",e+="</div>",e+="</div>",e+="</div>"}function local_mb2builder_build_settings(t,e,a){var l=t.closest(".mb2-pb-"+e);$(".mb2-pb-"+e).removeClass("mb2-pb-"+e+"-active"),l.addClass("mb2-pb-"+e+"-active"),$("#mb2-pb-modal-settings-"+e).find(".modal-body").empty();var s=$("#tab-settings-"+e+a).clone(!0),i=$("#mb2-pb-modal-settings-"+e).find(".modal-body").append(s);i.find(".nav-tabs a").each(function(){$(this).attr("href",$(this).attr("href")+"_modal")}),i.find(".tab-pane").each(function(){$(this).attr("id",$(this).attr("id")+"_modal")});var n=i.find(".mb2-pb-editor");n.length>0&&($(".mb2-pb-editor").removeClass("mb2-pb-active-editor"),$(".mb2-pb-editor-document").removeAttr("contenteditable"),$(".mb2-pb-editor-document").removeClass("mb2-pb-editor-document-active"),$(".mb2-pb-editor-document").attr("id","mb2-pb-editor-document-active"),n.addClass("mb2-pb-active-editor"),i.find(".mb2-pb-editor-document").attr("contenteditable","true"),i.find(".mb2-pb-editor-document").addClass("mb2-pb-editor-document-active"),i.find(".mb2-pb-editor-document").removeAttr("id")),i.find(".mb2-pb-input").each(function(){var t,e=$(this),a=l.data(e.data("attrname"));(void 0!==(a=local_mb2builder_decode_special_html(a))?e.val(a):e.attr("value",e.val()),e.hasClass("mb2-pb-editor-input")&&local_mb2builder_helper_editor_init(a),e.hasClass("mb2-pb-input-type-icon"))&&((t=a||e.val())&&(e.closest(".mb2-pb-form-group").find("i").attr("class",t),e.closest(".mb2-pb-form-group").find("i").show()));e.hasClass("mb2-pb-input-type-image")&&((t=a||e.val())&&(e.closest(".mb2-pb-form-group").find("img").attr("src",t),e.closest(".mb2-pb-form-group").find("img").show()))});var o=$("#mb2-pb-modal-settings-"+e).find(".mb2-pb-input-admin_label").val();$("#mb2-pb-modal-settings-"+e).find(".modal-title").text(o);var b=i.find(".mb2-pb-mb2color");b.length>0&&b.spectrum({showInput:!0,showButtons:!1,preferredFormat:"rgb",allowEmpty:!0,color:"",showAlpha:!0}),i.find("[data-showon_field]").each(function(){var t=$(this),e=t.data("showon_field"),a=t.data("showon_value").toString().split("|"),l=i.find('[data-attrname="'+e+'"]').val();$('[data-showon_field="'+e+'"]').closest(".form-group").hide();var s=$.inArray(l,a);-1!=s&&$('[data-showon_field="'+e+'" ][data-showon_value*="'+l+'"]').closest(".form-group").show(),$(document).on("change",'[data-attrname="'+e+'"]',function(){s=$.inArray($(this).val(),a),$('[data-showon_field="'+e+'"]').closest(".form-group").hide(),-1!=s&&$('[data-showon_field="'+e+'" ][data-showon_value*="'+$(this).val()+'"]').closest(".form-group").show()})})}function local_mb2builder_save_settings(t){$("#mb2-pb-modal-settings-"+t).find(".mb2-pb-input").each(function(){var e=$(this),a=$(".mb2-pb-"+t+"-active"),l=e.data("attrname");a.removeData(l);var s=e.val();e.hasClass("mb2-pb-editor-input")&&(local_mb2builder_helper_editor_update_from_textarea_before_save(),s=local_mb2builder_helper_editor_get_clean_html()),a.attr("data-"+l,s),"admin_label"===l&&a.find(">div>.mb2-pb-title").text(s)})}function local_mb2builder_section_html(){var t="";return t+='<div class="mb2-pb-section">',t+='<div class="mb2-pb-section-header clearfix">',t+='<span class="mb2-pb-title">'+lang_span.data("section")+"</span>",t+='<div class="mb2-pb-actions">',t+='<a href="#" class="settings-section" title="'+lang_span.data("settings")+'" data-toggle="modal" data-target="#mb2-pb-modal-settings-section">',t+='<i class="fa fa-cog"></i> ',t+=lang_span.data("settings"),t+="</a>",t+='<a href="#" class="duplicate-section" title="'+lang_span.data("duplicate")+'">',t+='<i class="fa fa-clone"></i> ',t+=lang_span.data("duplicate"),t+="</a>",t+='<a href="#" class="remove-section" title="'+lang_span.data("remove")+'">',t+='<i class="fa fa-trash"></i> ',t+=lang_span.data("remove"),t+="</a>",t+="</div>",t+="</div>",t+='<div class="mb2-pb-sortable-rows">',t+="</div>",t+='<div class="mb2-pb-addrow">',t+='<a href="#" class="btn btn-sm btn-success mb2-pb-row-toggle" data-toggle="modal" data-target="#mb2-pb-modal-row-layout">'+lang_span.data("addrow")+"</a>",t+="",t+="",t+="</div>",t+="</div>"}function local_mb2builder_json_data(t){var e=[];return $(".mb2-pb-builder-"+t).each(function(t){var a=$(this),l=t,s=a.data();delete s.sortableItem,e[l]={type:"mb2pb_page",settings:s,attr:[]},a.find(".mb2-pb-section").each(function(t){var a=$(this),s=t,i=a.data();delete i.sortableItem,e[l].attr[s]={type:"mb2pb_section",settings:i,attr:[]},a.find(".mb2-pb-row").each(function(t){var a=$(this),i=t,n=a.data();delete n.sortableItem,e[l].attr[s].attr[i]={type:"mb2pb_row",settings:n,attr:[]},a.find(".mb2-pb-col").each(function(t){var a=$(this),n=t,o=a.data();delete o.sortableItem,e[l].attr[s].attr[i].attr[n]={type:"mb2pb_col",settings:o,attr:[]},a.find(".mb2-pb-element").each(function(t){var a=$(this),o=t,b=a.data();delete b.sortableItem,e[l].attr[s].attr[i].attr[n].attr[o]={type:"mb2pb_el",settings:b,attr:[]},a.find(".mb2-pb-subelement").each(function(t){var a=t,b=$(this).data();delete b.sortableItem,e[l].attr[s].attr[i].attr[n].attr[o].attr[a]={type:"mb2pb_subel",settings:b,attr:[]}})})})})})}),e}function local_mb2builder_decode_special_html(t){if(void 0!==t)return"number"==typeof t?t:t.replace(/&#34;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}local_mb2builder_ui_layout(),$(document).on("submit",$("form#adminsettings"),function(){var t=$("#builderfptextimport").val(),e=($("#builderfootertextimport").val(),JSON.stringify(local_mb2builder_json_data("builderfp"))),a=JSON.stringify(local_mb2builder_json_data("builderfooter"));if(""!==t)e=t;if(""!==a)a=a;$("#id_s_local_mb2builder_builderfptext").val(e),$("#id_s_local_mb2builder_builderfootertext").val(a)}),$(document).on("click",".mb2-pb-row-toggle,.layout-row",function(t){t.preventDefault(),$(".mb2-pb-section").removeClass("mb2-pb-section-active"),$(".mb2-pb-row").removeClass("mb2-pb-row-active"),$(this).closest(".mb2-pb-section").addClass("mb2-pb-section-active"),$("#mb2-pb-modal-row-layout").find(".mb2-pb-row-variant").removeClass("update"),$(this).hasClass("layout-row")&&($(".mb2-pb-row").removeClass("mb2-pb-row-active"),$(this).closest(".mb2-pb-row").addClass("mb2-pb-row-active"),$("#mb2-pb-modal-row-layout").find(".mb2-pb-row-variant").addClass("update"))}),$(document).on("click",".mb2-pb-row-variant",function(t){t.preventDefault();var e=$(this).data("row_variant"),a=local_mb2builder_row_html(e),l=$(".mb2-pb-section-active").find(".mb2-pb-sortable-rows");$(this).hasClass("update")&&(a=local_mb2builder_buld_row_columns(e),(l=$(".mb2-pb-row-active").find(".mb2-pb-sortable-cols")).empty()),l.append(a),local_mb2builder_ui_layout()}),$(document).on("click",".mb2-pb-add-element",function(t){t.preventDefault(),$(".mb2-pb-col").removeClass("mb2-pb-col-active"),$(this).closest(".mb2-pb-col").addClass("mb2-pb-col-active")}),$(document).on("click",".mb2-pb-modal-el",function(t){t.preventDefault();var e=local_mb2builder_el_html($(this).data("id"),$(this).data("subelement"),$(this).data("label"),$(this).data("subelement_name"));$(".mb2-pb-col-active").find(".mb2-pb-sortable-elements").append(e),local_mb2builder_ui_layout()}),$(document).on("click",".settings-element",function(t){t.preventDefault(),$(this).unbind("click");var e=$(this).closest(".mb2-pb-element").data("id");local_mb2builder_build_settings($(this),"element","-"+e)}),$(document).on("click","#save-settings-element",function(t){local_mb2builder_save_settings("element")}),$(document).on("click",".duplicate-element",function(t){t.preventDefault();var e=$(this).closest(".mb2-pb-element").clone(),a=e.find(">div>.mb2-pb-title").text();e.find(">div>.mb2-pb-title").text(a+" "+lang_span.data("copy")),e.removeData("admin_label"),e.attr("data-admin_label",a+" "+lang_span.data("copy")),$(this).closest(".mb2-pb-sortable-elements").append(e),local_mb2builder_ui_layout()}),$(document).on("click",".remove-element",function(t){t.preventDefault();var e=$(this).closest(".mb2-pb-element").find(">div>.mb2-pb-title").text();confirm(lang_span.data("remove")+": "+e)&&$(this).closest(".mb2-pb-element").remove()}),$(document).on("click",".mb2-pb-add-subelement",function(t){t.preventDefault();var e=local_mb2builder_subel_html($(this).closest(".mb2-pb-element").data("subelement_name"));$(this).closest(".mb2-pb-element").find(".mb2-pb-sortable-subelements").append(e),local_mb2builder_ui_layout()}),$(document).on("click",".settings-subelement",function(t){t.preventDefault();var e=$(this).closest(".mb2-pb-element").data("id");local_mb2builder_build_settings($(this),"subelement","-"+e)}),$(document).on("click","#save-settings-subelement",function(){local_mb2builder_save_settings("subelement")}),$(document).on("click",".duplicate-subelement",function(t){t.preventDefault();var e=$(this).closest(".mb2-pb-subelement").clone(),a=e.find(">div>.mb2-pb-title").text();e.find(">div>.mb2-pb-title").text(a+" "+lang_span.data("copy")),e.removeData("admin_label"),e.attr("data-admin_label",a+" "+lang_span.data("copy")),$(this).closest(".mb2-pb-sortable-subelements").append(e),local_mb2builder_ui_layout()}),$(document).on("click",".remove-subelement",function(t){t.preventDefault();var e=$(this).closest(".mb2-pb-subelement").find(">div>.mb2-pb-title").text();confirm(lang_span.data("remove")+": "+e)&&$(this).closest(".mb2-pb-subelement").remove()}),$(document).on("click",".settings-section",function(t){t.preventDefault(),local_mb2builder_build_settings($(this),"section","")}),$(document).on("click",".duplicate-section",function(t){t.preventDefault();var e=$(this).closest(".mb2-pb-section").clone();$(this).closest(".mb2-pb-sortable-sections").append(e),local_mb2builder_ui_layout()}),$(document).on("click","#save-settings-section",function(){local_mb2builder_save_settings("section")}),$(document).on("click",".remove-section",function(t){t.preventDefault();var e=$(this).closest(".mb2-pb-section").find(">div>.mb2-pb-title").text();confirm(lang_span.data("remove")+": "+e)&&$(this).closest(".mb2-pb-section").remove()}),$(document).on("click",".settings-row",function(t){local_mb2builder_build_settings($(this),"row",""),t.preventDefault()}),$(document).on("click",".duplicate-row",function(t){t.preventDefault();var e=$(this).closest(".mb2-pb-row").clone();$(this).closest(".mb2-pb-sortable-rows").append(e),local_mb2builder_ui_layout()}),$(document).on("click","#save-settings-row",function(){local_mb2builder_save_settings("row")}),$(document).on("click",".remove-row",function(t){t.preventDefault();var e=$(this).closest(".mb2-pb-row").find(">div>.mb2-pb-title").text();confirm(lang_span.data("remove")+": "+e)&&$(this).closest(".mb2-pb-row").remove()}),$(document).on("click",".settings-col",function(t){local_mb2builder_build_settings($(this),"col",""),t.preventDefault()}),$(document).on("click","#save-settings-col",function(){local_mb2builder_save_settings("col")}),$(document).on("click",".mb2-pb-addsection",function(t){t.preventDefault(),$(this).closest(".mb2-pb-container").find(".mb2-pb-sortable-sections").append(local_mb2builder_section_html()),local_mb2builder_ui_layout()})});
