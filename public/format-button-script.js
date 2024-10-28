let cards = document.getElementsByClassName("postcard");
let aligned = false;

function alignItems() {
    for (let i = 0; i < cards.length; i++) {
        if(
            cards[i].classList.contains("postcard-animate-enter-done") || 
            cards[i].classList.contains("postcard-animate-enter") || 
            cards[i].classList.contains("postcard-animate-appear")
        ){
            cards[i].classList.add("align-animation-class");
        }
    }
    for (let i = 0; i < cards.length; i++) {
        if(cards[i].classList.contains("align-animation-class")){
            cards[i].style.transform = "rotate(0deg)";
        }
    }
}