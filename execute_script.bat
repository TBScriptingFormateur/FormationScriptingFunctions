set xstage_path=%1
set script_path=%2
set harmony_exe="C:\Program Files (x86)\Toon Boom Animation\Toon Boom Harmony 24 Premium\win64\bin\HarmonyPremium.exe"

echo.%xstage_path%
echo.%script_path%

%harmony_exe% -batch %xstage_path% -compile  %script_path% 




:: "C:\Users\LE SOCLE\Documents\GitHub\FormationScriptingHarmony\exercices\execute_script.bat" "C:\Users\LE SOCLE\Documents\changeme\changeme.xstage" "C:\Users\LE SOCLE\Documents\GitHub\FormationScriptingHarmony\exercices\mon_script_en_batch.js"