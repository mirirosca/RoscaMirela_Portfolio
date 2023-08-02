const btnOne = document.getElementById("btn-one");
const btnTwo = document.getElementById("btn-two");
const btnThree = document.getElementById("btn-three");
const prjOne = document.getElementById("portfolio-project");
const prjTwo = document.getElementById("javascript-project");
const prjThree = document.getElementById("graphic-project");

btnOne.onclick = function(){
  prjOne.style.display = "flex";
};

btnTwo.onclick = function(){
  prjTwo.style.display = "flex";
};

btnThree.onclick = function(){
  prjThree.style.display = "flex";
};

const backArrowOne = document.getElementById("back-home-one");
const backArrowTwo = document.getElementById("back-home-two");
const backArrowThree = document.getElementById("back-home-three");

backArrowOne.onclick = function() {
  prjOne.style.display = "none";
}

backArrowTwo.onclick = function() {
  prjTwo.style.display = "none";
}

backArrowThree.onclick = function() {
  prjThree.style.display = "none";
}


