@echo off
set build=b
set deploy=d
if "%1" == "%build%" (
	spm build
) else if "%1" == "%deploy%" (
	rd seajs-modules\fare /s /q
	md seajs-modules\fare
	md seajs-modules\fare\oc
	md seajs-modules\fare\oc\1.0.0
	md seajs-modules\fare\oc\1.0.0\edit

	xcopy dist\edit\*.* seajs-modules\fare\oc\1.0.0\edit
) else (
	echo error command: b d
)