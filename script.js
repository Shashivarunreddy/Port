let menuIcon = document.querySelector('#menu-icon');
let navbarContainer = document.querySelector('.navbar-container');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbarContainer.classList.toggle('active');
};

// Close the navbar when clicking anywhere outside of it
document.addEventListener('click', (event) => {
    if (!navbarContainer.contains(event.target) && !menuIcon.contains(event.target)) {
        navbarContainer.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
});


