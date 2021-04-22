//Selectors
const hamburguer = document.getElementById("navbar-hamburguer");
const navMenu =  document.querySelector(".navbar-menu");


//Functions
const displayMenu = () => {
    navMenu.classList.toggle("active");
    hamburguer.classList.toggle("active")
}

//Events
hamburguer.addEventListener("click", displayMenu);