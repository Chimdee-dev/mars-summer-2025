document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let current = 0;
  
    function updateUI() {
      steps.forEach((step, i) => {
        step.classList.toggle('active', i === current);
        step.classList.toggle('complete', i < current);
      });
      prevBtn.disabled = current === 0;
      nextBtn.textContent = current === steps.length - 1 ? 'Finish' : 'Next';
    }
  
    prevBtn.addEventListener('click', () => {
      if (current > 0) current--;
      updateUI();
    });

    nextBtn.addEventListener('click', () => {
      if (current < steps.length - 1) {
        current++;
        updateUI();
      } else {
        alert('Хувилбар дууссан!');
      }
    });
    updateUI();
  });
  