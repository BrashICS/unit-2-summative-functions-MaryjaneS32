/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);
document.getElementById("rect_prism_volume").addEventListener("click", rect_prism_volume)

/*** Functions ***/

// Round to the nearest `decimals` number of decimals
function round(value, decimals) {
    return Math.round(value * 10**decimals) / 10**decimals;
}

// Round to the user's number of decimals
function round_user(value) {
    // Get the number of decimals from the "rounding" box
    let d = Number(document.getElementById("rounding").value)

}

// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {

}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {

}


function delta(a,b){
let awnser = a - b
return awnser 
}


function slope(x1, y1, x2, y2){
let xt = (delta(x1, x2))
let yt = (delta(y1, y2))
return xt / yt 
}


function average(n1, n2){
   let average= (n1, n2 / 2)
   console.log(average) 
}


function round_user(value) {
   let dec = Number(document.getElementById("rounding").value)
   return Math.round(value * 10**dec) / 10**dec;
}

function length(x1, y1, x2, y2) {
let dx = (delta(x2, x1)) 
let dy = (delta(y2, y1)) 
let distance = Math.sqrt(dx**2 + dy**2)
return distance
}

function rect_prism_volume() {
let length = Number(document.getElementById("length").value)
let width = Number(document.getElementById("width").value)
let height = Number(document.getElementById("height").value)
document.getElementById("div_rect_volume").textContent= `The awnser is ${width*height*length}`
}