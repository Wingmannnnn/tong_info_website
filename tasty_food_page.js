// -------------------------variable-------------------------
const menu =  document.getElementById("Hamburger_menu")
const container = document.getElementById("Container")
const menu_home = document.getElementById("Menu_home")
const menu_science = document.getElementById("Menu_science")
const menu_play = document.getElementById("Menu_play")
const shadow_one = document.getElementById("Shadow_one")
const shadow_two = document.getElementById("Shadow_two")
const shadow_three = document.getElementById("Shadow_three")
var front_door = document.getElementById("Front")
var refrigerator = document.getElementById("Refri")
var h4_seafood = document.getElementById("h4_seafood")

var leave_time = 2000


// -------------------------addEventListener-------------------------
menu.addEventListener("click", () => {
    container.classList.toggle("active")
})
front_door.addEventListener("click",open_door)
// front_door.addEventListener("mouseenter",close_door)
menu_home.addEventListener("click", () => {
    shadow_two.classList.add("flip")
    jump_home_page()
})

shadow_two.addEventListener("transitionend",() => {
    shadow_two.classList.remove("flip")
})

menu_science.addEventListener("click", () => {
    shadow_three.classList.add("flip")
    jump_science_page()
})

shadow_three.addEventListener("transitionend",() => {
    shadow_three.classList.remove("flip")
})

menu_play.addEventListener("click", () => {
    shadow_one.classList.add("flip")
    jump_play_page()
})

shadow_one.addEventListener("transitionend",() => {
    shadow_one.classList.remove("flip")
})


// -------------------------function-------------------------
function open_door(){
    front_door.style.transform ="rotate3d(0, -1, 0, 180deg)" + "translate3d(250px, 0px, -80px)"
    front_door.textContent = ""
    jump_page("food_intro.html")
}

// function close_door(){
//     front_door.style.transform ="rotate3d(0, 1, 0, 0deg)" + "translate3d(0px, 0px, 125px)"
//     front_door.textContent = "refrigerator"
// }

function jump_page(){
    refrigerator.animate([
        {transform: "rotateY(0deg)"},
        {transform: "matrix(2,0,0,2,0,220)"},
    ],
        {
            duration:2000,
            iterations:1,
            easing:"ease-In"
        })
    var timer =setInterval(counting_time,1000,"food_intro.html")
}

function jump_home_page(){
    var timer =setInterval(counting_time,1000,"home_page.html")
}
function jump_science_page(){
    var timer =setInterval(counting_time,1000,"science.html")
}
function jump_play_page(){
    var timer =setInterval(counting_time,1000,"play_page.html")
}



function counting_time(page){
    leave_time -= 1000
    if(leave_time == 0){
      window.location.href = page
      clearInterval(timer)
    }
}