for /f "usebackq delims=" %%d in (`"dir /ad/b/s | sort /R"`) do rd "%%d"

:for /f "tokens=*" %%d in ('dir /ad/b/s ^| sort /R') do rd "%%d"