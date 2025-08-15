async function getRecipe() {
    try {
        // API application programming interface 
        const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=s`;
        const result = await fetch(URL);
        const data = await result.json();
        console.log(data);

        const mealContainer = document.getElementById("meal-container");
        for (let i = 0; i < data.meals.length; i++) {
            console.log(`${data.meals[i].idMeal}: ${data.meals[i].strMeal}, ${data.meals[i].strMealThumb}`);
            let item = document.createElement("a");
            item.style.border = "2px solid black";
            item.classList.add("item");
            item.href = data.meals[i].strYoutube;
            item.target = "_blank";

            let h3 = document.createElement("h3");
            h3.textContent = data.meals[i].strMeal;

            let img = document.createElement("img");
            img.src = data.meals[i].strMealThumb;
            img.style.width = "400px";

            item.appendChild(h3);
            item.appendChild(img);
            mealContainer.appendChild(item);
        }
    } catch (error) {
        console.error(error);
    }
}
getRecipe();

