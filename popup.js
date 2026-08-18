const toggle = document.getElementById("toggle");
const label = document.getElementById("label");

browser.storage.local.get({ enabled: true }).then(({ enabled }) => {
    apply(enabled);
});

toggle.addEventListener("change", () => {
    const enabled = toggle.checked;
    browser.storage.local.set({ enabled });
    apply(enabled);
});

function apply(enabled) {
    toggle.checked = enabled;
    label.textContent = enabled ? "Aktiv" : "Deaktiviert";
}
