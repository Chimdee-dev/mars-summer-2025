const apiKey = "thewdb";
const container = document.getElementById("movie-container");
const searchBtn = document.getElementById("search-btn");
const Input = document.getElementById("movie-input");

// let keyword = Input.value.trim();

searchBtn.addEventListener('click', () => {
    const keyword = document.getElementById('movie-input').value.trim();
    if (keyword) {
        fetchMovies(keyword);
    }
});
fetchMovies("show");

function fetchMovies(keyword) {
    const URL = `https://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=${encodeURIComponent(keyword)}`;
    Promise.all([
        fetch(`${URL}&page=1`).then(res => res.json()),
        fetch(`${URL}&page=2`).then(res => res.json()),
        fetch(`${URL}&page=3`).then(res => res.json()),
    ])
        .then(result => {
            const allMovies = result
                .filter(r => r.Response === "True")
                .flatMap(r => r.Search);
            console.log(allMovies);
            if (allMovies.length === 0) {
                container.textContent = "Movie not found";
            }
            const randomMovies = getRandomMovies(allMovies, 12);
            displayMovies(randomMovies);
        })
}
function getRandomMovies(array, count) {
    const random = array.sort(() => 0.5 - Math.random());
    return random.slice(0, count);
}
function displayMovies(movies) {
    container.innerHTML = "";
    movies.forEach(element => {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        let img = element.Poster !== "N/A" ? element.Poster : '//';
        let description = element.Poster !== "N/A" ? 'image' : "Movies image doesn't exist";
        card.innerHTML = `
         <img src="${img}" alt="${description}">
        <h3>${element.Title}</h3>`;
        container.appendChild(card);
    });
}

Input.addEventListener('keypress', (e) => {
    const keyword = document.getElementById('movie-input').value.trim();
    if (e.key === "Enter") {
        fetchMovies(keyword);
    }
});