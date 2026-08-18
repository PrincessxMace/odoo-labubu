(() => {
    const url = new URL(window.location.href);

    const isOdoo =
        url.hostname.includes("odoo") ||
        url.pathname.startsWith("/web");

    if (!isOdoo) {
        return;
    }

    if (url.searchParams.get("debug") === "Labubu") {
        return;
    }

    url.searchParams.set("debug", "Labubu");

    window.location.replace(url.toString());
})();
