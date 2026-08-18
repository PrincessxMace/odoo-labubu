const HINTS = {
    default: "Debug menu + technical fields.",
    assets: "Unminified JS/CSS — use for frontend debugging.",
    tests: "Loads QUnit test suites in the browser.",
};

const toggle = document.getElementById("toggle");
const label = document.getElementById("label");
const dot = document.getElementById("dot");
const modeSelect = document.getElementById("debugMode");
const hint = document.getElementById("hint");

browser.storage.local.get({ enabled: true, debugMode: "default" }).then(({ enabled, debugMode }) => {
    modeSelect.value = debugMode;
    hint.textContent = HINTS[debugMode];
    apply(enabled);
});

toggle.addEventListener("change", () => {
    const enabled = toggle.checked;
    browser.storage.local.set({ enabled });
    apply(enabled);
});

modeSelect.addEventListener("change", () => {
    browser.storage.local.set({ debugMode: modeSelect.value });
    hint.textContent = HINTS[modeSelect.value];
});

function apply(enabled) {
    toggle.checked = enabled;
    label.textContent = enabled ? "Aktiv" : "Deaktiviert";
    dot.classList.toggle("on", enabled);
    const icon = enabled ? "icon-on.svg" : "icon-off.svg";
    browser.browserAction.setIcon({ path: { 32: icon, 64: icon } });
}
