/* =========================
   Loading Animation
========================= */

window.addEventListener("load", () => {

    const loading =
        document.getElementById("loading");

    setTimeout(() => {

        loading.style.opacity = "0";

        loading.style.transition =
            "opacity 1.5s ease";

        setTimeout(() => {

            loading.style.display = "none";

        }, 1500);

    }, 1500);

});


/* =========================
   Hero Slider
========================= */

const slides =
    document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach((slide) => {

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

if (slides.length > 0) {

    setInterval(nextSlide, 5000);

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

        if (elementTop <
            windowHeight - revealPoint) {

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

    if (window.scrollY > 100) {

        header.style.background =
            "rgba(8,19,33,0.9)";

    } else {

        header.style.background =
            "rgba(8,19,33,0.65)";

    }

});


/* =========================
   Hero Parallax
========================= */




/* =========================
   Card Hover Effect
========================= */

const cards =
    document.querySelectorAll(".card");

cards.forEach((card) => {
const hero =
    document.querySelector(".hero");

if(hero){

    window.addEventListener("scroll", () => {

        const offset =
            window.pageYOffset;

        hero.style.backgroundPositionY =
            offset * 0.2 + "px";

    });

}
    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transition =
                "0.4s";

            card.style.transform =
                "translateY(-10px) scale(1.03)";

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0) scale(1)";
        }
    );

});
/* =========================
   Crystal Particles
========================= */


/* ①キラキラ粒子エフェクトを追加する */
const particles =
    document.getElementById("particles");

if(particles){

    for(let i = 0; i < 50; i++){

        const sparkle =
            document.createElement("span");

        sparkle.classList.add("sparkle");

        sparkle.style.left =
            Math.random() * 100 + "%";

        sparkle.style.animationDelay =
            Math.random() * 12 + "s";

        sparkle.style.animationDuration =
            (8 + Math.random() * 8) + "s";

        particles.appendChild(sparkle);

    }

}

window.addEventListener("load", () => {

    const title =
        document.getElementById("hero-title");

    const text =
        document.getElementById("hero-text");

    setTimeout(() => {

        title.style.transition =
            "2s";

        title.style.opacity =
            "1";

        title.style.transform =
            "translateY(0)";

    }, 1000);

    setTimeout(() => {

        text.style.transition =
            "2s";

        text.style.opacity =
            "1";

        text.style.transform =
            "translateY(0)";

    }, 2500);

});
window.addEventListener("load",()=>{

    const lines =
        document.querySelectorAll(
            "#hero-title .line"
        );

    let totalDelay = 0;

    lines.forEach((line,lineIndex)=>{

        const text = line.textContent;

        line.textContent = "";

        [...text].forEach((char,index)=>{

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

    setTimeout(()=>{

        document
            .querySelector(".gold-line")
            .classList.add("active");

    }, (totalDelay + 1) * 1000);

});
/* =========================
   Hero Description Animation
========================= */

window.addEventListener("load",()=>{

    const lines =
        document.querySelectorAll(
            "#hero-description .desc-line"
        );

    let totalDelay = 4;

    lines.forEach((line,lineIndex)=>{

        const text =
            line.textContent;

        line.textContent = "";

        [...text].forEach((char,index)=>{

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

    setTimeout(()=>{

        document
            .querySelector(".crystal-divider")
            .classList.add("active");

    }, 8000);

});
