call less__less_ui__css--delete_tmp_LESS.bat

call ui_template--deleteHTML.bat

call ui--deleteAllFiles.bat



call css--deleteJSON.bat

call js--deleteJSON__JS_Package.bat



cd ..
for /f "usebackq delims=" %%d in (`"dir /ad/b/s | sort /R"`) do rd "%%d"
cd bin_win