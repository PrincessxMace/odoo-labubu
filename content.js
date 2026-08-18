(() => {
    const url = new URL(window.location.href);

    const isOdoo =
        url.hostname.endsWith(".dev.odoo.com") ||
        url.hostname === "localhost";

    if (!isOdoo) return;
    if (url.searchParams.get("debug") === "Labubu") return;

    browser.storage.local.get({ enabled: true }).then(({ enabled }) => {
        if (!enabled) return;
        url.searchParams.set("debug", "Labubu");
        window.location.replace(url.toString());
    });
})();
