(() => {
    const url = new URL(window.location.href);

    const isOdoo =
        url.hostname.endsWith(".dev.odoo.com") ||
        (url.hostname === "localhost" && url.pathname.startsWith("/odoo"));

    if (!isOdoo) return;

    browser.storage.local.get({ enabled: true, debugMode: "default" }).then(({ enabled, debugMode }) => {
        const value = debugMode === "default" ? "Labubu" : debugMode;
        if (!enabled) {
            if (!url.searchParams.has("debug")) return;
            url.searchParams.delete("debug");
            window.location.replace(url.toString());
            return;
        }
        if (url.searchParams.get("debug") === value) return;
        url.searchParams.set("debug", value);
        window.location.replace(url.toString());
    });
})();
