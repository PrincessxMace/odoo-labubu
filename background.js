function setIcon(enabled) {
    browser.browserAction.setIcon({
        path: enabled ? "svgs/on.svg" : "svgs/off.svg"
    });
}

browser.storage.local.get({ enabled: true }).then(({ enabled }) => setIcon(enabled));

browser.storage.onChanged.addListener((changes) => {
    if ("enabled" in changes) setIcon(changes.enabled.newValue);
});
