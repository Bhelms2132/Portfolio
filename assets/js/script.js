// Sticky NavBar //
// Calls function to execute 
window.onscroll = function () {stickyNavBar()};

// Variable for navbar
var navbar = document.getElementById('navbar');

// Offset position for navbar
var sticky = navbar.offsetTop;

function stickyNavBar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky');
    }
}