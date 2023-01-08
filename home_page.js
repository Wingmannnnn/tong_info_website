// -------------------------variable-------------------------
const menu =  document.getElementById("Hamburger_menu")
const container = document.getElementById("Container")
const menu_food = document.getElementById("Menu_food")
const menu_science = document.getElementById("Menu_science")
const menu_play = document.getElementById("Menu_play")
const shadow_one = document.getElementById("Shadow_one")
const shadow_two = document.getElementById("Shadow_two")
const shadow_three = document.getElementById("Shadow_three")

var leave_time = 2000


// -------------------------addEventListener-------------------------
menu.addEventListener("click", () => {
    container.classList.toggle("active")
})

menu_food.addEventListener("click", () => {
    shadow_two.classList.add("flip")
    jump_tasty_food_page()
})

shadow_two.addEventListener("transitionend",() => {
    shadow_two.classList.remove("flip")
})

menu_science.addEventListener("click", () => {
    shadow_one.classList.add("flip")
    jump_science_page()
})

shadow_one.addEventListener("transitionend",() => {
    shadow_one.classList.remove("flip")
})

menu_play.addEventListener("click", () => {
    shadow_three.classList.add("flip")
    jump_play_page()
})

shadow_three.addEventListener("transitionend",() => {
    shadow_three.classList.remove("flip")
})
// -------------------------function-------------------------

function jump_tasty_food_page(){
    var timer =setInterval(counting_time,1000,"tasty_food_page.html")
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