/* ==========================
   スクロールアニメーション
========================== */

const reveals = document.querySelectorAll(
".reveal-left, .reveal-right"
);

function revealOnScroll(){

    reveals.forEach(item=>{

        const top =
        item.getBoundingClientRect().top;

        const trigger =
        window.innerHeight - 120;

        if(top < trigger){

            item.classList.add("active");
        }

    });

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


/* ==========================
   ゴールドライン表示
========================== */

const lines =
document.querySelectorAll(".gold-line");

function showLine(){

    lines.forEach(line=>{

        const top =
        line.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            line.style.width = "180px";
            line.style.opacity = "1";
        }

    });

}

window.addEventListener(
"scroll",
showLine
);

showLine();


/* ==========================
   タイムライン順番表示
========================== */

const timelineItems =
document.querySelectorAll(
".timeline-item"
);

function showTimeline(){

    timelineItems.forEach((item,index)=>{

        const top =
        item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            setTimeout(()=>{

                item.style.opacity = "1";

                item.style.transform =
                "translateX(0)";

            },index * 250);

        }

    });

}

window.addEventListener(
"scroll",
showTimeline
);

timelineItems.forEach(item=>{

    item.style.opacity = "0";

    item.style.transform =
    "translateX(-50px)";

    item.style.transition =
    ".8s ease";
});


/* ==========================
   AWARDカード順番表示
========================== */

const awards =
document.querySelectorAll(
".award-item"
);

function showAwards(){

    awards.forEach((item,index)=>{

        const top =
        item.getBoundingClientRect().top;

        if(top < window.innerHeight - 80){

            setTimeout(()=>{

                item.style.opacity = "1";

                item.style.transform =
                "translateY(0)";

            },index * 180);

        }

    });

}

window.addEventListener(
"scroll",
showAwards
);

awards.forEach(item=>{

    item.style.opacity = "0";

    item.style.transform =
    "translateY(50px)";

    item.style.transition =
    ".8s ease";
});


/* ==========================
   HERO パララックス
========================== */

const hero =
document.querySelector(".about-hero");

if(hero){

    window.addEventListener("scroll",()=>{

        let offset =
        window.pageYOffset;

        hero.style.backgroundPositionY =
        offset * 0.2 + "px";

    });

}

/* ==========================
   画像ふわっと浮遊
========================== */

const images =
document.querySelectorAll(
".story img, .chef img"
);

images.forEach(img=>{

    img.addEventListener("mousemove",(e)=>{

        const rect =
        img.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateY =
        (x - rect.width/2)/30;

        const rotateX =
        (rect.height/2 - y)/30;

        img.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
        `;

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform =
        `
        perspective(1000px)
        rotateX(0)
        rotateY(0)
        scale(1)
        `;

    });

});


/* ==========================
   ページロード演出
========================== */

window.addEventListener(
"load",
()=>{

    document.body.style.opacity = "0";

    setTimeout(()=>{

        document.body.style.transition =
        "1.5s";

        document.body.style.opacity =
        "1";

    },100);

});
const particles =
document.getElementById("particles");

for(let i=0;i<50;i++){

    let star =
    document.createElement("span");

    star.classList.add("sparkle");

    star.style.left =
    Math.random()*100+"%";

    star.style.animationDelay =
    Math.random()*8+"s";

    star.style.animationDuration =
    6 + Math.random()*10 +"s";

    particles.appendChild(star);

}
const title =
document.querySelector(".luxury-title");

const observer =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            title.classList.add("active");

            [...title.children]
            .forEach((span,index)=>{

                span.style.transitionDelay =
                index * 0.08 + "s";

            });

        }

    });

});

observer.observe(title);
