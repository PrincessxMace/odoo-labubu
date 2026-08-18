# Odoo Debug Labubu

Firefox extension that automatically appends `debug=Labubu` to Odoo URLs.

## Build

```powershell
Remove-Item -ErrorAction SilentlyContinue odoo-debug-labubu.zip, odoo-debug-labubu.xpi

Compress-Archive `
    -Path manifest.json,content.js `
    -DestinationPath odoo-debug-labubu.zip

Rename-Item odoo-debug-labubu.zip odoo-debug-labubu.xpi
```

## Install

Open `about:debugging` in Firefox → **This Firefox** → **Load Temporary Add-on** → select the `.xpi` file.
