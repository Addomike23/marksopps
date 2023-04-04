// declearing variabes

let count = 0
let subtract = document.getElementById("subtract");
let addition = document.getElementById("addition");
let display = document.getElementById("number");

function minus() {
    count -= 1
    display.innerText = count
   if(count < 0){
    display.style.color = "blue" 
    console.log(count)
   }
}

function add(){
    count += 1
    display.innerText = count
   if(count >= 1){
    display.style.color = "green"
    console.log(count);
   }
}

// changing images 

let img = document.querySelector("#big-img");
let bTn1 = document.querySelector("#btn1");
let bTn2 = document.querySelector("#btn2");
let bTn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");

bTn1.addEventListener('click', () =>{
img.src = "./images/image-product-1.jpg";
} )

bTn2.addEventListener('click', () =>{
    img.src = "./images/image-product-2.jpg"
})

bTn3.addEventListener('click', () =>{
    img.src = "./images/image-product-3.jpg"
})

btn4.addEventListener('click', () =>{
    img.src = "./images/image-product-4.jpg"
})