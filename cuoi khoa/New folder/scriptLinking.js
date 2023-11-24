function toggleFavorite(event) {
    const foodId = event.closest(".food1").getAttribute("data-food-id");

    if (event.classList.contains("favorited")) {
        event.innerHTML = "&#9825;";
        event.classList.remove("favorited");


    } else {
        event.innerHTML = "❤";
        event.classList.add("favorited");
        
    }
}
