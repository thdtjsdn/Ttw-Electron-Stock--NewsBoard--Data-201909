//----------------------------------------------------------------------------------------------------;
var fileNm = "ui--createJSON__Locale.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST_TtwApplicationCommon.js" );

//----------------------------------------------------------------------------------------------------;

//var rootPath = "../ui/";
var rootPath = "../ui_template/";

var extension = ".html";

//Overwrite true시 다른 JSON들도 전부 초기화 되니 주의;
var bOverWrite = false;

//지정 폴더;
SUtilFsWriteStream_Extension_Dev.create_TemplateJSON_FromHTMLDirectory( rootPath, extension, bOverWrite );

//하위폴더 모두 포함;
SUtilFsWriteStream_Extension_Dev.create_TemplateJSON_FromHTMLDirectory__SubDirectories( rootPath, extension, bOverWrite );

//----------------------------------------------------------------------------------------------------;

global.process.exit();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;