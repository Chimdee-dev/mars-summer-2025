document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.querySelector("#name-input");
    const genderInput = document.querySelector("#gender-select");
    const ageInput = document.querySelector("#age-input");
    const addBtn = document.querySelector("#add-profile-btn");
    const profileList = document.querySelector("#profile-list");
    const totalProfiles = document.querySelector("#total-profiles");
    const currentDate = document.querySelector("#current-date");

    let editingProfileItem = null;


    // event listeners
    addBtn.addEventListener("click", addOrEdit);
    nameInput.addEventListener("keypress", handleKeyPress);
    genderInput.addEventListener("keypress", handleKeyPress);
    ageInput.addEventListener("keypress", handleKeyPress);

    // enter daranguut nemegddeg 
    function handleKeyPress(e) {
        if (e.key === "Enter") {
            addOrEdit();
        }
    }
    // add
    function createProfile(name, gender, age) {

        if (!name || !gender || !age) {
            alert(" Бүх талбарыг бөглөнө үү");
        }
        if (isNaN(age) || parseInt(age) < 1 || parseInt(age) > 120) {
            alert("Насаа зөв бичнэ үү (18-40)");
            return;
        }
        console.log('clicked');

        const li = document.createElement("li");
        li.setAttribute('data-id', Date.now().toString());

        li.innerHTML = ` 
        
       <div class="profile-info">
    <span class="profile-name">${name}</span>
    <span class="profile-gender">${gender}</span>
    <span class="profile-age">${age}</span>
        </div>
        <div class="actions">
    <button class="edit-btn"><i class="fas fa-edit"></i></button>
    <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
        </div>
        `;
        const editBtn = li.querySelector('.edit-btn');
        editBtn.addEventListener('click', () => {
            editProfile(li);
        });
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            profileList.removeChild(li);

            updateCount();
        });
        return li;

    }
    function editProfile(item) {
        editingProfileItem = item;

        nameInput.value = item.querySelector(".profile-name").textContent.trim();
        genderInput.value = item.querySelector(".profile-gender").textContent.trim();
        ageInput.value = item.querySelector(".profile-age").textContent.trim();

        addBtn.textContent = 'Шинэчлэх';
        nameInput.focus();
    }
    function updateProfile(item, name, gender, age) {
        item.querySelector(".profile-name").innerHTML = `${name}`;
        item.querySelector(".profile-gender").innerHTML = `${gender}`;
        item.querySelector(".profile-age").innerHTML = `${age}`;
    }
    function addOrEdit() {
        const name = nameInput.value.trim();
        const gender = genderInput.value;
        const age = ageInput.value.trim();

        if (editingProfileItem) {
            updateProfile(editingProfileItem, name, gender, age);
            editingProfileItem = null;
            addBtn.textContent = 'Нэмэх';
        } else {
            const profileItem = createProfile(name, gender, age);
            profileList.appendChild(profileItem);
            updateCount();
        }

        nameInput.value = "";
        nameInput.value = "";
        nameInput.value = "";
    }

    function updateCount() {
        totalProfiles.textContent = profileList.children.length;
    }
    function date() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: "long" };
        currentDate.textContent = now.toLocaleDateString('mn-Mn', options);
    }
    date();
});