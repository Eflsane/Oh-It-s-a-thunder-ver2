const pics = document.getElementsByClassName('inPicsPage');
let isCreated = false;

for (let i = 0; i < pics.length; i++) {
  pics[i].onclick = function setBiggerImage() {
    if (!isCreated) {
      let newDiv = document.createElement('div');
      newDiv.id = `bigImgBlock`;
      // newDiv.style.position = 'relative';
      // newDiv.style.paddingRight = '100%';
      // newDiv.style.marginTop = '5%';
      // newDiv.style.zIndex = 4;
      let bigImg = new Image();
      bigImg.id = 'bigImg';
      bigImg.src = pics[i].src;
      // bigImg.style.position = 'absolute';
      // bigImg.style.width = '96%';
      // bigImg.style.border = '2px solid grey';
      let exitCross = document.createElement('span');
      exitCross.id = 'bigImgCross'
      exitCross.innerHTML = 'X';
      // exitCross.style.position = 'absolute';
      // exitCross.style.right = '5%';
      // exitCross.style.top = '5%';
      // exitCross.style.fontSize = '150%';
      // exitCross.style.color = 'red';
      // exitCross.style.cursor = 'pointer';
      // exitCross.style.zIndex = '5';
      exitCross.onclick = function close() {
        newDiv.remove();
        isCreated = false;
      }
      newDiv.appendChild(bigImg);
      newDiv.appendChild(exitCross);
      document.getElementsByClassName('main')[0].firstChild.after(newDiv);
      isCreated = true;
    }
  };
}
