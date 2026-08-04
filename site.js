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

    const explorer = document.querySelector("[data-project-explorer]");
    if (explorer) {
        const filterButtons = Array.from(explorer.querySelectorAll("[data-project-filter]"));
        const cards = Array.from(explorer.querySelectorAll("[data-project-card]"));
        const searchInput = explorer.querySelector("[data-project-search]");
        const count = explorer.querySelector("[data-project-count]");
        const empty = explorer.querySelector("[data-project-empty]");
        let activeFilter = "all";

        const updateResults = () => {
            const query = (searchInput?.value || "").trim().toLowerCase();
            let visibleCount = 0;

            cards.forEach((card) => {
                const topics = (card.dataset.projectTopics || "").split(" ");
                const text = card.textContent.toLowerCase();
                const matchesFilter = activeFilter === "all" || topics.includes(activeFilter);
                const matchesSearch = !query || text.includes(query);
                const isVisible = matchesFilter && matchesSearch;
                card.hidden = !isVisible;
                visibleCount += Number(isVisible);
            });

            if (count) {
                count.textContent = `${visibleCount} ${visibleCount === 1 ? "project" : "projects"} shown`;
            }
            if (empty) {
                empty.hidden = visibleCount !== 0;
            }
        };

        filterButtons.forEach((button) => {
            button.addEventListener("click", () => {
                activeFilter = button.dataset.projectFilter || "all";
                filterButtons.forEach((candidate) => {
                    candidate.setAttribute("aria-pressed", String(candidate === button));
                });
                updateResults();
            });
        });

        searchInput?.addEventListener("input", updateResults);
        updateResults();
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
