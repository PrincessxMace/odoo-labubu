# Odoo Debug Labubu

Firefox extension that automatically appends `debug=Labubu` to Odoo URLs on dev and local instances.

## Build

```powershell
Remove-Item -ErrorAction SilentlyContinue odoo-debug-labubu.zip, odoo-debug-labubu.xpi

Compress-Archive `
    -Path manifest.json,content.js,popup.html,popup.js,background.js,svgs `
    -DestinationPath odoo-debug-labubu.zip

Rename-Item odoo-debug-labubu.zip odoo-debug-labubu.xpi
```

## Install (Temporary)

Open `about:debugging` in Firefox → **This Firefox** → **Load Temporary Add-on** → select the `.xpi` file.

> The add-on will be removed when Firefox is closed.

## Install (Permanent — Firefox Developer Edition only)

Unsigned add-ons can only be installed permanently in **Firefox Developer Edition** or **Nightly**.

1. Open `about:config` in the address bar
2. Accept the warning
3. Search for `xpinstall.signatures.required`
4. Set the value to `false`

Then install permanently:

- Open the Add-ons Manager (`Ctrl+Shift+A`)
- Click the gear icon ⚙️ → **"Install Add-on From File…"**
- Select your `.xpi` file

> If the add-on gets disabled after a restart, either `xpinstall.signatures.required` is not set to `false`, or it was installed via `about:debugging` (temporary) instead of through the Add-ons Manager.
