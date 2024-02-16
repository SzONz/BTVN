const wishlistData = localStorage.getItem("wishlist");
let reloadOnce = false;
if (wishlistData) {
    const wishlistItems = JSON.parse(wishlistData);
    wishlistItems.forEach(item => {
        const container = document.createElement("div");
        container.classList.add("wishlistItem");

        const itemImage = document.createElement("img");
        itemImage.setAttribute("src", item.image);

        const itemName = document.createElement("h3");
        itemName.textContent = item.name;

        const itemPrice = document.createElement("div");
        itemPrice.classList.add("itemPrice")
        itemPrice.innerHTML = "<p>" + "<span>" + "from " + "</span>" + item.price + "<span>" + " per night" + "</span>" + "</p>";

        const itemCurrentPrice = document.createElement("p");
        itemCurrentPrice.textContent = "1 night: " + item.price;

        const itemAdd = document.createElement("button");
        itemAdd.textContent = "Add";
        itemAdd.classList.add("add");
        itemAdd.addEventListener("click", function() {
            const currentNights = parseInt(itemCurrentPrice.textContent.split(" ")[0]);
            const itemPricePerNight = parseFloat(item.price.replace("$", ""));
            const newNights = currentNights + 1;
            const totalPrice = newNights * itemPricePerNight;
            itemCurrentPrice.textContent = newNights + " nights: $" + totalPrice.toFixed(2);
            itemCancel.style.display = "inline";
        });

        const itemCancel = document.createElement("button");
        itemCancel.textContent = "Cancel";
        itemCancel.classList.add("cancel");
        itemCancel.style.display = "none";
        itemCancel.addEventListener("click", function() {
            itemCurrentPrice.textContent = "1 night: " + item.price;
            itemCancel.style.display = "none";
        });

        const itemWishlist = document.createElement("div");
        itemWishlist.classList.add("wishlsitButton");
        itemWishlist.innerHTML = '<i class="fa-solid fa-heart"></i>';
        itemWishlist.addEventListener("click", function() {
            wishlisted(this);
        });
        function wishlisted(button) {
            button.classList.toggle("wishlisted");
            wishlistItems.splice(item, 1);
            if (wishlistItems.length === 0) {
                localStorage.removeItem("wishlist");
            } else {
                localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
            }
            container.remove();
        }

        container.appendChild(itemImage);
        container.appendChild(itemName);
        container.appendChild(itemPrice);
        container.appendChild(itemCurrentPrice);
        container.appendChild(itemAdd);
        container.appendChild(itemCancel);
        container.appendChild(itemWishlist);

        document.querySelector(".listContainer").appendChild(container);
    });
} else{
    const empty = document.createElement("h2");
    empty.textContent = "Your list is empty";
    document.querySelector(".listContainer").appendChild(empty);
}
