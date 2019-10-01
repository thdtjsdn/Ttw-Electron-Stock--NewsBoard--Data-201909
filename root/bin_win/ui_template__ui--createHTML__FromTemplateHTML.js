//----------------------------------------------------------------------------------------------------;
var fileNm = "ui_template__ui--createHTML__FromTemplateHTML.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST_TtwApplicationCommon.js" );

//----------------------------------------------------------------------------------------------------;

var rootPath = "../";
var templatePath = rootPath + "ui_template/";

//.thtml만 존재;
//SUtilFsWriteStream_Extension_Dev.create_HTMLFromTemplateHTMLPath( rootPath, templatePath, false, true );
SUtilFsWriteStream_Extension_Dev.create_HTMLFromTemplateHTMLPath( rootPath, templatePath, true, true );

//.html만 존재 .thtml은 미존재;
//SUtilFsWriteStream_Extension_Dev.create_HTMLFromTemplateHTMLPath( rootPath, templatePath, true, false );

//----------------------------------------------------------------------------------------------------;

global.process.exit();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;