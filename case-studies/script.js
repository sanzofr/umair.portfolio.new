// Lenis smooth scroll
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Header toggle
const header = document.querySelector(".header");

document.addEventListener("click", (e) => {
    if (header.contains(e.target)) {
        header.classList.toggle("active");
    } else {
        header.classList.remove("active");
    }
});

// PDF Modal Logic
const modal = document.getElementById("pdfModal");
const iframe = document.getElementById("pdfFrame");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".blog-card").forEach(card => {
    card.addEventListener("click", () => {
        const fileId = card.getAttribute("data-pdf");

        iframe.src = `/projects/${fileId}`;
        modal.classList.add("active");
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    iframe.src = "";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
        iframe.src = "";
    }
});
