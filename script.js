// Smooth scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function toggleDetails(id) {
    var details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

// Automatic scrolling for project section
const projectSlider = document.querySelector('.project-slider');
let scrollAmount = 0;
let slideTimer = setInterval(() => {
    projectSlider.scrollLeft += 300;
    scrollAmount += 300;
    if (scrollAmount >= projectSlider.scrollWidth - projectSlider.clientWidth) {
        projectSlider.scrollLeft = 0;
        scrollAmount = 0;
    }
}, 2500);

// Changing background color on scroll
window.addEventListener("scroll", () => {
    document.body.style.backgroundColor = window.scrollY > 150 ? "#f0f8ff" : "#f8f9fa";
});

// Button hover animation
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});
