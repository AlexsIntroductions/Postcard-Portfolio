const cards = document.getElementsByClassName("postcard");
let aligned = false;

function alignItems() {
    //all need to be animated at the same time
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add("align-animation-class");
    }
    setTimeout(() => {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.transform = "rotate(0deg)";
        }
    }, 1000);
}

function combineItems() {
    alignItems();
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add("combine-animation-class");
    }
}