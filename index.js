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


const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon'); 


window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme'); 
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none'; 
  }
});


moonIcon.onclick = function() {
  const body = document.body;
  body.classList.toggle('dark-theme');


  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
    sunIcon.style.display = 'block'; 
    moonIcon.style.display = 'none'; 
  } else {
    localStorage.setItem('theme', 'light');
    sunIcon.style.display = 'none'; 
    moonIcon.style.display = 'block'; 
  }
};


sunIcon.onclick = function() {
  const body = document.body;
  body.classList.remove('dark-theme');


  localStorage.setItem('theme', 'light');
  sunIcon.style.display = 'none'; 
  moonIcon.style.display = 'block'; 
};




