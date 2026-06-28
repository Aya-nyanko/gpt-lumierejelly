/* =========================
   Loading Animation
========================= */

window.addEventListener("load", () => {

    const loading =
        document.getElementById("loading");

    setTimeout(() => {

        loading.style.transition =
            "opacity 1.5s ease";

        loading.style.opacity = "0";

        setTimeout(() => {

            loading.style.display = "none";

        }, 1500);

    }, 1500);

});


/* =========================
   Hero Title Animation
========================= */

window.addEventListener("load", () => {

    const lines =
        document.querySelectorAll("#hero-title .line");

    let totalDelay = 0;

    lines.forEach((line, lineIndex) => {

        const text = line.textContent.trim();

        line.textContent = "";

        [...text].forEach((char, index) => {

            const span =
                document.createElement("span");

            span.classList.add("char");

            span.textContent = char;

            const delay =
                (lineIndex * 2) +
                (index * 0.12);

            span.style.animationDelay =
                delay + "s";

            totalDelay = delay;

            line.appendChild(span);

        });

    });

    /* ゴールドライン表示 */

    setTimeout(() => {

        const goldLine =
            document.querySelector(".gold-line");

        if(goldLine){

            goldLine.classList.add("active");

        }

    }, (totalDelay + 1) * 1000);

});


/* =========================
   Hero Description Animation
========================= */

window.addEventListener("load", () => {

    const lines =
        document.querySelectorAll(
            "#hero-description .desc-line"
        );

    let totalDelay = 4;

    lines.forEach((line, lineIndex) => {

        const text =
            line.textContent.trim();

        line.textContent = "";

        [...text].forEach((char, index) => {

            const span =
                document.createElement("span");

            span.classList.add("desc-char");

            span.textContent = char;

            const delay =
                totalDelay +
                (lineIndex * 1.5) +
                (index * 0.05);

            span.style.animationDelay =
                delay + "s";

            line.appendChild(span);

        });

    });

    /* Crystal Divider 表示 */

    setTimeout(() => {

        const divider =
            document.querySelector(".crystal-divider");

        if(divider){

            divider.classList.add("active");

        }

    }, 8000);

});
/* =========================
   Crystal Particles
========================= */

const particles =
    document.getElementById("particles");

if (particles) {

    for (let i = 0; i < 45; i++) {

        const particle =
            document.createElement("span");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";

        particle.style.animationDelay =
            Math.random() * 12 + "s";

        particle.style.animationDuration =
            (12 + Math.random() * 10) + "s";

        particle.style.opacity =
            Math.random() * 0.6 + 0.2;

        particle.style.transform =
            `scale(${Math.random() * 0.8 + 0.4})`;

        particles.appendChild(particle);

    }

}


/* =========================
   Scroll Reveal
========================= */

const reveals =
    document.querySelectorAll(".reveal");

function revealElements() {

    reveals.forEach((element) => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealElements
);

revealElements();


/* =========================
   Header Effect
========================= */

const header =
    document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.style.background =
            "rgba(8,19,33,.92)";

        header.style.backdropFilter =
            "blur(18px)";

    } else {

        header.style.background =
            "rgba(8,19,33,.65)";

        header.style.backdropFilter =
            "blur(12px)";

    }

});


/* =========================
   Hero Parallax
========================= */

const heroImage =
    document.querySelector(".lesson-hero img");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const offset =
        window.pageYOffset;

    heroImage.style.transform =
        `translateY(${offset * 0.18}px) scale(1.08)`;

});
/* =========================
   Glass Card Hover
========================= */

const cards =
    document.querySelectorAll(".lesson-card");

cards.forEach((card)=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transition =
            "0.5s ease";

        card.style.transform =
            "translateY(-15px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
            "translateY(0) scale(1)";

    });

});


/* =========================
   Glass Reflection Effect
========================= */

cards.forEach((card)=>{

    const shine =
        document.createElement("div");

    shine.classList.add("glass-shine");

    card.appendChild(shine);

});


/* =========================
   Mouse 3D Effect
========================= */

cards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const rotateY =
            ((x / rect.width)-0.5) * 14;

        const rotateX =
            ((rect.height/2-y) / rect.height) * 14;

        card.style.transform =

        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-12px)
        scale(1.03)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

    });

});


/* =========================
   Smooth Scroll Optimization
========================= */

let ticking = false;

window.addEventListener("scroll",()=>{

    if(!ticking){

        window.requestAnimationFrame(()=>{

            revealElements();

            ticking = false;

        });

        ticking = true;

    }

});


/* =========================
   Page Loaded
========================= */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});
