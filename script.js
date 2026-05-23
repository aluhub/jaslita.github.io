const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {
  music.play();

  document.querySelectorAll(".hidden").forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
    }, index * 500);
  });

  startBtn.innerText = "Her Universe Is Alive ✨";
});

const birthDate = new Date("1998-08-10");
const now = new Date();

const diff = now - birthDate;

const seconds = Math.floor(diff / 1000);
const days = Math.floor(seconds / 86400);
const years = (days / 365.25).toFixed(1);

document.getElementById("age").innerText =
`${years} Years`;

document.getElementById("heartbeats").innerText =
`${(seconds * 1.2).toLocaleString()} beats`;

document.getElementById("blinks").innerText =
`${(seconds / 4).toLocaleString()} blinks`;

document.getElementById("blood").innerText =
`${(days * 7570).toLocaleString()} litres`;

document.getElementById("breaths").innerText =
`${(seconds * 0.2).toLocaleString()} breaths`;

document.getElementById("dogYears").innerText =
`${(years * 7).toFixed(0)} dog years`;

document.getElementById("mercuryAge").innerText =
`${(years / 0.24).toFixed(1)} years`;

document.getElementById("venusAge").innerText =
`${(years / 0.62).toFixed(1)} years`;

document.getElementById("marsAge").innerText =
`${(years / 1.88).toFixed(1)} years`;

document.getElementById("jupiterAge").innerText =
`${(years / 11.86).toFixed(1)} years`;

const gallery = document.getElementById("gallery");

for(let i=1;i<=25;i++){

  const img = document.createElement("img");
  img.src = `images/${i}.jpg`;

  gallery.appendChild(img);
}

function createHeart(){

  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = ["❤️","💖","💕","💘"][Math.floor(Math.random()*4)];

  heart.style.left = Math.random()*100 + "vw";

  heart.style.animationDuration =
  5 + Math.random()*8 + "s";

  document.body.appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },12000);
}

setInterval(createHeart,600);

function createBubble(){

  const bubble = document.createElement("div");

  bubble.classList.add("bubble");

  const size = 10 + Math.random()*40;

  bubble.style.width = size + "px";
  bubble.style.height = size + "px";

  bubble.style.left = Math.random()*100 + "vw";

  bubble.style.animationDuration =
  8 + Math.random()*8 + "s";

  document.body.appendChild(bubble);

  setTimeout(()=>{
    bubble.remove();
  },16000);
}

setInterval(createBubble,1200);

function createButterfly(){

  const butterfly = document.createElement("div");

  butterfly.classList.add("butterfly");

  butterfly.innerHTML =
  ["🦋","💙","💜","✨"][Math.floor(Math.random()*4)];

  document.body.appendChild(butterfly);

  setTimeout(()=>{
    butterfly.remove();
  },12000);
}

setInterval(createButterfly,5000);

function createFirework(){

  const firework = document.createElement("div");

  firework.style.position = "fixed";
  firework.style.left = Math.random()*100 + "vw";
  firework.style.top = Math.random()*100 + "vh";
  firework.style.fontSize = "40px";
  firework.style.pointerEvents = "none";
  firework.style.animation = "fade 2s forwards";

  firework.innerHTML = "✨";

  document.body.appendChild(firework);

  setTimeout(()=>{
    firework.remove();
  },2000);
}

setInterval(createFirework,4000);