function fungsimau() {
    fungsi = 0; tes();
    teksjudulakhir = "Yeayyy!!! &#10084;";
    tekskalimatakhir = "Makasii udah mau nerima<br>aku jadi pacar kamu RA &#10084;";
}

function fungsigamau() {
    fungsi = 0; tes();
    teksjudulakhir = "Yahhh ";
    tekskalimatakhir = "Yaudah kalo kamu gamau,<br>biar aku aja yang jadi<br>pacar kamu RA &#10084;";
}

teksjudulakhir2 = "I Love You";
tekspalingakhir = "Ciee Udah Ga Jomblo Lagi Sekarang";

const body = document.querySelector("body");
initom.style = "opacity:0;bottom:0;transition:none";
audio = new Audio('' + linkmp3.src);

function berjatuhan() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 90) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
    body.appendChild(heart);
}

setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart");
    if (heartArr.length > 100) { heartArr[0].remove() }
}, 100);