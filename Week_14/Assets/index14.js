function myFunction()
{
    let elem=document.getElementById('elem');
    elem.style.background='red';
};

function myotherFunction()
{
    let elem=document.getElementById('elem1');
    elem.style.background='green';
};
function myFunction2()
{

let customerName = document.getElementById('name').value;

alert("Hello"+","+customerName);

};

function plusFunction()
{
    let firstNumber = document.getElementById('firstnumber').value;
    let secondNumber = document.getElementById('secondnumber').value;
    alert(Number(firstNumber) + Number(secondNumber));
};
function minusFunction()
{
    let firstNumber = document.getElementById('firstnumber').value;
    let secondNumber = document.getElementById('secondnumber').value;
    alert(Number(firstNumber) - Number(secondNumber));
};
function multiFunction()
{
    let firstNumber = document.getElementById('firstnumber').value;
    let secondNumber = document.getElementById('secondnumber').value;
    alert(Number(firstNumber) * Number(secondNumber));
};
function divFunction()
{
    let firstNumber = document.getElementById('firstnumber').value;
    let secondNumber = document.getElementById('secondnumber').value;
    alert(Number(firstNumber) / Number(secondNumber));
};

let slideIndex=1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }