const itemCards = document.getElementById("item_cards");
const inputRating = document.querySelector(".inputbox input");
const searchBtn = document.querySelector(".searchbtn");


let userRating = 3.5;

async function rateItems() {
    const data = await fetch(`https://fakestoreapi.com/products`)
    const jsonData = await data.json();
    console.log(jsonData);

    jsonData.forEach(item => {
        console.log(item)
        if (item.rating.rate >= inputRating.value) {
            const itemCard = document.createElement("div");
            const itemImg = document.createElement("img");
            const itemName = document.createElement("p");
            const itemRate = document.createElement("p");
            itemImg.src = item.image;
            itemName.innerText = item.description;
            itemRate.innerHTML = item.rating.rate;

            itemCards.appendChild(itemCard);
            itemCard.appendChild(itemImg);
            itemCard.appendChild(itemName);
            itemCard.appendChild(itemRate);
            }
    })
}

function resetItems() {
    while(itemCards.firstChild)
    itemCards.removeChild(itemCards.firstChild);
}

searchBtn.addEventListener("click", () => {
    resetItems()
    rateItems()
})



