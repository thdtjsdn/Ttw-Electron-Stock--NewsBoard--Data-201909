//----------------------------------------------------------------------------------------------------;
var fileNm = "ui--createJSON__Locale__CheckOriginalJSON.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST_TtwApplicationCommon.js" );

//----------------------------------------------------------------------------------------------------;

//var rootPath = "../ui/";
//var rootPath = "../ui_template/";
//var rootPath = "../ui_template_custom/";

//var rootPath = "../ui_include/b2link_transaction_quotation_sale/";
//var rootPath = "../ui_template_custom/b2link_transaction_quotation_sale/";
//var rootPath = "../ui_template_custom/b2link_transaction_quotation_sale/edit_panel_info_payment/";
//var rootPath = "../ui_template_custom/b2link_transaction/transaction_entity/";
var rootPath = "../ui_template/smt_ui/SYS0210/admin/";
var extension = ".thtml";

//Overwrite true시 다른 JSON들도 전부 초기화 되니 주의;
var bOverWrite = false;

//지정 폴더;
SUtilFsWriteStream_Extension_Dev.create_TemplateJSON_FromHTMLDirectory__CheckOriginalJSON( rootPath, extension, bOverWrite );

//하위폴더 모두 포함;
SUtilFsWriteStream_Extension_Dev.create_TemplateJSON_FromHTMLDirectory__SubDirectories__CheckOriginalJSON( rootPath, extension, bOverWrite );

//----------------------------------------------------------------------------------------------------;

global.process.exit();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;