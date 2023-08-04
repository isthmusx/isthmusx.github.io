// Get the container element
var btnContainer = document.getElementById("navActive");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScroll && window.scrollY > 0) {
    navbar.style.backdropFilter = "blur(20px)";
    navbar.style.webkitBackdropFilter = "blur(20px)";
  } else if (window.scrollY === 0) {
    navbar.style.backdropFilter = "none";
    navbar.style.webkitBackdropFilter = "none";
  }

  lastScroll = window.scrollY;
});

// Smooth scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 0, // Adjust this offset based on your navigation bar height
                behavior: 'smooth'
            });
        }
    });
});
