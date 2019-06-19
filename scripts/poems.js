const poems = document.getElementsByClassName('poems');
const buttonPoem = document.getElementsByClassName('buttonPoem');

// function wakeUpPoems(num) {
//   if (poems[num].style.fontSize === '0px') {
//     poems[num].style.fontSize = 'inherit';
//   } else {
//     poems[num].style.fontSize = '0px';
//   }
// }

function cycle() {
  const len = buttonPoem.length;
  for (let i = 0; i < len; i++) {
    buttonPoem[i].onclick = function wakeUpPoems() {
      if (poems[i].style.fontSize === '0px') {
        poems[i].style.fontSize = 'inherit';
      } else {
        poems[i].style.fontSize = '0px';
      }
    };
  }
}


cycle();
