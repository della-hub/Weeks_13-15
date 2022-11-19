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