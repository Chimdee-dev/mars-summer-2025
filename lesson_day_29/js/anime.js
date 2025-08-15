const container = document.getElementById('animeContainer');

// Website achaallah ued shuud ehnii 20 anime haruulna
window.addEventListener('DOMContentLoaded', loadInirialAnime);

async function loadInirialAnime() {
    container.innerHTML = `
    <p class="col-span-full text-gray-500">Ачааллаж байна...</p>`;
    try {
        const res = await fetch(`https://api.jikan.moe/v4/anime`);
        const data = await res.json();
        displayAnime(data.data.slice(0, 20));
    } catch (err) {
        console.error("Алдаа:", err);
        container.innerHTML = `
        <p class="text-red-500">Анхны өгөгдөл ачааллахад алдаа гарлаа</p>`;
    }
}

// Haih tovch daragdah ued 
async function searchAnime() {
    const keyword = document.getElementById(`searchInput`).value.trim();
    if (!keyword) return;
    container.innerHTML = `
    <p class="col-span-full text-gray-500">Хайлт хийгдэж байна</p>`;
    try {
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${keyword}`);
        const data = await res.json();
        displayAnime(data.data.slice(0, 10));
    } catch (err) {
        console.error('Алдаа:', err);
        container.innerHTML = `<p class="text-red-500">Хайлтаар өгөгдөл авахад алдаа гарлаа</p>`;
    }
}
function displayAnime(list) {
    container.innerHTML = "";
    list.forEach(anime => {
        const card = document.createElement("div");
        card.className = "bg-white rounded-lg shadow-md p-4 text-left";
        card.innerHTML = `
        <img src="${anime.images.jpg.image_url}" alt="${anime.title}"
        class="w-full h-48 object-cover rounded-md mb-4">
        <h2 class="font-bold text-lg mb-1" >${anime.title}</h2>
        <p class="text-sm text-gray-700 mb-1"><strong>Үнэлгээ:</strong>${anime.score ?? "N/A"}</p>
        <p>Type: ${anime.type} Episodes: ${anime.episodes}</p>`;
        container.appendChild(card);
    });
} 

let searchInput = document.getElementById("searchInput");

searchInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        searchAnime();
    }
});