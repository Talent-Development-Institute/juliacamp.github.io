var r_text = new Array();
var b_text = new Array();

r_text[0] = "Don't waste another summer";
r_text[1] = "Start your data science journey";
r_text[2] = "Get started with data science";

b_text[0] = "Apply Now";
b_text[1] = "Apply Today";
b_text[2] = "Get Started";


var i = Math.floor(3 * Math.random())
document.getElementById('adTitle').innerHTML = r_text[i];
document.getElementById('adBtn').innerHTML = b_text[i];
document.getElementById('adDesc').innerHTML = "JuliaCamp is designed and advised by the inventors of Julia <br> and the best in the business";