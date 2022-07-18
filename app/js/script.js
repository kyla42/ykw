const switchBtn = document.querySelector(".switch-btn");
const ltDk = document.querySelectorAll(".ltdk");

const prev = document.getElementById("btn-prev");
const next = document.getElementById("btn-next");
const imgThumb = document.querySelector(".css__image");

const prevModal = document.getElementById("modal-btn-prev");
const nextModal = document.getElementById("modal-btn-next");

const overlay = document.querySelector(".overlay");
const modalClose = document.getElementById("modal-close");
const animBox = document.querySelector(".anim-box");
const animLink = document.getElementById("anim-link")

const thumbnailArr = ["img1", "img2", "img3", "img4", "img5", "img6"];
const animArr = [
    "https://kyla42.github.io/Octagon/",
    "https://kyla42.github.io/Animated-bird2.0/",
    "https://kyla42.github.io/d_69/",
    "https://kyla42.github.io/d_43/",
    "https://kyla42.github.io/d_31/",
    "https://kyla42.github.io/d-48/",
];

// switch dark and light
switchBtn.addEventListener("click", function(){
    for (let i = 0; i < ltDk.length; i++) {
        if (ltDk[i].classList.contains("dark")) {
            ltDk[i].classList.remove("dark");
            document.querySelector(".btn-design").classList.add("dark-btn");
        }
        else {
            ltDk[i].classList.add("dark");
            document.querySelector(".btn-design").classList.remove("dark-btn");
        }
    }
})

// slider
let i = 0;

const imgNext = function() {
    imgThumb.classList.remove(thumbnailArr[i]);
    i++;
    if (i > thumbnailArr.length - 1) {
        i = 0;
    }
    imgThumb.classList.add(thumbnailArr[i]);
    animLink.src = animArr[i];
}

const imgPrev = function() {
    imgThumb.classList.remove(thumbnailArr[i]);
    i--;
    if (i < 0) {
        i = thumbnailArr.length - 1;
    }
    imgThumb.classList.add(thumbnailArr[i]);
    animLink.src = animArr[i];
}

next.addEventListener("click", imgNext);
prev.addEventListener("click", imgPrev);

// modal
imgThumb.addEventListener("click", () => overlay.classList.remove("hidden"));
modalClose.addEventListener("click", () => overlay.classList.add("hidden"));

nextModal.addEventListener("click", imgNext);
prevModal.addEventListener("click", imgPrev);

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        imgNext()
        next.style.backgroundColor = "hsl(0, 0%, 77%)";
        setTimeout(() => next.style.backgroundColor = null, 300)
    }
    if (e.key === "ArrowLeft") {
        imgPrev()
        prev.style.backgroundColor = "hsl(0, 0%, 77%)";
        setTimeout(() => prev.style.backgroundColor = null, 300)
    }
})

// animation
const logos = document.querySelector(".logos");

window.addEventListener("scroll", function(){
    let scroll = window.scrollY;
    let h = window.innerHeight;
    let logosPosition = logos.getBoundingClientRect().top + scroll;

    if (scroll > logosPosition - h) {
        logos.classList.add("logos-anim");
    }
    else {
        logos.classList.remove("logos-anim");
    }
})




