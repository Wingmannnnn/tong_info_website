// -------------------------variable-------------------------
const menu =  document.getElementById("Hamburger_menu")
const container = document.getElementById("Container")
const menu_home = document.getElementById("Menu_home")
const menu_food = document.getElementById("Menu_food")
const menu_play = document.getElementById("Menu_play")
const shadow_one = document.getElementById("Shadow_one")
const shadow_two = document.getElementById("Shadow_two")
const shadow_three = document.getElementById("Shadow_three")

var prev_btn = document.getElementById("prev_btn")
var next_btn = document.getElementById("next_btn")
var album = document.getElementById("Album")
var scenic_page = document.getElementById("Scenic_page")

var paper1 = document.getElementById("p1")
var paper2 = document.getElementById("p2")


var j_p1 = document.getElementById("b1")
var j_p2 = document.getElementById("b2")


var current_page = 1
var num_of_page = 1
var max_location = num_of_page + 1

var leave_time = 2000


// -------------------------addEventListener-------------------------
prev_btn.addEventListener("click", get_prev_paper)
next_btn.addEventListener("click", get_next_paper)
next_btn.addEventListener("click", jump_gallery)
// j_p1.addEventListener("click",function(){
//     scenic_page.classList.add("jump_page_complete")
//     var timer =setInterval(jump_gallery_page,1000)})
menu.addEventListener("click", () => {
    container.classList.toggle("active")
})

menu_food.addEventListener("click", () => {
    shadow_one.classList.add("flip")
    jump_tasty_food_page()
})

shadow_one.addEventListener("transitionend",() => {
    shadow_one.classList.remove("flip")
})

menu_home.addEventListener("click", () => {
    shadow_three.classList.add("flip")
    jump_home_page()
})

shadow_three.addEventListener("transitionend",() => {
    shadow_three.classList.remove("flip")
})

menu_play.addEventListener("click", () => {
    shadow_two.classList.add("flip")
    jump_play_page()
})

shadow_two.addEventListener("transitionend",() => {
    shadow_two.classList.remove("flip")
})


// -------------------------function-------------------------

// ---album---
function open_album(){
    album.style.transform = "translateX(50%)"
    prev_btn.style.transform = "translateX(-180px)"
    next_btn.style.transform = "translateX(180px)"
}

function jump_gallery(){
        scenic_page.classList.add("jump_page_complete")
        var timer =setInterval(jump_gallery_page,1000)
}

function close_album(is_begining){

    if(is_begining){
        album.style.transform = "translateX(0%)"
    }else{
        album.style.transform = "translateX(100%)"
    }

    prev_btn.style.transform = "translateX(0px)"
    next_btn.style.transform = "translateX(0px)"
}

function get_next_paper(){
    if(current_page < max_location){
        switch(current_page){
            case 1:
                open_album()
                paper1.classList.add("flip")
                paper1.style.zIndex = "1"
                break
            case 2:
                paper2.classList.add("flip")
                paper2.style.zIndex = "2"
                break
            case 3:
                paper3.classList.add("flip")
                paper3.style.zIndex = "3"
                break
            case 4:
                paper4.classList.add("flip")
                paper4.style.zIndex = "4"
                close_album(false)
                break
            default:
                throw new Error("unknown state  ")
        }
        current_page ++
    }
}

function get_prev_paper(){
    if(current_page > 1){
        switch(current_page){
            case 2:
                close_album(true)
                paper1.classList.remove("flip")
                paper1.style.zIndex = "4"
                break
            case 3:
                paper2.classList.remove("flip")
                paper2.style.zIndex = "3"
                break
            case 4:
                open_album()
                paper3.classList.remove("flip")
                paper3.style.zIndex = "2"
                break
            case 5:
                open_album()
                paper4.classList.remove("flip")
                paper4.style.zIndex = "1"
                break
            default:
                throw new Error("unknown state")
        }
        current_page --
    }
}


// jump page
function jump_tasty_food_page(){
    var timer =setInterval(counting_time,1000,"tasty_food_page.html")
}
function jump_home_page(){
    var timer =setInterval(counting_time,1000,"home_page.html")
}
function jump_gallery_page(){
    var timer =setInterval(counting_time,1000,"influencer.html")
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