const cards = document.getElementsByClassName("postcard");
let aligned = false;

function alignItems(){
    //all need to be animated at the same time
    for(let i = 0; i < cards.length; i++){
        cards[i].style.transform = "rotate(0deg)";
    }
    aligned = true;
}

function combineItems(){
    alignItems();
    for(let i = 0; i < cards.length; i++){
        cards[i].style.boxShadow = "0px -5px 25px 5px black"
        console.log(cards[i].style.boxShadow)
        cards[i].classList.add("combine-animation-class");
    }
    
}