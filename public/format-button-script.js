const cards = document.getElementsByClassName("postcard");
let aligned = false;

function alignItems() {
    //all need to be animated at the same time

    //DOESNT WORK RIGHT
    for (let i = 0; i < cards.length; i++) {
        if(cards[i].classList.contains("postcard-animate-enter-done")){
            cards[i].classList.add("align-animation-class");
        }
    }
    for (let i = 0; i < cards.length; i++) {
        if(cards[i].classList.contains("align-animation-class")){
            cards[i].style.transform = "rotate(0deg)";
        }
    }
}