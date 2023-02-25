const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button onclick= "loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
    Details
  </button>
        </div>           
        `
        mealsContainer.appendChild(mealDiv);
    })
}

const searchButton = () => {
    const searchText = document.getElementById('input-field').value;
    console.log(searchText);
    loadMeals(searchText);

}
const loadMealDetail = idMeal =>{
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then (data => displayMealDetails(data.meals[0]));  
}

const displayMealDetails = meal => {
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
    const mealsDetails = document.getElementById('mealDetailsBody');
    mealsDetails.innerHTML = `
    <img class = "img-fluid" src = "${meal.strMealThumb}">
    <section>
    <p style = "color:green; font-size:25px;" class = "text-center mt-0">item is available...</p> <br>
    <div class= "text-center">
    <h3 style = "color:red">Price:$99</h3>
    <h3>Delivery Time: 35min(approx.)</h3>
    </div>
    </section>  `
}
function orderNowBtn(){
    window.location.href = "confirm.html";
}
loadMeals('fish');
