// ============================
// MOBILE MENU TOGGLE
// ============================
const navMenu = document.getElementById("nav-menu");

function toggleMenu() {
    navMenu.classList.toggle("show-menu");
}

// ============================
// CLOSE MENU WHEN CLICK LINK
// ============================
const navLinks = document.querySelectorAll(".nav_Link");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
});


// ============================
// SMOOTH SCROLL
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior: "smooth"
        });
    });
});


// ============================
// ACTIVE MENU ON SCROLL
// ============================
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav_Link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach(link => {
        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active-link");
        }
    });
});


// ============================
// SCROLL TO TOP BUTTON
// ============================
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.id = "scrollTop";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.display = "none";

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};


// ============================
// CONTACT FORM VALIDATION
// ============================
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(e) {

        const name = document.querySelector("input[type='text']");
        const email = document.querySelector("input[type='email']");

        if(name.value === "" || email.value === "") {
            alert("Please fill all fields");
            e.preventDefault();
        } else {
            alert("Message Sent Successfully!");
        }
    });
}


// ============================
// FADE IN ANIMATION
// ============================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach(el => observer.observe(el));