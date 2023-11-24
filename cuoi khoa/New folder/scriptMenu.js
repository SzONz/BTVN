document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.querySelector(".overlay");

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;
        
        overlay.style.backgroundPosition = `center ${scrollPosition * 0.3}px`;
    });
});

function showFood(foodClass) {
    var foodSections = document.querySelectorAll('.food-section');
    foodSections.forEach(function (section) {
        section.style.display = 'none';
    });

    var selectedFood = document.getElementById(foodClass);
    selectedFood.style.display = 'flex';
}















//     var selectedButton = document.querySelector('.recipe[data-food="' + foodClass + '"]');
//     selectedButton.style.backgroundColor = '#c8a97e';
//     selectedButton.style.color = 'white'; 
//     selectedButton.style.fontSize = '18px';
// }




// function filterButtons() {
//     const searchInput = document.getElementById('recipe-search');
//     const keyword = searchInput.value.toLowerCase();
//     const buttons = document.querySelectorAll('.recipe');

//     buttons.forEach(button => {
//         const food = button.getAttribute('data-food').toLowerCase();
//         if (food.includes(keyword)) {
//             button.style.display = 'block';
//         } else {
//             button.style.display = 'none';
//         }
//     });
// }
