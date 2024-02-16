document.querySelector(".filter").addEventListener("click", function(){
    document.querySelector(".filterPopup").classList.add("working");
    document.querySelector(".overlay").style.display = "block";
    document.body.style.overflow = 'hidden'
})

document.querySelector(".filterPopup .filterCloseButton").addEventListener("click", function(){
    document.querySelector(".filterPopup").classList.remove("working");
    document.querySelector(".overlay").style.display = "none";
    document.body.style.overflow = 'auto'
})

function updateCount(action, countId) {
    let countElement = document.getElementById(countId);
    let count = parseInt(countElement.textContent);
    if (action === 'increment') {
        countElement.textContent = count + 1;
    } else if (action === 'decrement' && count > 0) {
        countElement.textContent = count - 1;
    }
}

document.getElementById('minusAdults').addEventListener('click', function() {
    updateCount('decrement', 'countAdults');
});

document.getElementById('plusAdults').addEventListener('click', function() {
    updateCount('increment', 'countAdults');
});

document.getElementById('minusBathrooms').addEventListener('click', function() {
    updateCount('decrement', 'countBathrooms');
});

document.getElementById('plusBathrooms').addEventListener('click', function() {
    updateCount('increment', 'countBathrooms');
});

document.getElementById('minusChildren').addEventListener('click', function() {
    updateCount('decrement', 'countChildren');
});

document.getElementById('plusChildren').addEventListener('click', function() {
    updateCount('increment', 'countChildren');
});

document.getElementById('minusBedrooms').addEventListener('click', function() {
    updateCount('decrement', 'countBedrooms');
});

document.getElementById('plusBedrooms').addEventListener('click', function() {
    updateCount('increment', 'countBedrooms');
});

let ocean = {
    data:[
        {
            name: "GORGEOUS OCEAN FRONT 5 BEDROOM WITH POOL, AC, GAME ROOM AND SLEEPS 14",
            price: "$1,172",
            image: "/web/img/rent1.jpg",
            star: "4.8",
            size: "465",
            type: "Villa"
        },
        {
            name: "WFH IN PARADISE BEACHFRONT HAUULA GETAWAY!",
            price: "$237",
            image: "/web/img/rent2.jpg",
            star: "4",
            size: "147",
            type: "House"
        },
        {
            name: "EXCEPTIONAL BEACH / OCEAN FRONT HOME PERMIT STR19-1019",
            price: "$648",
            image: "/web/img/rent3.jpg",
            star: "4.3",
            size: "242",
            type: "Villa"
        },
        {
            name: "OCEAN FRONT WITH ROOF TOP DECK, BIKES, PADDLE BOARDS. .. EV CHARGING OUTLET",
            price: "$726",
            image: "/web/img/rent4.jpg",
            star: "3.9",
            size: "204",
            type: "House"
        },
        {
            name: "EUROPEAN LUXURY BY THE BEACH! FANTASTIC OCEAN VIEWS!",
            price: "$737",
            image: "/web/img/rent5.jpg",
            star: "4.5",
            size: "288",
            type: "House"
        },
        {
            name: "LUXURY 3 STORY BEACH HOUSE ON THE SAND IN NORTH LAGUNA BEACH.",
            price: "$972",
            image: "/web/img/rent6.jpg",
            star: "5",
            size: "372",
            type: "House"
        },
    ]
}

function createStarRating(rating) {
    let stars = '';
    const fullStar = '<i class="fa-solid fa-star"></i>';
    const halfStar = '<i class="fa-solid fa-star-half"></i>';

    const fullStarsCount = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStarsCount; i++) {
        stars += fullStar;
    }

    if (hasHalfStar) {
        stars += halfStar;
    }

    return stars;
}

for (let item of ocean.data){

    let container = document.createElement("div");
    container.classList.add("item");

    let image = document.createElement("div");
    image.classList.add("itemIMG")
    
    let img = document.createElement("img")
    img.setAttribute("src", item.image)
    image.appendChild(img)
    container.appendChild(image)

    let wishlist = document.createElement("div")
    wishlist.classList.add("wishlsitButton")
    wishlist.addEventListener("click", function() {
        wishlisted(this);
    });
    function wishlisted(button) {
        button.classList.toggle("wishlisted");
        const itemName = item.name;
        const itemImage = item.image;
        const itemPrice = item.price;
        let wishlist = localStorage.getItem("wishlist");
        if (!wishlist) {
            wishlist = [];
        } else {
            wishlist = JSON.parse(wishlist);
        }
    
        const index = wishlist.findIndex(wish => wish.name === itemName);
        if (index !== -1) {
            wishlist.splice(index, 1);
        } else {
            wishlist.push({ name: itemName, image: itemImage, price: itemPrice }); // Add item to wishlist
        }
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
    const wishlistButtons = document.querySelectorAll(".wishlistButton");
    wishlistButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            const item = ocean.data[index];
            wishlisted(this, item);
        });
    });
    wishlist.innerHTML = '<i class="fa-solid fa-heart"></i>';
    container.appendChild(wishlist);

    let price = document.createElement("div");
    price.classList.add("itemPrice")
    price.innerHTML = "<p>" + "<span>" + "from " + "</span>" + item.price + "<span>" + " per night" + "</span>" + "</p>";
    container.appendChild(price)

    let desc = document.createElement("div");
    desc.classList.add("itemDesc");
    let size = document.createElement("span");
    size.textContent = item.size + "m² " + item.type;
    let title = document.createElement("h5");
    title.textContent = item.name;
    let rating = document.createElement("p");
    rating.innerHTML = "<p>" + item.star + "</p>" + createStarRating(parseFloat(item.star));
    let viewDealButton = document.createElement("button");
    viewDealButton.classList.add("deal");
    viewDealButton.textContent = "View Deal";
    desc.appendChild(size);
    desc.appendChild(title);
    desc.appendChild(rating);
    desc.appendChild(viewDealButton);
    container.appendChild(desc);    

    document.querySelector(".itemContainer5").appendChild(container)
}

let wander = {
    data:[
        {
            name: "SILVER SAGE - WORLD CLASS SEDONA MOUNTAIN VIEWS AND HOT TUB",
            price: "$503",
            image: "/web/img/rent7.jpg",
            star: "4.9",
            size: "195",
            type: "House"
        },
        {
            name: "LUXURY VILLA WITH GORGEOUS RED ROCK VIEWS!",
            price: "$142",
            image: "/web/img/rent8.jpg",
            star: "3.3",
            size: "147",
            type: "Villa"
        },
        {
            name: "SPECTACULAR SEDONA, SUNRISE TO SUNSET!",
            price: "$431",
            image: "/web/img/rent9.jpg",
            star: "3.5",
            size: "195",
            type: "House"
        },
        {
            name: "AMAZING RED ROCK VIEWS, 4 EN-SUITES, 1-STORY, ROOFTOP TERRACE & GAMEROOM.",
            price: "$663",
            image: "/web/img/rent10.jpg",
            star: "4.5",
            size: "321",
            type: "House"
        },
        {
            name: "OPEN THE DOOR TO YOUR MONTANA ADVENTURE!",
            price: "$536",
            image: "/web/img/rent11.jpg",
            star: "4.6",
            size: "186",
            type: "House"
        },
        {
            name: "BRAND NEW REMODELED HOME WITH STUNNING VIEWS!",
            price: "$297",
            image: "/web/img/rent12.jpg",
            star: "5",
            size: "133",
            type: "House"
        },
    ]
}


for (let item of wander.data){

    let container = document.createElement("div");
    container.classList.add("item");

    let image = document.createElement("div");
    image.classList.add("itemIMG")
    
    let img = document.createElement("img")
    img.setAttribute("src", item.image)
    image.appendChild(img)
    container.appendChild(image)

    let wishlist = document.createElement("div")
    wishlist.classList.add("wishlsitButton")
    wishlist.addEventListener("click", function() {
        wishlisted(this);
    });
    function wishlisted(button) {
        button.classList.toggle("wishlisted");
        const itemName = item.name;
        const itemImage = item.image;
        const itemPrice = item.price;
        let wishlist = localStorage.getItem("wishlist");
        if (!wishlist) {
            wishlist = [];
        } else {
            wishlist = JSON.parse(wishlist);
        }
    
        const index = wishlist.findIndex(wish => wish.name === itemName);
        if (index !== -1) {
            wishlist.splice(index, 1);
        } else {
            wishlist.push({ name: itemName, image: itemImage, price: itemPrice }); // Add item to wishlist
        }
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
    const wishlistButtons = document.querySelectorAll(".wishlistButton");
    wishlistButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            const item = ocean.data[index];
            wishlisted(this, item);
        });
    });
    wishlist.innerHTML = '<i class="fa-solid fa-heart"></i>';
    container.appendChild(wishlist);

    let price = document.createElement("div");
    price.classList.add("itemPrice")
    price.innerHTML = "<p>" + "<span>" + "from " + "</span>" + item.price + "<span>" + " per night" + "</span>" + "</p>";
    container.appendChild(price)

    let desc = document.createElement("div");
    desc.classList.add("itemDesc");
    let size = document.createElement("span");
    size.textContent = item.size + "m² " + item.type;
    let title = document.createElement("h5");
    title.textContent = item.name;
    let rating = document.createElement("p");
    rating.innerHTML = "<p>" + item.star + "</p>" + createStarRating(parseFloat(item.star));
    let viewDealButton = document.createElement("button");
    viewDealButton.classList.add("deal");
    viewDealButton.textContent = "View Deal";
    desc.appendChild(size);
    desc.appendChild(title);
    desc.appendChild(rating);
    desc.appendChild(viewDealButton);
    container.appendChild(desc);    

    document.querySelector(".itemContainer6").appendChild(container)
}