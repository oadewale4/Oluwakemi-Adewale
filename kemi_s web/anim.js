
var no = 0;
var elem = document.getElementsByClassName("bgroup");
var element = document.getElementsByClassName("bar");
var nav = document.getElementsByClassName("nav");

var body = document.getElementsByTagName("body");
body[0].addEventListener("click",remove,true)

elem[0].addEventListener("click",clock)

function clock(){
    console.log(no);
     if (no == 0){
        animateBar();
        no=1
     }
     else{
        toNormal();
        no =0
     }
}

function animateBar(){
    element[0].style.transform = "rotate(45deg)";
    element[0].style.position = "relative"; 
    element[0].style.top = "2px"; 
    element[0].style.margin = "0";

    element[2].style.transform = "rotate(-45deg)";
    element[2].style.position = "relative"; 
    element[2].style.bottom = "2px"; 
    element[2].style.margin = "0";

    element[1].style.display = "none"; 

    nav[0].style.display = "flex";
    nav[0].style.height = "340px";
}

function toNormal(){
    element[0].style.transform = "rotate(0)";
    element[0].style.position = "static";  
    element[0].style.margin = "5px";

    element[2].style.transform = "rotate(0)";
    element[2].style.position = "static";  
    element[2].style.margin = "5px";

    element[1].style.display = "block";
    element[1].style.margin = "5px";

    nav[0].style.height = "0px";
    nav[0].style.display = "none";
}
function remove(){

    if (window.innerWidth < 600){
       toNormal();
    }

    console.log(window.innerWidth);
}


