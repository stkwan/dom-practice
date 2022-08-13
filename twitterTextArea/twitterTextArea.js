document.addEventListener("DOMContentLoaded", event => {
  let textAreaEle = document.querySelector("textarea");
  let paragraph = document.querySelector("p");
  let button = document.querySelector('button');
  paragraph.textContent = "140 characters remaining";
  
  textAreaEle.addEventListener('keyup', event => {
    let wordCount = textAreaEle.value.length;
    let charsRemaining = 140 - wordCount;
    
    paragraph.textContent = `${charsRemaining} characters remaining`;
    
    if (charsRemaining < 0) {
      textAreaEle.classList.add('invalid');
      button.disabled = true;
    } else {
      textAreaEle.classList.remove('invalid');
      button.disabled = false;
    }
  });
  
})