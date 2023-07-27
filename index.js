// let count=0;

// function increment(){
// count=count+1
// value.innerHTML=count
// }
// let value=document.getElementById("demo")
// ==========================================
// function save(){
//     let countStr=count + "-"
//     display.textContent+=countStr
//     value.textContent=0
//     count=0

// }
// let display=document.getElementById("demo2")

// ==========================================================
// // let firstName="mohammed"
// // let secondName="nihal"

// // let fullName=firstName+","+secondName;
// // console.log(fullName);

// // let value=document.getElementById("demo3")

// // let message="hi"
// // let firstName="mohammednihal"

// // value.innerHTML=message+firstName;
// ===================================================================

//'hi nihal,good morning !'

// let message="hi"
// let firstName="nihal"
// let day="good morning"


// function Display(){
// console.log(message +" "+ firstName+","+day+"!");
// }
// Display()/
// ------------------------------------------------

// let myAmount=3

// function addAmount3(){
//     myAmount +=3
// }

// function minAmount1(){
//     myAmount-=1
// }

// addAmount3()
// addAmount3()
// addAmount3()
// minAmount1()
// minAmount1()
// console.log(myAmount);
// -----------------------------------------------------

// let buyItem=document.getElementById("buys")

// function itemBuy(){
//     buyItem.textContent="Somethhing went wrong please try again later"

// }

// -----------------------------------------------------------------
let num1=8
let num2=10

let number1=document.getElementById("num1")
let number2=document.getElementById("num2")
let sum=document.getElementById("sum")

function add(){
    let result=num1+num2
    sum.textContent="sum :"+result

}
function mull(){
    let result=num1*num2
    sum.textContent="sum :"+result

}
function div(){
    let result=num1/num2
    sum.textContent="sum :"+result

}
function sub(){
    let result=num1-num2
    sum.textContent="sum :"+result

}