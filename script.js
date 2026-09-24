/* ==========================================
   ELEMENT
========================================== */

const pages = document.querySelectorAll(".page");

const startBtn = document.getElementById("startBtn");

const envelope = document.getElementById("envelope");

const restartBtn = document.getElementById("restartBtn");

const bgm = document.getElementById("bgm");

const hugBtn = document.getElementById("hugBtn");

const meterFill = document.getElementById("meterFill");

const nextBtns = document.querySelectorAll(".next");


/* ==========================================
   CURRENT PAGE
========================================== */

let currentPage = 1;


/* ==========================================
   SHOW PAGE
========================================== */

function showPage(id) {

    pages.forEach(page => {

        page.classList.remove("active");

    });

    const targetPage = document.getElementById(id);

    if (targetPage) {

        targetPage.classList.add("active");

    }

}


/* ==========================================
   MUSIC
========================================== */

document.body.addEventListener("click", () => {

    if (bgm) {

        bgm.play().catch(() => {});

    }

}, { once: true });


/* ==========================================
   PAGE 1 → PAGE 2
========================================== */

if (startBtn) {

    startBtn.addEventListener("click", () => {

        currentPage = 2;

        showPage("page2");

    });

}


/* ==========================================
   PAGE 2 → PAGE 3
   ENVELOPE
========================================== */

if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.classList.add("open");

        if (meterFill) {

            meterFill.style.width = "25%";

        }

        setTimeout(() => {

            currentPage = 3;

            showPage("page3");

        }, 1200);

    });

}


/* ==========================================
   NEXT BUTTON
========================================== */

nextBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        /* ==============================
           PAGE 3 → PAGE 4
        ============================== */

        if (currentPage === 3) {

            currentPage = 4;

            showPage("page4");

        }


        /* ==============================
           PAGE 4 → PAGE 5
           FOTO
        ============================== */

        else if (currentPage === 4) {

            currentPage = 5;

            showPage("page5");

        }


        /* ==============================
           PAGE 5 → PAGE 6
           FOTO → SURAT
        ============================== */

        else if (currentPage === 5) {

            currentPage = 6;

            showPage("page6");

            heartRain();

        }


        /* ==============================
           PAGE 6 → PAGE 7
           SURAT → ENDING
        ============================== */

        else if (currentPage === 6) {

            currentPage = 7;

            showPage("page7");

        }

    });

});


/* ==========================================
   RESTART
========================================== */

if (restartBtn) {

    restartBtn.addEventListener("click", () => {

        currentPage = 1;

        if (envelope) {

            envelope.classList.remove("open");

        }

        if (meterFill) {

            meterFill.style.width = "0%";

        }

        showPage("page1");

    });

}


/* ==========================================
   HEART RAIN
========================================== */

function heartRain() {

    for (let i = 0; i < 80; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 80);

    }

}


/* ==========================================
   CREATE HEART
========================================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💗";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (18 + Math.random() * 22) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 9000);

}


/* ==========================================
   FLOATING HEARTS
========================================== */

setInterval(() => {

    createHeart();

}, 1200);


/* ==========================================
   HUG BUTTON
========================================== */

if (hugBtn) {

    hugBtn.addEventListener("click", () => {

        for (let i = 0; i < 30; i++) {

            setTimeout(() => {

                createHeart();

            }, i * 60);

        }

        alert(
            "Makasih ya sayangg... Aku bakal berusaha jadi lebih baik 🤍"
        );

    });

}