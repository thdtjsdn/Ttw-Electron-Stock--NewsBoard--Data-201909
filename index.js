require( "../Development-NodeJS_Modules/Common-Electron-000-Tool.js" );

/**
 * Initialized 함수
 * @function
 */
global.initialized = function()
{
	global.Lib.Ttw.importTll( "./native_modules/index.tll" );
};
