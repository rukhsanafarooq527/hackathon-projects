
const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;

toggleButton.addEventListener('click', () => {
  // Check for display property in a more generic way
  if (skills.style.display === 'none' || skills.style.display === '') {
    skills.style.display = 'block';
  } else {
    skills.style.display = 'none';
  }
});

    

