const hamb = document.getElementById('hamb');
const menuItem = document.getElementsByClassName('menuItem');
let flag = false;

function showItem() {
  let i;
  if (!flag) {
    for (i = 0; i < menuItem.length; i++) {
      if (i > 1) menuItem[i].style.display = 'block';
    }
    flag = true;
    hamb.innerHTML = 'ПИРОЖОК';
  } else {
    for (i = 0; i < menuItem.length; i++) {
      if (i > 1) menuItem[i].style.display = 'none';
    }
    flag = false;
    hamb.innerHTML = 'П';
  }
}

hamb.addEventListener('click', showItem);

if (document.body.clientWidth >= 1126) {
  let i;
  for (i = 0; i < menuItem.length; i++) {
    if (i !== 1) menuItem[i].style.display = 'inline-block';
  }
}
