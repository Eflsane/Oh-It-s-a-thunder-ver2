function prayGods() {
  const pray = document.getElementsByClassName('prayInsides')[0];
  if (pray.id === 'inActivePray') {
    pray.id = 'activePray';
  } else {
    pray.id = 'inActivePray';
  }
}

document.getElementsByClassName('prayActivation')[0].addEventListener('click', prayGods);

function prayNow() {
  alert('Ваша молитва услышана! \nВозрадуйся посвящённый!');
}

document.getElementsByClassName('pray')[0].addEventListener('click', prayNow);
