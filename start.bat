@echo off

echo %JAVA_HOME%

set dir=%cd%
set libDir=%cd%\lib

set jarStr=

cd %libDir% 
for /r . %%i in (*.jar) do ( 
	rem echo %%~nxi
	set "jarStr=%jarStr%lib/%%~nxi;"
)

cd ..

echo ExtJars=%jarStr%

java -Xbootclasspath/a:%jarStr% -jar bin/js-server-page.jar %dir%

pause