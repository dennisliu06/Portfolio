let currentY = 0
const NAVBAR_DISSAPEAR = 768;
window.addEventListener('scroll', function() {
    const navbar = document.getElementById("navbar"); // Assume '.navbar' is the element
    let scrollY = window.scrollY
    if(currentY > scrollY){
        navbar.classList.remove('-translate-y-full', 'opacity-0');
        if(scrollY == 0) {
            navbar.classList.remove("drop-shadow-md")
        }
    } else if (scrollY > NAVBAR_DISSAPEAR) {
        navbar.classList.add('-translate-y-full', 'opacity-0');
        navbar.classList.add("drop-shadow-md")
        console.log("Second!")
    } else {
        navbar.classList.remove("drop-shadow-md")
        console.log("Third!")
    }
    
    currentY = scrollY
    console.log("Current: " + currentY)
}); 