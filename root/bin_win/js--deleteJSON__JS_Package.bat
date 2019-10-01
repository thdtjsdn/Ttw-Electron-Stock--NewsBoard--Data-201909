call del /s /q ..\js\__list.json
call del /s /q ..\js\__listDir.json
call del /s /q ..\js\__listPackage.json

call del /s /q ..\js-common\__list.json
call del /s /q ..\js-common\__listDir.json
call del /s /q ..\js-common\__listPackage.json

call del /s /q ..\js__b2link__b2ker\__list.json
call del /s /q ..\js__b2link__b2ker\__listDir.json
call del /s /q ..\js__b2link__b2ker\__listPackage.json

call del /s /q ..\js__b2link__b2ker-excel\__list.json
call del /s /q ..\js__b2link__b2ker-excel\__listDir.json
call del /s /q ..\js__b2link__b2ker-excel\__listPackage.json

call del /s /q ..\js__b2link__brandPortal\__list.json
call del /s /q ..\js__b2link__brandPortal\__listDir.json
call del /s /q ..\js__b2link__brandPortal\__listPackage.json

call del /s /q ..\js__b2link__excelServer\__list.json
call del /s /q ..\js__b2link__excelServer\__listDir.json
call del /s /q ..\js__b2link__excelServer\__listPackage.json

call del /s /q ..\js__b2link__excelServer__webServer\__list.json
call del /s /q ..\js__b2link__excelServer__webServer\__listDir.json
call del /s /q ..\js__b2link__excelServer__webServer\__listPackage.json

call del /s /q ..\js__b2link__fileServer\__list.json
call del /s /q ..\js__b2link__fileServer\__listDir.json
call del /s /q ..\js__b2link__fileServer\__listPackage.json

call del /s /q ..\js__b2link__sessionServer\__list.json
call del /s /q ..\js__b2link__sessionServer\__listDir.json
call del /s /q ..\js__b2link__sessionServer\__listPackage.json

call del /s /q ..\js__b2link__webHookServer\__list.json
call del /s /q ..\js__b2link__webHookServer\__listDir.json
call del /s /q ..\js__b2link__webHookServer\__listPackage.json

call del /s /q ..\js__b2link__webSocketMessageServer\__list.json
call del /s /q ..\js__b2link__webSocketMessageServer\__listDir.json
call del /s /q ..\js__b2link__webSocketMessageServer\__listPackage.json





call del /s /q ..\js__b2link__SYS0010\__list.json
call del /s /q ..\js__b2link__SYS0010\__listDir.json
call del /s /q ..\js__b2link__SYS0010\__listPackage.json

call del /s /q ..\js__b2link__SYS0015\__list.json
call del /s /q ..\js__b2link__SYS0015\__listDir.json
call del /s /q ..\js__b2link__SYS0015\__listPackage.json

call del /s /q ..\js__b2link__SYS0020\__list.json
call del /s /q ..\js__b2link__SYS0020\__listDir.json
call del /s /q ..\js__b2link__SYS0020\__listPackage.json

call del /s /q ..\js__b2link__SYS0030\__list.json
call del /s /q ..\js__b2link__SYS0030\__listDir.json
call del /s /q ..\js__b2link__SYS0030\__listPackage.json





cd ..
del /s /q *.query

for /f "usebackq delims=" %%d in (`"dir /ad/b/s | sort /R"`) do rd "%%d"
:for /f "tokens=*" %%d in ('dir /ad/b/s ^| sort /R') do rd "%%d"

cd bin_win