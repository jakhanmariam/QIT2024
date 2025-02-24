let allMeals = [];

async function fetchMeals() {
    try {
        const response = await fetch('meals.json');
        const data = await response.json();
        allMeals = data.meals;
        displayMeals(allMeals)
    } catch (error) {
        console.error("tagamdardy alu kezinde qate oryn aldy", error);
        
    }
}


function displayMeals(meals) {
    const container = document.getElementById('container');
    container.innerHTML = '';

    meals.forEach(meal => {
        const mealCard = `
        <div class = "card" data-name="${meal.strMeal.toLowerCase()}">
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <div class="info">
            <div class="icon">
                <img src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                ${meal.strTime} minute
            </div>
            <div class="icon">
            <img src="https://cdn-icons-png.flaticon.com/512/5356/5356892.png"
            ${meal.strCalories} ccal
            </div>
        </div>
    </div>
</div>
`;


container.innerHTML += mealCard;
    });
}







document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search');
    const recipeCards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();

        recipeCards.forEach(function(card) {
            const recipeTitle = card.querySelector('p').textContent.toLowerCase();
            if (recipeTitle.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});