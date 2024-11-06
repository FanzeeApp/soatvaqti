const soatEl = document.getElementById('soat');
const daqiqaEl = document.getElementById('daqiqa');
const soniyaEl = document.getElementById('soniya');

function vaqt() {
  const hozirgiVaqt = new Date();

  const soat = hozirgiVaqt.getHours();
  const daqiqa = hozirgiVaqt.getMinutes();
  const soniya = hozirgiVaqt.getSeconds();

  soatEl.textContent = soat.toString().padStart(2, '0');
  daqiqaEl.textContent = daqiqa.toString().padStart(2, '0');
  soniyaEl.textContent = soniya.toString().padStart(2, '0');
}

function rangRandom() {
  const rand = Math.floor(Math.random() * 16777216);
  const hexRang = `#${rand.toString(16).padStart(6, '0')}`;
  document.body.style.backgroundColor = hexRang;
}

setInterval(() => {
  vaqt();
  rangRandom();
}, 1000);

vaqt();
rangRandom();
