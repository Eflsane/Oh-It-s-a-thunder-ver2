let res1 = 0;
let res2 = 0;
function answer0() {
  const question1 = document.getElementsByName('que1');
  for (let i = 0; i < question1.length; i++) {
    switch (i) {
      case 0:
        if (question1[i].checked === true) res1++;
        break;
      case 1:
        if (question1[i].checked === true) res2++;
        break;
      case 2:
        if (question1[i].checked === true) res1 += 2;
        break;
      case 3:
        if (question1[i].checked === true) res2 += 2;
        break;
    // no default
    }
  }
  document.getElementsByClassName('quest1')[0].style.display = 'none';
  document.getElementsByClassName('quest2')[0].style.display = 'block';
}

function answer1() {
  const question1 = document.getElementsByName('que2');
  for (let i = 0; i < question1.length; i++) {
    switch (i) {
      case 0:
        if (question1[i].checked === true) res1++;
        break;
      case 1:
        if (question1[i].checked === true) res2++;
        break;
      case 2:
        if (question1[i].checked === true) res1 += 2;
        break;
      case 3:
        if (question1[i].checked === true) res2 += 2;
        break;
    // no default
    }
  }
  document.getElementsByClassName('quest2')[0].style.display = 'none';
  document.getElementsByClassName('quest3')[0].style.display = 'block';
}

function answer2() {
  const question1 = document.getElementsByName('que3');
  for (let i = 0; i < question1.length; i++) {
    switch (i) {
      case 0:
        if (question1[i].checked === true) res1++;
        break;
      case 1:
        if (question1[i].checked === true) res2++;
        break;
      case 2:
        if (question1[i].checked === true) res1 += 2;
        break;
      case 3:
        if (question1[i].checked === true) res2 += 2;
        break;
    // no default
    }
  }
  document.getElementsByClassName('quest3')[0].style.display = 'none';
  document.getElementsByClassName('quest4')[0].style.display = 'block';
}

function answer3() {
  const question1 = document.getElementsByName('que4');
  for (let i = 0; i < question1.length; i++) {
    switch (i) {
      case 0:
        if (question1[i].checked === true) res1++;
        break;
      case 1:
        if (question1[i].checked === true) res2++;
        break;
      case 2:
        if (question1[i].checked === true) res1 += 2;
        break;
      case 3:
        if (question1[i].checked === true) res2 += 2;
        break;
    // no default
    }
  }
  document.getElementsByClassName('quest4')[0].style.display = 'none';
  document.getElementById('begining').style.display = 'none';
  document.getElementsByClassName('result')[0].style.display = 'block';
  result();
}

function result() {
  const concl = document.getElementById('concl');
  if (res1 > res2) concl.innerHTML = 'Добро пожаловать в наш мир, посвящённый';
  else if (res1 < res2) {
    concl.innerHTML = 'Вы - ужасный человек! Идите к чёрту! <a href="www.googe.com"> Google </a>';
  }
  else concl.innerHTML = 'Вы, конечно же, добрый господин, но просим свалить отсюдова! <a href="www.googe.com"> Google </a>';
  console.log(res1);
  console.log(res2);
}
