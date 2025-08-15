document.addEventListener('DOMContentLoaded', () => {
    // DOM элэментүүдийг сонгох
    const nameInput = document.getElementById('name-input');
    const genderInput = document.getElementById('gender-input');
    const ageInput = document.getElementById('age-input');
    const addProfileBtn = document.getElementById('add-profile-btn');
    const totalProfileSpan = document.getElementById('total-profiles');
    const currentDatePara = document.getElementById('current-date');

    // Odoo zavsarlaga bui profileiin element hadgalah huvisagch 
    let editingProfileItem = null;

    // Odoogiin on sar udriig haruulah 
    displayCurrentDate();

    // Local Storage aas profile uudiig achaalah
    loadProfiles();

    // 'Nemeh" tovchiig darahad ajillah uildel
    addProfileBtn.addEventListener('click', addOrUpdateProfile);

    // Enter tovchiig darahad profile nemeh esvel shinechleh 
    nameInput.addEventListener('keypress', handleKeyPress);
    genderInput.addEventListener('keypress', handleKeyPress);
    ageInput.addEventListener('keypress', handleKeyPress);

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            addOrUpdateProfile();
        }
    }
    function displayCurrentDate() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
        currentDatePara.textContent = now.toLocaleDateString('mn-MN', options);
    }
    function addOrUpdateProfile() {
        const name = nameInput.value.trim();
        const gender = genderInput.value;
        const age = parseInt(ageInput.value, 10);

        if (name === '') {
            alert('Нэрээ оруулна уу');
            nameInput.focus();
            return;
        }
        if (gender === '') {
            alert('Хүйсээ сонгоно уу.');
            genderInput.focus();
            return;
        }
        if (isNaN(age) || age < 1 || age > 120) {
            alert('Насаа зөв оруулна уу (1-120 хооронд).');
            ageInput.focus();
            return;
        }
        if (editingProfileItem) {
            //Odoo baigaa profile aa shinechleh 
            updateProfileElement(editingProfileItem, name, gender, age);
            editingProfileItem = null; // zasvarlah tolviig tsutslah 
            addProfileBtn.textContent = 'Нэмэх'; // Tovchnii textiig butsaana
            addProfileBtn.style.backgroundColor = '#28a745'; // Tovchnii ungiig butsaana
        } else {
            // shine profile nemeh 
            const profileItem = createProfileElement(name, gender, age);
            profileList.appendChild(profileItem);
        }
        // Input talbaruudiig tseverleh 
        nameInput.value = '';
        genderInput.value = ''; // Default option ruu butsaana
        ageInput.value = '';
        nameInput.focus();// Ner oruulah talbart focus butsaana

        // Profile uu diig hadgalah, niit toog shinechleh 
        saveProfiles();
        updateProfileCount();
    }
    function createProfileElement(name, gender, age) {
        const li = document.createElement('li');
        li.classList.add('profile-item');

        li.innerHTML = `
            < div class="profile-info" >
    <span class="profile-name"><strong>Нэр:</strong>${name}</span>
    <span class="profile-gender"><strong>Хүйс:</strong>${gender}</span>
    <span class="profile-age"><strong>Нас:</strong>${age}</span>
             </div >
            <div class="profile-actions" >
                <button class="edit-btn" title="Засах"><i class="fas fa-edit" ></i></button>
                <button class="delete-btn" title="Устгах"><i class="fas fa-trash" ></i></button>
            </div>
        `;

        // zasah tovch deer uildel nemeh 
        const editButton = li.querySelector('.edit-btn');
        editButton.addEventListener('click', () => {
            editProfile(li);
        });
        // ustgah tovch deer uildel nemeh 
        const deleteButton = li.querySelector('.delete-btn');
        deleteButton.addEventListener('click', () => {
            profileList.removeChild(li);
            saveProfiles(); // ustgasanii daraa hadaglah 
            updateProfileCount(); // toog shinechleh 
            if (editingProfileItem === li) {//herev zavsarlaj bsn profile aa ustgaval 
                editingProfileItem = null;
                addProfileBtn.textContent = 'Нэмэх';
                addProfileBtn.style.backgroundColor = '#28a745';
                nameInput.value = '';
                genderInput.value = '';
                ageInput.value = '';
            }
        });
        return li;
    }
    function updateProfileElement(item, name, gender, age) {
        item.querySelector('.profile-name').innerHTML = `<strong>Нэр:</strong>${name}`;
        item.querySelector('.profile-gender').innerHTML = `<strong>Хүйс:</strong> ${gender}`;
        item.querySelector('.profile-age').innerHTML = `<strong>Нас:</strong> ${age}`;
    }
    function editProfile(item) {
        editingProfileItem = item; // Odoo zavsarlaj bui profile uudiig temdegleh 

        // profile medeelliig input talbaruudad bairshuulah 
        nameInput.value = item.querySelector(`.profile-name`).textContent.replace(`Нэр: `, '').trim();
        genderInput.value = item.querySelector(`.profile-gender`).textContent.replace(`Хүйс: `, '').trim();
        ageInput.value = parseInt(item.querySelector(`.profile-age`).textContent.replace(`Нас: `, '').trim(), 10);

        // nemeh tovchiig shinechleh bolgoj uurchluh 
        addProfileBtn.textContent = ' Шинэчлэх';
        addProfileBtn.style.backgroundColor = '#ffc107'; // shinechleh tovchnii ungiig shar bolgoh 
        nameInput.focus();
    }
    // local storaged profiles hadgalah function
    function saveProfiles() {
        const profiles = [];
        profileList.querySelectorAll('profile-item').forEach(item => {
            const name = item.querySelector('.profile-name').textContent.replace('Нэр: ', '').trim();
            const gender = item.querySelector('.profile-gender').textContent.replace('Хүйс: ', '').trim();
            const age = parseInt(item.querySelector('.profile-name').textContent.replace('Нас: ', '').trim(), 10);
            profiles.push({ name, gender, age });
        });
        localStorage.setItem('peopleProfiles', JSON.stringify(profiles)); // peopleProfiles gsn tulhuureer hadgalna 
    }
    // local storage aas profile achaalal function 
    function loadProfiles() {
        const profiles = JSON.parse(localStorage.getItem('peopleProfiles'));
        if (profiles) {
            profiles.forEach(profile => {
                const profileItem = createProfileElement(profile.name, profile.gender, profile.age);
                profileList.appendChild(profileItem);
            });
        }
        updateProfileElement(); // Achaalsnii daraa niit toog shinechleh
    }
    function updateProfileCount() {
        totalProfileSpan.textContent = profileList.children.lenght;
    }

});