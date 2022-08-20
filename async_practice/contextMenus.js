document.addEventListener('DOMContentLoaded', (event) => {
  let main = document.querySelector('main');
  let sub = document.querySelector('section');
  
  main.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    alert('main!');
  });
  
  sub.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    event.stopPropagation();
    alert('sub!');
  });
});
