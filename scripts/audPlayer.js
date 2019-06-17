const audSrc = [
  { src: 'https://cdnet2.mixmuz.ru//468f8e7a5393/2687f56cdc1/66eda107d30680f0234f19cd271325bc-1a0a416d-11f59d32-1-5368e74b766/Kai%20Rosenkranz%20%E2%80%94%20Nature.mp3', name: 'Kai Rosenkranz - Nature' },
  { src: 'https://cdnet2.mixmuz.ru/7690fa1f37f3/d6a0aaa6cd/0762ca24b1b61e069c853d0d9422754e-119173c02-c9e293f-1-4089ae82d04/Risen%203%20%E2%80%94%20Risen%20Farewell%20%28The%20Main%20Theme%29.mp3', name: 'Dynamedion - Risen Farewell' },
  { src: 'https://cdnet2.mixmuz.ru/3782a83b9cd4/ed22ff22b0/ca1e41abd4b8bcaf841895681d51218a-ef0d409-11f59g34-1-178ae1727a07/XXXtentation%20%E2%80%94%20Numb.mp3', name: 'XXXTentation - Numb' },
  { src: 'https://cdnet2.mixmuz.ru/ec541cf961c/56b5c44aaa/9b6ce866d591d095c8d110745b033a0c-2ea34340-11f7f443-1-c4a43bff5b2/%D0%9D%D0%B5%D1%80%D0%B2%D1%8B%20%E2%80%94%20%D0%95%D1%91%20%D0%B8%D0%BC%D1%8F.mp3', name: 'Нервы - Её имя' },
];
const aud = document.getElementById('myPlayer');
const playNow = document.getElementById('playNow');
const playTime = document.getElementById('playTime');
const audProgress = document.getElementById('audProgress');
const playEndTime = document.getElementById('playEndTime');

let i = 0;
aud.src = audSrc[i].src;
playNow.innerHTML = audSrc[i].name;

let sec = 0;
playTime.innerHTML = sec;
let timerId;
let paused = false;

function audPrev() {
  aud.pause();
  i--;
  if (i < 0) i = audSrc.length - 1;
  aud.src = audSrc[i].src;
  playNow.innerHTML = audSrc[i].name;
  aud.play();
}

document.getElementById('audLeft').addEventListener('click', audPrev);

function audNext() {
  aud.pause();
  i++;
  if (i >= audSrc.length) i = 0;
  aud.src = audSrc[i].src;
  playNow.innerHTML = audSrc[i].name;
  aud.play();
}

document.getElementById('audRight').addEventListener('click', audNext);

function audPlay() {
  aud.play();
  paused = false;
}

function audStop() {
  aud.pause();
  paused = true;
}

document.getElementById('audPlay').addEventListener('click', audPlay);
document.getElementById('audStop').addEventListener('click', audStop);

function addMus() {
  const src = prompt('Адрес композиции', 'https://');
  const name = prompt('Название композиции', '');
  audSrc.push({ src, name });
  i = audSrc.length - 1;
  aud.src = audSrc[i].src;
  playNow.innerHTML = audSrc[i].name;
}

function notAnAudio() {
  alert('Адрес указан неверно или отсутствует доступ к файлу');
  audSrc.pop();
  i = 0;
  aud.src = audSrc[i].src;
  playNow.innerHTML = audSrc[i].name;
}

function audEnd() {
  aud.pause();
  i++;
  if (i >= audSrc.length) i = 0;
  aud.src = audSrc[i].src;
  playNow.innerHTML = audSrc[i].name;
  aud.play();
}

function getDuration() {
  const endTime = aud.duration;
}

document.getElementById('audAdd').addEventListener('click', addMus);
document.getElementById('myPlayer').addEventListener('error', notAnAudio);
document.getElementById('myPlayer').addEventListener('ended', audEnd);
document.getElementById('myPlayer').addEventListener('loadedmetadata', getDuration);

function audDuration() {
  const endTimeSec = Math.floor(aud.duration);
  audProgress.max = endTimeSec;
  playEndTime.innerHTML = `\t${Math.floor(endTimeSec / 60)}:${Math.floor((endTimeSec % 60) / 10)}${(endTimeSec % 60) % 10}`;
}

function audCurTime() {
  timerId = setInterval(() => {
    if (!paused) {
      playTime.innerHTML = `${Math.floor(sec / 60)}:${Math.floor((sec % 60) / 10)}${(sec % 60) % 10}`;
      audProgress.value = sec;
      sec += 1;
    }
  }, 1000);
}

function clearTime() {
  sec = 0;
  clearInterval(timerId);
}

aud.addEventListener('loadeddata', audDuration);
aud.addEventListener('play', audCurTime);
aud.addEventListener('ended', clearTime);

document.getElementById('audLeft').addEventListener('click', clearTime);
document.getElementById('audRight').addEventListener('click', clearTime);
document.getElementById('audAdd').addEventListener('click', clearTime);
