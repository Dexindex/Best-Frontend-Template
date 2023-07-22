const themeSwitcher = document.getElementById('theme-switcher');
const body = document.body;

// Check if a theme preference has beenstored in local storage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}

themeSwitcher.addEventListener('click', function() {
  body.classList.toggle('dark');

  // Change the theme icon
  const moonIcon = themeSwitcher.querySelector('.fa-moon');
  const sunIcon = themeSwitcher.querySelector('.fa-sun');
//   moonIcon.classList.toggle('d-none');
//   sunIcon.classList.toggle('d-none');

  // Store the theme preference in local storage
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }
});
