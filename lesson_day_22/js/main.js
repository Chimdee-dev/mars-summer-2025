document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.querySelector("#text-input");
    const displayedText = document.querySelector("#displayed-text");
    const editBtn = document.querySelector("#edit-btn");
    const deleteBtn = document.querySelector("#delete-btn");
    const displayBtn = document.querySelector("#display-btn");

    const updateText = (text = 'Text will appear here') => {
        displayedText.textContent = text;
        const hastext = Text !== '' && text !== 'Text will appear here';


        editBtn.disabled = !hastext;
        deleteBtn.disabled = !hastext;
        displayedText.contentEditable = 'false';
    };

    updateText();
    displayBtn.addEventListener('click', () => {
        const text = textInput.value.trim();
        if (text) {
            updateText(text) = '';
            textInput.value = '';
        } else {
            alert('Please enter some text');
        }
    });
    editBtn.addEventListener('click', () => {
        displayedText.contentEditable = 'true';
        displayedText.focus();
        editBtn.disabled = true;
        deleteBtn.disabled = true;
    })

    textInput.addEventListener('keypress', e => e.key === 'Enter' && displayBtn.click());
    displayedText.addEventListener('blur', () => updateText(displayedText.textContent.trim()));
    displayedText.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            displayedText.blur();
        }
    });
    deleteBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this text?')) {
            updateText("");
        }
    });


});