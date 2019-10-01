call __Execute_Before_Commit.bat

call css--deleteJSON.bat

call less__less_ui__css--delete_tmp_LESS.bat

call ui_template--deleteHTML.bat

call ui--deleteAllFiles.bat



call less__less_ui--createCSS__LESS_To_CSS.bat

call css--createJSON.bat

call js--createJSON__JS_Package.bat


call ui_template__ui--createHTML__FromTemplateHTML.bat
