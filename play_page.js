// -------------------------variable-------------------------
const menu =  document.getElementById("Hamburger_menu")
const container = document.getElementById("Container")
const menu_home = document.getElementById("Menu_home")
const menu_food = document.getElementById("Menu_food")
const menu_play = document.getElementById("Menu_play")
const menu_science = document.getElementById("Menu_science")
const shadow_one = document.getElementById("Shadow_one")
const shadow_two = document.getElementById("Shadow_two")
const shadow_three = document.getElementById("Shadow_three")
const bus_stop_one = document.getElementById("Busstop1")
const bus_stop_two = document.getElementById("Busstop2")
const bus_stop_three = document.getElementById("Busstop3")
const bus_stop_four = document.getElementById("Busstop4")
const bus_stop_five = document.getElementById("Busstop5")
const bus_stop_six = document.getElementById("Busstop6")
const road = document.getElementById("Road")
const prev_btn = document.getElementById("prev_btn")
const next_btn = document.getElementById("next_btn")
const overlay = document.getElementById("Overlay")

var dialogue = document.createElement("div")
var speaker = document.createElement("h2")
var verline = document.createElement("hr")
var npc_content = document.createElement("p")
var pass = document.createElement("div")
var npc = document.createElement("div")
var precaution = document.createElement("div")
var add_content = document.createElement("div")
var closedd = document.createElement("div")
var add_content_title = document.createElement("h3")
var img_list = document.createElement("div")
var img_list2= document.createElement("div")
var img_list3 = document.createElement("div")
var leave_time = 2000
var xnum = 0
var rxnum = 0


// bus_stop_three.scrollIntoView()

// -------------------------addEventListener-------------------------
menu.addEventListener("click", () => {
    container.classList.toggle("active")
    shadow_one.removeAttribute("style")
    shadow_two.removeAttribute("style")
    shadow_three.removeAttribute("style")
})

menu_home.addEventListener("click", () => {
    shadow_one.classList.add("flip")
    jump_home_page()
})

// menu_home.addEventListener("mouseenter",() =>{
//     shadow_one.style.boxShadow = "2px 2px 60px rgba(0, 0, 0, 0.4)"
//     shadow_one.style.transform = "perspective(1300px) rotateY(20deg) translateZ(315px) translateY(-100px) scale(0.5)"
// })

// menu_home.addEventListener("mouseleave",() =>{
//     shadow_one.style.boxShadow = "2px 2px 60px rgba(0, 0, 0, 0.4)"
//     shadow_one.style.transform = "perspective(1300px) rotateY(20deg) translateZ(315px) scale(0.5)"
// })

shadow_one.addEventListener("transitionend", remove_flip)

menu_science.addEventListener("click", () => {
    shadow_two.classList.add("flip")
    jump_science_page()
})

// menu_science.addEventListener("mouseenter",() =>{
//     shadow_two.style.boxShadow = "2px 2px 60px rgba(0, 0, 0, 0.4)"
//     shadow_two.style.transform = "perspective(1300px) rotateY(20deg) translateZ(220px) translateY(-100px) scale(0.5)"
// })

// menu_science.addEventListener("mouseleave",() =>{
//     shadow_two.style.boxShadow = "2px 2px 60px rgba(0, 0, 0, 0.4)"
//     shadow_two.style.transform = "perspective(1300px) rotateY(20deg) translateZ(220px) scale(0.5)"
// })

shadow_two.addEventListener("transitionend",() => {
    shadow_two.classList.remove("flip")
})

menu_food.addEventListener("click", () => {
    shadow_three.classList.add("flip")
    jump_tasty_food_page()
})

// menu_food.addEventListener("mouseenter",() =>{
//     shadow_three.style.boxShadow = "2px 2px 60px rgba(0, 0, 0, 0.4)"
//     shadow_three.style.transform = "perspective(1300px) rotateY(20deg) translateZ(125px) translateY(-100px) scale(0.5)"
// })

// menu_food.addEventListener("mouseleave",() =>{
//     shadow_three.style.boxShadow = "2px 2px 60px rgba(0, 0, 0, 0.4)"
//     shadow_three.style.transform = "perspective(1300px) rotateY(20deg) translateZ(125px) scale(0.5)"
// })

shadow_three.addEventListener("transitionend",() => {
    shadow_three.classList.remove("flip")
})



next_btn.addEventListener("click",bus_stop_forward_ani)
prev_btn.addEventListener("click", bus_stop_backward_ani)

bus_stop_one.addEventListener("transitionend",readd_bus_stop_ani)
bus_stop_one.addEventListener("transitionend",create_dialogue)

pass.addEventListener("click",delete_dialogue)

precaution.addEventListener("click", click_precaution)
precaution.addEventListener("click", send_word_to_theater)

closedd.addEventListener("click", remove_addcontent)
// -------------------------function-------------------------

// jump page

function jump_tasty_food_page(){
    var timer =setInterval(counting_time,1000,"tasty_food_page.html")
}
function jump_home_page(){
    var timer =setInterval(counting_time,1000,"home_page.html")
}

function jump_science_page(){
    var timer =setInterval(counting_time,1000,"science.html")
}

function remove_addcontent(){
    add_content.remove()
}


function counting_time(page){
    leave_time -= 1000
    if(leave_time == 0){
      window.location.href = page
      clearInterval(timer)
    }
}

function click_precaution(){
    if(precaution.textContent == "玩法影片"){
        window.open("theater.html")
    }
    else if(precaution.textContent == "注意事項" && xnum == -2000){
        overlay.appendChild(add_content)
        add_content.classList.add("add_content")
        add_content.appendChild(closedd)
        closedd.classList.add("close")
        closedd.innerHTML = "X"
        add_content.appendChild(img_list)
        img_list.classList.add("img_list")
        img_list.style.backgroundImage = "IMG/old_house6.png"
        add_content.appendChild(add_content_title)
        add_content_title.classList.add("info_title")
        add_content_title.innerHTML = "大家若來到東石水中古厝一定要注意腳下的土，腳下的土</br>會將你寶貴的鞋吃進去，如果沒有注意的話就會像上面</br>的同學腳上全部都是泥土喔!!!"
    }
    else if(precaution.textContent == "注意事項" && xnum == -5000){
        overlay.appendChild(add_content)
        add_content.classList.add("add_content")
        add_content.appendChild(closedd)
        closedd.classList.add("close")
        closedd.innerHTML = "X"
        add_content.appendChild(img_list2)
        img_list2.classList.add("img_list2")
        img_list2.style.backgroundImage =  "IMG/accident1.jpg"
        add_content.appendChild(img_list3)
        img_list3.classList.add("img_list3")
        img_list3.style.backgroundImage =  "IMG/accident3.png"
        add_content.appendChild(add_content_title)
        add_content_title.classList.add("info_title")
        add_content_title.innerHTML = "大家若來到鰲鼓溼地北堤，一定要小心上去堤岸的路上</br>會有兩塊大石頭堵住，只有一台機車的空間可以通過，尤</br>其是在黃昏夕陽的時間點，此處會位於陽光直射的方向</br>直接讓你失明，稍有不慎就會發生上面同學的慘案!!!"
    }
    else{
        window.location.reload()
    }
}

function remove_flip(){
    shadow_one.classList.remove("flip")
}


//  bus_stop animate
function bus_stop_forward_ani(){
    if(xnum <= -6000){
        next_btn.removeEventListener("click",bus_stop_forward_ani)
    }
    else{
        xnum += -1000
        rxnum += -500
        bus_stop_one.style.transform = "translateX("+ xnum + "px)" + "translateZ(-200px)"
        bus_stop_two.style.transform = "translateX("+ xnum + "px)" + "translateZ(-200px)"
        bus_stop_three.style.transform = "translateX("+ xnum + "px)" + "translateZ(-200px)"
        bus_stop_four.style.transform = "translateX("+ xnum + "px)" + "translateZ(-200px)"
        bus_stop_five.style.transform = "translateX("+ xnum + "px)" + "translateZ(-200px)"
        bus_stop_six.style.transform = "translateX("+ xnum + "px)" + "translateZ(-200px)"
        road.style.transform = "translateX("+ rxnum + "px)"
        next_btn.removeEventListener("click",bus_stop_forward_ani)
    }
}

function bus_stop_backward_ani(){
        if(xnum == 0){
            prev_btn.removeEventListener("click",bus_stop_backward_ani)
        }
        else{
            xnum += 1000
            rxnum += 500
            bus_stop_one.style.transform = "translateX("+ xnum + "px)" + "translateZ(-200px)"
            bus_stop_two.style.transform = "translateX("+ xnum + "px)" + "translateZ(-200px)"
            bus_stop_three.style.transform = "translateX("+ xnum + "px)" + "translateZ(-200px)"
            bus_stop_four.style.transform = "translateX("+ xnum + "px)" + "translateZ(-200px)"
            bus_stop_five.style.transform = "translateX("+ xnum + "px)" + "translateZ(-200px)"
            bus_stop_six.style.transform = "translateX("+ xnum + "px)" + "translateZ(-200px)"
            road.style.transform = "translateX("+ rxnum + "px)"
            prev_btn.removeEventListener("click",bus_stop_backward_ani)
        }
}

// readd ani
function readd_bus_stop_ani(){
    next_btn.addEventListener("click",bus_stop_forward_ani)
    prev_btn.addEventListener("click",bus_stop_backward_ani)
}

// create dialogue
function create_dialogue(){
    overlay.appendChild(dialogue)
    dialogue.appendChild(speaker)
    dialogue.appendChild(verline)
    dialogue.appendChild(npc_content)
    dialogue.appendChild(pass)
    overlay.appendChild(npc)
    dialogue.classList.add("dialogue")
    pass.classList.add("pass")
    pass.textContent = "跳過"
    npc.classList.add("npc")
    speaker.textContent = "東石大嚮導"
    if(xnum == -1000){
        npc_content.innerHTML = "第一站:牛港魚池"
        dialogue.removeChild(precaution)
    }
    else if(xnum == -2000){
        dialogue.appendChild(precaution)
        precaution.classList.add("precaution")
        pass.textContent = "跳過"
        precaution.textContent = "注意事項"
        npc_content.innerHTML = "第二站:東石水中古厝"
    }
    else if(xnum == -3000){
        pass.textContent = "跳過"
        precaution.textContent = "玩法影片"
        npc_content.innerHTML = "第三站:東石漁人碼頭"
    }
    else if(xnum == -4000){
        pass.textContent = "跳過"
        precaution.textContent = "玩法影片"
        npc_content.innerHTML = "第四站:白水湖壽島"
    }
    else if(xnum == -5000){
        pass.textContent = "跳過"
        precaution.textContent = "注意事項"
        npc_content.innerHTML = "第五站:鰲鼓溼地北堤"
    }
    else if(xnum == -6000){
        pass.textContent = "首頁"
        precaution.textContent = "再玩一次"
        npc_content.innerHTML = "最後一站:回家"
    }
    else{
        overlay.removeChild(dialogue)
        dialogue.removeChild(speaker)
        dialogue.removeChild(verline)
        dialogue.removeChild(npc_content)
        dialogue.removeChild(pass)
        overlay.removeChild(npc)
    }

}

// deleate dialogue
function delete_dialogue(){
    if(xnum == -1000 || xnum == -3000 || xnum == -4000){
        overlay.removeChild(dialogue)
        dialogue.removeChild(speaker)
        dialogue.removeChild(verline)
        dialogue.removeChild(npc_content)
        dialogue.removeChild(pass)
        overlay.removeChild(npc)
    }
    else if(xnum == -2000){
        overlay.removeChild(dialogue)
        dialogue.removeChild(speaker)
        dialogue.removeChild(verline)
        dialogue.removeChild(npc_content)
        dialogue.removeChild(pass)
        overlay.removeChild(npc)
        remove_addcontent()
    }
    else if(xnum == -5000){
        overlay.removeChild(dialogue)
        dialogue.removeChild(speaker)
        dialogue.removeChild(verline)
        dialogue.removeChild(npc_content)
        dialogue.removeChild(pass)
        overlay.removeChild(npc)
        remove_addcontent()
    }
    else{
        container.classList.toggle("active")
        shadow_one.removeAttribute("style")
        shadow_two.removeAttribute("style")
        shadow_three.removeAttribute("style")
        shadow_one.classList.add("flip")
        shadow_one.removeEventListener("transitionend",remove_flip)
        jump_home_page()
    }
}

function send_word_to_theater(){
    if(xnum == -3000){
        var word = document.getElementById("Word1").textContent
        localStorage.setItem("textvalue",word)
    }
    else if(xnum == -4000){
        var word = document.getElementById("Word2").textContent
        localStorage.setItem("textvalue",word)
    }
}



