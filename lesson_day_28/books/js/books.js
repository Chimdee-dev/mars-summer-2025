const booksNav = document.getElementById("books-nav");
const books = document.getElementById("books");
const todayBooks = document.getElementById("today-books");
const viewall = document.getElementById("view");


async function fetchbooks() {
    try {
        // API application programming interface 
        const URL = `https://openlibrary.org/search.json?q=book`;
        const result = await fetch(URL);
        const data = await result.json();
        console.log(data);
        let randomBooks = getRandomBooks(data.docs, 10)

        for (let i = 0; i < randomBooks.length; i++) {
            console.log(`${randomBooks[i].title}, ${randomBooks[i].author_name}`);
            let item = document.createElement("div")
            let img = document.createElement("img");
            img.src = `https://covers.openlibrary.org/b/id/${randomBooks[i].cover_i}-M.jpg`;
            // img.style.width = "400px";

            let author_name = document.createElement("div")
            author_name.textContent = randomBooks[i].author_name[0];
            let title = document.createElement("div")
            title.textContent = randomBooks[i].title;


            item.appendChild(img);
            item.appendChild(title);
            item.appendChild(author_name);
            todayBooks.appendChild(item);
        }
    } catch (error) {
        console.error(error);
    }
}
fetchbooks();


function getRandomBooks(array, count) {
    const random = array.sort(() => 0.5 - Math.random());
    return random.slice(0, count);
}

document.getElementById("view").addEventListener("click", function () {
    window.location.href = "https://openlibrary.org";
});



