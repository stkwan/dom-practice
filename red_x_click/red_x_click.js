// My solution
document.addEventListener("DOMContentLoaded", event => {
  document.addEventListener("mousemove", event => {
    let positionX = event.clientX;
    let positionY = event.clientY;
    let xObject = document.querySelector(".x");
    xObject.style.left = String(positionX) + 'px';
    xObject.style.top = String(positionY) + 'px';
  });
  
  document.addEventListener("keyup", event => {
    let getNewColor = function(key) {
      if (key === 'b') {
        return 'blue';
      } else if (key === 'g') {
        return 'green';
      } else if (key === 'r') {
        return 'red';
      }
    };
    
    let currentKey = String(event.key);
    let newColor = getNewColor(currentKey);
    
    document.querySelector('.horizontal').style.background = newColor;
    document.querySelector('.vertical').style.background = newColor;
  });
})