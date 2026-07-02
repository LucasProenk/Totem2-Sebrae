@echo off
start "" "%~dp0index.html"

timeout /t 2 /nobreak >nul

powershell -NoProfile -Command "Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.SendKeys]::SendWait('{F11}')"
