let currentY = 0
window.addEventListener('scroll', function() {
    const navbar = document.getElementById("navbar"); // Assume '.navbar' is the element
    let scrollY = window.scrollY
    console.log("Scroll: " + scrollY)
    if(currentY > scrollY){
        navbar.classList.remove('-translate-y-full', 'opacity-0');
        console.log("First!")
    } else if (scrollY > 768) {
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