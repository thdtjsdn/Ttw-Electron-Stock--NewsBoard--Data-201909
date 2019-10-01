//----------------------------------------------------------------------------------------------------;
var fileNm = "CreateModel--Fancytree.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var path_dev_node_module = "../../../../Development-NodeJS_Modules/";

//----------------------------------------------------------------------------------------------------;

require( path_dev_node_module + "global.REQUIRES.iconv-lite.js" );STtwUtilBuffer.iconv = global.REQUIRES[ "iconv-lite" ];

global.Lib.Ttw.importTll( path_dev_node_module + "native_modules/CreateModel-Fancytree.tll" );

//----------------------------------------------------------------------------------------------------;

var fn0 = global[ "CreateModel-Fancytree" ];
var fn1 = function( targetPath, rootFilePath, jsonPath ){ SUtilFsWriteStream.writeFile_UTF8( jsonPath, JSON.stringify( fn0( targetPath, rootFilePath ) ) ); };

//----------------------------------------------------------------------------------------------------;

//fn1( "../ui_template/", "./ui_template/", "../json/ui_template.json" );
fn1( "../ui_template_package/", "./ui_template_package/", "../json/ui_template_package.json" );

//----------------------------------------------------------------------------------------------------;

global.process.exit();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;