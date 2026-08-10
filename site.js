(() => {
    const root = document.documentElement;
    const body = document.body;
    root.classList.add("js");

    // Dark/Light Theme Switching
    const themeButton = document.querySelector("[data-theme-toggle]");
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme) {
        root.classList.toggle("dark-theme", storedTheme === "dark");
        root.classList.toggle("light-theme", storedTheme === "light");
    }

    if (themeButton) {
        themeButton.addEventListener("click", () => {
            const isDark = root.classList.contains("dark-theme") || 
                (!root.classList.contains("light-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
            
            if (isDark) {
                root.classList.remove("dark-theme");
                root.classList.add("light-theme");
                localStorage.setItem("theme", "light");
            } else {
                root.classList.remove("light-theme");
                root.classList.add("dark-theme");
                localStorage.setItem("theme", "dark");
            }
        });
    }

    // Mobile Navigation Toggle
    const menuButton = document.querySelector("[data-menu-toggle]");
    const menu = document.querySelector("#site-menu");

    if (menuButton && menu) {
        const closeMenu = () => {
            menuButton.setAttribute("aria-expanded", "false");
            menu.classList.remove("is-open");
            body.classList.remove("menu-open");
        };

        menuButton.addEventListener("click", () => {
            const isOpen = menuButton.getAttribute("aria-expanded") === "true";
            menuButton.setAttribute("aria-expanded", String(!isOpen));
            menu.classList.toggle("is-open", !isOpen);
            body.classList.toggle("menu-open", !isOpen);
        });

        menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
                closeMenu();
                menuButton.focus();
            }
        });
    }

    // Copy Email helper
    document.querySelectorAll("[data-copy-email]").forEach((button) => {
        const originalTitle = button.getAttribute("title") || "Copy Email";
        button.addEventListener("click", async () => {
            const email = button.dataset.copyEmail;
            if (!email) return;

            try {
                await navigator.clipboard.writeText(email);
                button.setAttribute("title", "Email copied!");
                const badge = document.createElement("div");
                badge.className = "copy-toast";
                badge.textContent = "Email copied to clipboard";
                badge.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#1d6466;color:#fff;padding:8px 16px;border-radius:4px;font-size:0.85rem;z-index:100;box-shadow:0 4px 12px rgba(0,0,0,0.15);";
                document.body.appendChild(badge);
                setTimeout(() => badge.remove(), 2000);
            } catch {
                window.location.href = `mailto:${email}`;
            }

            setTimeout(() => {
                button.setAttribute("title", originalTitle);
            }, 2000);
        });
    });

    // Print helper
    document.querySelectorAll("[data-print-cv]").forEach((button) => {
        button.addEventListener("click", () => window.print());
    });

    // Back to top button
    const topButton = document.querySelector("[data-back-to-top]");
    if (topButton) {
        const updateTopButton = () => {
            topButton.classList.toggle("is-visible", window.scrollY > 400);
        };
        window.addEventListener("scroll", updateTopButton, { passive: true });
        topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
        updateTopButton();
    }
})();
