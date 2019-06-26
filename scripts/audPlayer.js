const audSrc = [
  { src: 'https://cdndl.zaycev.net/421074/2257950/kai_rosenkranz_-_nature_1_theme_%28zaycev.net%29.mp3?ext.page=default', name: 'Kai Rosenkranz - Nature' },
  { src: 'https://www.ostmusic.org/?view=file&format=raw&id=12694', name: 'Dynamedion - Risen Farewell' },
  { src: 'https://cdnet2.mixmuz.ru/3782a83b9cd4/ed22ff22b0/ca1e41abd4b8bcaf841895681d51218a-ef0d409-11f59g34-1-178ae1727a07/XXXtentation%20%E2%80%94%20Numb.mp3', name: 'XXXTentation - Numb' },
  { src: 'https://cdndl.zaycev.net/124722/1345401/nervy_-_eyo_imya_%28zaycev.net%29.mp3?ext.page=default', name: 'Нервы - Её имя' },
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
let paused = true;

function audPlay() {
  aud.play();
}

function audStop() {
  aud.pause();
}

function audPrev() {
  audStop();
  i -= 1;
  if (i < 0) i = audSrc.length - 1;
  aud.src = audSrc[i].src;
  playNow.innerHTML = audSrc[i].name;
  audPlay();
}

function audNext() {
  audStop();
  i += 1;
  if (i >= audSrc.length) i = 0;
  aud.src = audSrc[i].src;
  playNow.innerHTML = audSrc[i].name;
  audPlay();
}

document.getElementById('audPlay').addEventListener('click', audPlay);
document.getElementById('audStop').addEventListener('click', audStop);
document.getElementById('audLeft').addEventListener('click', audPrev);
document.getElementById('audRight').addEventListener('click', audNext);

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
  audNext();
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
aud.addEventListener('loadeddata', audCurTime);
aud.addEventListener('ended', clearTime);
aud.addEventListener('play', () => {
  paused = false;
});
aud.addEventListener('pause', () => {
  paused = true;
});

document.getElementById('audLeft').addEventListener('click', clearTime);
document.getElementById('audRight').addEventListener('click', clearTime);
document.getElementById('audAdd').addEventListener('click', clearTime);
