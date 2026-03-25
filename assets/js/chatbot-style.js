(function() {
    const hostId = '__botforge__';
    const primaryColor = '#E8620A';

    function applyStyles() {
        const host = document.getElementById(hostId);
        if (!host || !host.shadowRoot) return;

        // Check if styles are already applied
        if (host.shadowRoot.getElementById('custom-bot-style')) return;

        const style = document.createElement('style');
        style.id = 'custom-bot-style';
        style.textContent = `
            .bf-bubble {
                background-color: ${primaryColor} !important;
                box-shadow: 0 4px 16px rgba(232, 98, 10, 0.4) !important;
            }
            .bf-head {
                background-color: ${primaryColor} !important;
            }
            .bf-send {
                background-color: ${primaryColor} !important;
            }
            .bf-user .bf-msg {
                background-color: ${primaryColor} !important;
                color: white !important;
            }
            .bf-bubble svg {
                stroke: white !important;
            }
            /* Ensure the icon color is correct */
            .bf-bubble svg path {
                stroke: white !important;
            }
        `;
        host.shadowRoot.appendChild(style);
    }

    // Observer to wait for the shadow root to be populated
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                const host = document.getElementById(hostId);
                if (host) {
                    // Poll for shadowRoot availability as it might be attached shortly after element creation
                    const checkShadow = setInterval(() => {
                        if (host.shadowRoot) {
                            applyStyles();
                            clearInterval(checkShadow);
                            observer.disconnect();
                        }
                    }, 100);
                    
                    // Safety timeout
                    setTimeout(() => {
                        clearInterval(checkShadow);
                    }, 5000);
                }
            }
        });
    });

    observer.observe(document.body, { childList: true });

    // Fallback if already exists
    if (document.getElementById(hostId)) {
        applyStyles();
    }
})();
