const overlay = document.getElementById('menu-div');
const hiddenDiv = document.getElementById('hidden-div');
const menuButton = document.getElementById('menu-button');
const closeIcon = document.getElementById('close-icon');


menuButton.addEventListener('click', () => {
  hiddenDiv.style.right = '0';
  menuButton.style.zIndex = '-1';
  closeIcon.style.display = 'block';
  
  if (overlay.style.display === 'none') {
    overlay.style.display = 'block';
  } else {
    overlay.style.display = 'block';
  }
});

closeIcon.addEventListener('click', () => {
  hiddenDiv.style.right = '-300px';
  overlay.style.display = 'none';
  menuButton.style.zIndex = '0';
});






