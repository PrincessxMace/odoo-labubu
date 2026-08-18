function setIcon(enabled) {
    const icon = enabled ? "icon-on.svg" : "icon-off.svg";
    browser.browserAction.setIcon({ path: { 32: icon, 64: icon } });
}

browser.storage.local.get({ enabled: true }).then(({ enabled }) => setIcon(enabled));

browser.storage.onChanged.addListener((changes) => {
    if ("enabled" in changes) setIcon(changes.enabled.newValue);
});
