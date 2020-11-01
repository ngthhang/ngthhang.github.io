$(document).ready(function () {
    var wishContainer = document.getElementsByClassName("wishes-containter");
    var wave = document.getElementsByClassName("wave");
    var page2 = document.getElementsByClassName("page-2")[0];
    var page3 = document.getElementsByClassName("page-3")[0];
    var pageWrapper1 = document.getElementsByClassName("page-wrapper-1")[0];
    var pageWrapper2 = document.getElementsByClassName("page-wrapper-2")[0];
    
    wave[0].addEventListener("mouseenter", function () {
        wishCard[currentValue - 1].classList.add("text-focus-in");
        wishCard[currentValue - 1].style.display = 'flex';
    })
    
    wishContainer[0].addEventListener("mouseenter", function () {
        wishCard[currentValue - 1].classList.add("text-focus-in");
        wishCard[currentValue - 1].style.display = 'flex';
    }) 
    
    // FLIP BOOK 
    page2.addEventListener("click", function (event) {
        if (page3.classList.contains('flip-page-3')) {
            page3.classList.remove("flip-page-3");
            page3.classList.remove("fade-out");
        }
        page2.classList.add("fade-out");
        page2.classList.add("flip-page-2");
        setTimeout(function () {
            pageWrapper1.style.display = 'none';
            pageWrapper2.style.display = 'flex';
        },1000);
    })

    page3.addEventListener("click",function(){
        if(page2.classList.contains('flip-page-2')){
            page2.classList.remove("flip-page-2");
            page2.classList.remove("fade-out");
        }
        page3.classList.add("fade-out");
        page3.classList.add("flip-page-3");
        setTimeout(function () {
            pageWrapper2.style.display = 'none';
            pageWrapper1.style.display = 'flex';
        }, 1000);
    })

});

var currentValue = 1;
var wishCard = document.getElementsByClassName("wish-card");

function handleChangeRadio(number) {
    let nextValue = number;
    if (nextValue != currentValue) {
        currentValue = nextValue;
        let currentCard = wishCard[currentValue - 1];
        for (let i = 0; i < 3; i++) {
            wishCard[i].style.display = 'none';
            wishCard[i].classList.remove("text-focus-in");
        }
        currentCard.style.display = 'flex';
        currentCard.classList.add("text-focus-in");
    }
}