(function () {
    var hostId = "__botforge__";
    var styleId = "bf-site-theme";
    var currentScript = document.currentScript;
    var avatarUrl = new URL("../images/logo.png", currentScript && currentScript.src ? currentScript.src : window.location.href).href;
    var themeCss = [
        ":host {",
        "    color-scheme: dark;",
        "    font-family: 'Inter', Arial, sans-serif;",
        "}",
        "* {",
        "    font-family: 'Inter', Arial, sans-serif !important;",
        "}",
        ".bf-bubble {",
        "    width: 68px !important;",
        "    height: 68px !important;",
        "    border-radius: 18px !important;",
        "    border: 1px solid rgba(255, 182, 148, 0.32) !important;",
        "    background: linear-gradient(135deg, #ffb694 0%, #ef6712 100%) !important;",
        "    box-shadow: 0 18px 38px rgba(232, 98, 10, 0.22), 0 12px 26px rgba(0, 0, 0, 0.46) !important;",
        "}",
        ".bf-bubble:hover {",
        "    transform: translateY(-2px) scale(1.02) !important;",
        "}",
        ".bf-bubble--avatar {",
        "    border-radius: 14px !important;",
        "    background: rgba(10, 10, 10, 0.16) !important;",
        "    padding: 8px !important;",
        "}",
        ".bf-win {",
        "    border-radius: 24px !important;",
        "    border: 1px solid rgba(89, 66, 55, 0.92) !important;",
        "    background: linear-gradient(180deg, rgba(32, 31, 31, 0.98), rgba(14, 14, 14, 0.98)) !important;",
        "    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.62), 0 8px 32px rgba(232, 98, 10, 0.12) !important;",
        "    overflow: hidden !important;",
        "    backdrop-filter: blur(18px);",
        "}",
        ".bf-head {",
        "    background: linear-gradient(135deg, rgba(255, 182, 148, 0.96), rgba(232, 98, 10, 0.94)) !important;",
        "    border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;",
        "    color: #ffffff !important;",
        "}",
        ".bf-head * {",
        "    color: #ffffff !important;",
        "}",
        "#bf-close {",
        "    border-radius: 12px !important;",
        "    background: rgba(10, 10, 10, 0.14) !important;",
        "}",
        ".bf-msgs {",
        "    background: radial-gradient(circle at top, rgba(232, 98, 10, 0.08), transparent 34%), #0e0e0e !important;",
        "    scrollbar-color: #e8620a #1c1b1b;",
        "}",
        ".bf-msgs::-webkit-scrollbar {",
        "    width: 10px;",
        "}",
        ".bf-msgs::-webkit-scrollbar-track {",
        "    background: #1c1b1b;",
        "}",
        ".bf-msgs::-webkit-scrollbar-thumb {",
        "    background: linear-gradient(180deg, #ffb694 0%, #e8620a 100%);",
        "    border-radius: 999px;",
        "}",
        ".bf-msg {",
        "    border-radius: 14px !important;",
        "    line-height: 1.65 !important;",
        "}",
        ".bf-bot {",
        "    background: #201f1f !important;",
        "    border: 1px solid rgba(89, 66, 55, 0.42) !important;",
        "    color: #f5f5f5 !important;",
        "}",
        ".bf-user {",
        "    background: linear-gradient(135deg, #ffb694 0%, #ef6712 100%) !important;",
        "    color: #ffffff !important;",
        "    box-shadow: 0 10px 24px rgba(232, 98, 10, 0.18) !important;",
        "}",
        ".bf-foot {",
        "    background: rgba(10, 10, 10, 0.94) !important;",
        "    border-top: 1px solid rgba(89, 66, 55, 0.5) !important;",
        "}",
        "#bf-input {",
        "    border-radius: 14px !important;",
        "    border: 1px solid #353534 !important;",
        "    background: #1c1b1b !important;",
        "    color: #f5f5f5 !important;",
        "    box-shadow: none !important;",
        "}",
        "#bf-input::placeholder {",
        "    color: #a88a7e !important;",
        "}",
        "#bf-input:focus {",
        "    border-color: #e8620a !important;",
        "    box-shadow: 0 0 0 3px rgba(232, 98, 10, 0.16) !important;",
        "}",
        "#bf-send {",
        "    border-radius: 14px !important;",
        "    border: none !important;",
        "    background: linear-gradient(135deg, #ffb694 0%, #ef6712 100%) !important;",
        "    color: #ffffff !important;",
        "}",
        "#bf-send:hover {",
        "    filter: brightness(1.05);",
        "}",
        ".bf-powered {",
        "    border-top: 1px solid rgba(89, 66, 55, 0.42) !important;",
        "    background: #0e0e0e !important;",
        "    color: #a88a7e !important;",
        "}",
        ".bf-powered a {",
        "    color: #ffb694 !important;",
        "}",
        "@media (max-width: 640px) {",
        "    .bf-bubble {",
        "        width: 62px !important;",
        "        height: 62px !important;",
        "        border-radius: 16px !important;",
        "    }",
        "    .bf-win {",
        "        width: min(calc(100vw - 24px), 420px) !important;",
        "        height: min(72vh, 640px) !important;",
        "        right: 0 !important;",
        "        bottom: 84px !important;",
        "    }",
        "}",
    ].join("\n");

    function applyTheme() {
        var host = document.getElementById(hostId);
        if (!host || !host.shadowRoot) {
            return false;
        }

        host.style.setProperty("--avatar", 'url("' + avatarUrl + '")');

        if (!host.shadowRoot.getElementById(styleId)) {
            var style = document.createElement("style");
            style.id = styleId;
            style.textContent = themeCss;
            host.shadowRoot.appendChild(style);
        }

        return true;
    }

    function watchForWidget() {
        if (applyTheme()) {
            return;
        }

        var rootNode = document.body || document.documentElement;
        if (!rootNode) {
            return;
        }

        var observer = new MutationObserver(function () {
            if (applyTheme()) {
                observer.disconnect();
            }
        });

        observer.observe(rootNode, { childList: true, subtree: true });

        window.addEventListener("load", applyTheme, { once: true });
        window.setTimeout(function () {
            observer.disconnect();
            applyTheme();
        }, 10000);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", watchForWidget, { once: true });
    } else {
        watchForWidget();
    }
})();