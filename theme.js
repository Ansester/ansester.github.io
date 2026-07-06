/* Theme toggle: flips between light and dark and remembers the choice.
   The no-flash setter runs inline in <head>; this only wires the button. */
(function () {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;

    function current() {
        var explicit = document.documentElement.getAttribute("data-theme");
        if (explicit) return explicit;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    btn.addEventListener("click", function () {
        var next = current() === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        try {
            localStorage.setItem("theme", next);
        } catch (e) {}
        btn.setAttribute("aria-label", next === "dark" ? "Switch to light theme" : "Switch to dark theme");
    });
})();
