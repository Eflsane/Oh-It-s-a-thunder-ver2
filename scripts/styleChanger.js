const mainStyle = document.getElementById('mainStyle');
const newStyle = document.getElementById('newStyle');
let style = 0;

style = Number(localStorage.getItem('style'));
if (style === 1) {
  mainStyle.href = 'styles/light-side.css';
  style = 1;
} else {
  mainStyle.href = 'styles/index.css';
  style = 0;
}

function changeTime() {
  if (style === 0) {
    mainStyle.href = 'styles/light-side.css';
    style = 1;
  } else {
    mainStyle.href = 'styles/index.css';
    style = 0;
  }
  localStorage.setItem('style', style);
}

newStyle.addEventListener('click', changeTime);
