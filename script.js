const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn'); // Correct variable name

yesBtn.addEventListener('click', () => {
    question.innerHTML = "I love you too!";
    gif.src = "https://www.bing.com/th/id/OGC.5220294b487de5a94f0474ba42e9a260?pid=1.7&rurl=https%3a%2f%2fmedia1.tenor.com%2fimages%2f5220294b487de5a94f0474ba42e9a260%2ftenor.gif%3fitemid%3d13147090&ehk=%2fvzfl3eIeMo2V57uNhEHh53a%2bSgvJu56sCWGSNNribo%3d";
});

noBtn.addEventListener('mouseover', () => {
    const noBtnRec = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRec.width;
    const maxY = window.innerHeight - noBtnRec.height;

    const randomX = Math.floor(Math.random() * maxX); // Correct spelling
    const randomY = Math.floor(Math.random() * maxY); // Correct spelling

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
