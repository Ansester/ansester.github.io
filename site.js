(() => {
    const root = document.documentElement;
    const body = document.body;
    root.classList.add("js");

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
            if (event.key === "Escape") {
                closeMenu();
                menuButton.focus();
            }
        });
    }

    document.querySelectorAll("[data-copy-email]").forEach((button) => {
        const label = button.textContent;
        button.addEventListener("click", async () => {
            const email = button.dataset.copyEmail;
            if (!email) return;

            try {
                await navigator.clipboard.writeText(email);
                button.textContent = "Email copied";
            } catch {
                window.location.href = `mailto:${email}`;
                return;
            }

            window.setTimeout(() => {
                button.textContent = label;
            }, 1800);
        });
    });

    document.querySelectorAll("[data-print-cv]").forEach((button) => {
        button.addEventListener("click", () => window.print());
    });

    const topButton = document.querySelector("[data-back-to-top]");
    if (topButton) {
        const updateTopButton = () => {
            topButton.classList.toggle("is-visible", window.scrollY > 500);
        };
        window.addEventListener("scroll", updateTopButton, { passive: true });
        topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
        updateTopButton();
    }
})();
