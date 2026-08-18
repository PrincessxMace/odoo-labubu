function setIcon(enabled) {
    browser.browserAction.setIcon({
        path: enabled ? "unicorn-svgrepo-com-color.svg" : "unicorn-svgrepo-com-black.svg"
    });
}

browser.storage.local.get({ enabled: true }).then(({ enabled }) => setIcon(enabled));

browser.storage.onChanged.addListener((changes) => {
    if ("enabled" in changes) setIcon(changes.enabled.newValue);
});
