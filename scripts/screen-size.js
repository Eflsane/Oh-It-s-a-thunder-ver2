const height = window.innerHeight;

function detectHeight() {
  document.getElementsByClassName('everething')[0].style.maxHeight = `${height - 20}px`;
}

detectHeight();
