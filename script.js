function downloadLatest() {
    const latestVersion = "RelicfallSetup.exe";
    alert("Téléchargement de la dernière version (1.0)");
    window.location.href = latestVersion;
}

function downloadGame() {
    const select = document.getElementById("version-select");

    if (!select) return;

    const file = select.value;
    alert("Téléchargement de " + select.options[select.selectedIndex].text);
    window.location.href = file;
}

function scrollGallery(direction) {
    const gallery = document.getElementById("gallery");

    if (!gallery) return;

    gallery.scrollBy({
        left: direction * 500,
        behavior: "smooth"
    });
}

let lastScroll = 0;
const header = document.querySelector("header");

if (header) {
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 80) {
            header.style.transform = "translateY(0)";
            lastScroll = currentScroll;
            return;
        }

        if (currentScroll > lastScroll + 40) {
            header.style.transform = "translateY(-100%)";
            lastScroll = currentScroll;
        }

        if (currentScroll < lastScroll - 20) {
            header.style.transform = "translateY(0)";
            lastScroll = currentScroll;
        }
    });
}

function getLanguage() {
    return localStorage.getItem("language") || "fr";
}

function goToPage(page) {
    const language = getLanguage();

    window.location.href = language === "en"
        ? page + "-en.html"
        : page + ".html";
}

function goToHome() {
    const language = getLanguage();

    window.location.href = language === "en"
        ? "index-en.html"
        : "index.html";
}

function toggleLanguage() {
    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }

    if (currentPage.includes("-en")) {
        localStorage.setItem("language", "fr");
        window.location.href = currentPage.replace("-en.html", ".html");
    } else {
        localStorage.setItem("language", "en");

        if (currentPage === "index.html") {
            window.location.href = "index-en.html";
        } else {
            window.location.href = currentPage.replace(".html", "-en.html");
        }
    }
}

function openImage(src) {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");

    if (!modal || !modalImage) return;

    modalImage.src = src;
    modal.style.display = "flex";
}

function closeImage() {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");

    if (!modal || !modalImage) return;

    modal.style.display = "none";
    modalImage.src = "";
}