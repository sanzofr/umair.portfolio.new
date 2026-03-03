
window.addEventListener("DOMContentLoaded", function () {

    // LENIS
    const lenis = new Lenis({
        lerp: 0.08, // smoothness
        smoothWheel: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP + ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Connect Lenis with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Reusable animation function
    function animateFromBottom(selector) {
        document.querySelectorAll(selector).forEach((el) => {

            gsap.fromTo(el,
                {
                    y: 60,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%",   // trigger earlier
                        toggleActions: "play none none reverse",
                    }
                }
            );

        });
    }

    // HERO
    animateFromBottom(".hero .text p");
    animateFromBottom(".hero .text h1");
    animateFromBottom(".hero .text h2");
    animateFromBottom(".hero .btn");
    animateFromBottom(".hero .btn2");
    animateFromBottom(".picture img");
    animateFromBottom(".over1");
    animateFromBottom(".over2");

    // ABOUT
    animateFromBottom(".about-tag");
    animateFromBottom(".about-title");
    animateFromBottom(".about-col");
    animateFromBottom(".about-quote");

    // WORK
    animateFromBottom(".section-tag");
    animateFromBottom(".section-title");
    animateFromBottom(".work-card");

    // CTA
    animateFromBottom(".cta h1");
    animateFromBottom(".cta p");
    animateFromBottom(".cta .btn");

    // FOOTER (this was breaking before)
    animateFromBottom(".footer h2");
    animateFromBottom(".footer p");
    animateFromBottom(".socials i");

});


const header = document.querySelector(".header");

document.addEventListener("click", (e) => {
    if (header.contains(e.target)) {
        header.classList.toggle("active");
    } else {
        header.classList.remove("active");
    }
});
