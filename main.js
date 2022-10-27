


 var hamburger = document.querySelector(".hamburger-container")
var mobile = document.querySelector(".mobile-links-holder")
var mybackdrop = document.querySelector(".backdrop")
console.log(hamburger)

function addandremove() {
    hamburger.classList.toggle('showburger')
    mobile.classList.toggle('show-mobile-links-holder')
    mybackdrop.classList.toggle("show-backdrop")
}