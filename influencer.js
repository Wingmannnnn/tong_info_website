// -------------------------variable-------------------------
var container = document.getElementById("Container")
var left_wall = document.getElementById("Left")
var back_wall = document.getElementById("Back")
var right_wall = document.getElementById("Right")
var door = document.getElementById("Door")
var painting_left1 = document.getElementById("Painting_left1")
var painting_left2 = document.getElementById("Painting_left2")
var paintint_back1 = document.getElementById("Painting_back1")
var paintint_right1 = document.getElementById("Painting_right1")
var paintint_right2 = document.getElementById("Painting_right2")
var word1 = document.getElementById("word1")
var word2 = document.getElementById("word2")


var x
var y
var mouse_move = true
var science_info = document.createElement("div")
var close = document.createElement("div")
var science_info_title = document.createElement("h3")
var science_info_content = document.createElement("p")
var painting_line = document.createElement("div")
var painting_name = document.createElement("div")
var img_list = document.createElement("div")
var img1 = document.createElement("div")
var img2 = document.createElement("div")
var img3 = document.createElement("div")


var painting_name_list = ["東石漁人碼頭","東石先天宮","余順豐花生觀光工廠","東石水中古厝","白水湖壽島"]

// -------------------------addEventListener-------------------------
door.addEventListener("click",exit)
painting_left1.addEventListener("click",focus_painting_left.bind(null,"東石先天宮","東石先天宮位於台灣嘉義縣東石鄉，臨海而建廟迄今有三百多年的</br>歷史，建築典雅壯觀，為東石漁人的信仰中心，主要供奉的神明為</br>代旨李千歲、五年千歲十三天王，配祀神明有五府千歲、蕭府太傅、</br>保生大帝、紀府千歲、廣澤尊王、魁星爺、孔子、郊緣媽祖、</br>註生娘娘等","IMG/food91.jpg","IMG/food92.jpg","IMG/lion.jpg","IMG/lion2.jpg"))
painting_left1.addEventListener("mouseenter",show_line.bind(null,left_wall,"painting_line1","painting_name1",1))
painting_left1.addEventListener("mouseleave",hide_line.bind(null,left_wall,"painting_line1","painting_name1"))

painting_left2.addEventListener("click",focus_painting_left.bind(null,"余順豐花生觀光工廠","全台第一間以花生為展覽主題的觀光工廠，經營長達60多年。<br/>在這個園區內主要分成了幾個區域，其中有產品加工區、<br/>商店、花生文化館與DIY區。並以花生相關知識及文化為主題，讓前<br/>來觀光的遊客除了消費與DIY之外，還能沉浸於花生知識的學海當中<br/>","IMG/food90.jpg","IMG/food87.jpg","IMG/food88.jpg","IMG/food89.jpg"))
painting_left2.addEventListener("mouseenter",show_line.bind(null,left_wall,"painting_line2","painting_name2",2))
painting_left2.addEventListener("mouseleave",hide_line.bind(null,left_wall,"painting_line2","painting_name2"))

paintint_back1.addEventListener("click",focus_painting_back.bind(null,"IMG/tong.jpg","IMG/tong2.jpg","IMG/tong3.jpg","IMG/tong5.jpg"))
paintint_back1.addEventListener("mouseenter",show_line.bind(null,back_wall,"painting_line3","painting_name3",0))
paintint_back1.addEventListener("mouseleave",hide_line.bind(null,back_wall,"painting_line3","painting_name3"))

paintint_right1.addEventListener("click",focus_painting_right.bind(null,"東石水中古厝","因為此區地層下陷，加上海水倒灌等種種因素，讓原本位在陸地上的</br>古厝，造成積水、無法再住人了，古厝就成為了沒人居住的廢棄小屋</br>因為搬離了，僅留下古厝與這片水草蔓生的水池，也就成為現在位於</br>水中央的古厝，可以說是陰錯陽差變成了一處熱門的拍照打卡景點","IMG/old_house.jpg","IMG/old_house2.jpg","IMG/old_house3.jpg","IMG/old_house4.jpg"))
paintint_right1.addEventListener("mouseenter",show_line.bind(null,right_wall,"painting_line1","painting_name1",3))
paintint_right1.addEventListener("mouseleave",hide_line.bind(null,right_wall,"painting_line1","painting_name1"))

paintint_right2.addEventListener("click",focus_painting_right.bind(null,"白水湖壽島","壽島海灘位於朴子溪河口濕地的白水湖堤防畔，曾是日據時代的海水</br>浴場，養殖大面積牡蠣，從白水湖漁港向南延伸至布袋第三漁港，</br>綿延數公里，每逢週末假日遊客、攝影愛好者皆駐足於此，欣賞大</br>自然之美，捕捉落日餘暉，絕對是您不可不去的好所在","IMG/science1.JPG","IMG/island.JPG","IMG/science3.JPG","IMG/science4.JPG"))
paintint_right2.addEventListener("mouseenter",show_line.bind(null,right_wall,"painting_line2","painting_name2",4))
paintint_right2.addEventListener("mouseleave",hide_line.bind(null,right_wall,"painting_line2","painting_name2"))

close.addEventListener("click", () => {
    science_info.remove()
})

document.addEventListener("mousemove",function(e){
    x = e.clientX
    y = e.clientY
    y = -y
    if(y<-390){
        y = -390
    }
    else if(y>-340){
        y = -340
    }
    if(x < 845){
        x = 845
    }
    else if(x > 1170){
        x = 1170
    }
    // word1.textContent = x
    // word2.textContent = y
    container.style.transform = "translateZ(600px) rotateX("+y+"deg) rotateY("+x+"deg)"
})

// -------------------------function-------------------------
function exit(){
    window.location.href = "science.html"
}

function focus_painting_left(sci_name,sci_content,img_url4,img_url1,img_url2,img_url3){
    container.style.transform = "translateZ(700px) rotateX(-370deg) rotateY(990deg)"
    left_wall.appendChild(science_info)
    science_info.classList.add("science_info")
    science_info.appendChild(close)
    close.classList.add("close")
    close.innerHTML = "X"
    science_info.appendChild(science_info_title)
    science_info_title.innerHTML = sci_name
    science_info.appendChild(science_info_content)
    science_info_content.innerHTML = sci_content
    science_info.appendChild(img_list)
    img_list.classList.add("img_list")
    img_list.style.backgroundImage = "url("+img_url4+")"
    img_list.appendChild(img1)
    img1.classList.add("img_list1")
    img1.style.backgroundImage = "url("+img_url1+")"
    img_list.appendChild(img2)
    img2.classList.add("img_list2")
    img2.style.backgroundImage = "url("+img_url2+")"
    img_list.appendChild(img3)
    img3.classList.add("img_list3")
    img3.style.backgroundImage = "url("+img_url3+")"
}

function focus_painting_right(sci_name,sci_content,img_url4,img_url1,img_url2,img_url3){
    container.style.transform = "translateZ(700px) rotateX(-370deg) rotateY(1170deg)"
    right_wall.appendChild(science_info)
    science_info.classList.add("science_info")
    science_info.appendChild(close)
    close.classList.add("close")
    close.innerHTML = "X"
    science_info.appendChild(science_info_title)
    science_info_title.innerHTML = sci_name
    science_info.appendChild(science_info_content)
    science_info_content.innerHTML = sci_content
    science_info.appendChild(img_list)
    img_list.classList.add("img_list")
    img_list.style.backgroundImage = "url("+img_url4+")"
    img_list.appendChild(img1)
    img1.classList.add("img_list1")
    img1.style.backgroundImage = "url("+img_url1+")"
    img_list.appendChild(img2)
    img2.classList.add("img_list2")
    img2.style.backgroundImage = "url("+img_url2+")"
    img_list.appendChild(img3)
    img3.classList.add("img_list3")
    img3.style.backgroundImage = "url("+img_url3+")"
}

function focus_painting_back(img_url4,img_url1,img_url2,img_url3){
    container.style.transform = "translateZ(700px) rotateX(-370deg) rotateY(1077deg)"
    back_wall.appendChild(science_info)
    science_info.classList.add("science_info")
    science_info.appendChild(close)
    close.classList.add("close")
    close.innerHTML = "X"
    science_info.appendChild(science_info_title)
    science_info_title.innerHTML = "東石漁人碼頭"
    science_info.appendChild(science_info_content)
    science_info_content.innerHTML = "東石漁人碼頭更希望以新鮮漁產及夕陽美景等資源作為觀光賣點，</br>以港區景觀、文化特色、休閒遊憩及自然生態資源等，打造特有的</br>主題意象，營造出一個具主題特色的觀光據點，繁榮地方經濟。"
    science_info.appendChild(img_list)
    img_list.classList.add("img_list")
    img_list.style.backgroundImage = "url("+img_url4+")"
    img_list.appendChild(img1)
    img1.classList.add("img_list1")
    img1.style.backgroundImage = "url("+img_url1+")"
    img_list.appendChild(img2)
    img2.classList.add("img_list2")
    img2.style.backgroundImage = "url("+img_url2+")"
    img_list.appendChild(img3)
    img3.classList.add("img_list3")
    img3.style.backgroundImage = "url("+img_url3+")"
}

// ---show painting info---
function show_line(wall,which, class_name, i){
    wall.appendChild(painting_line)
    wall.appendChild(painting_name)
    painting_line.classList.add(which)
    painting_name.classList.add(class_name)
    painting_name.textContent = painting_name_list[i]
}

function hide_line(wall,which, class_name){
    wall.removeChild(painting_line)
    wall.removeChild(painting_name)
    painting_line.classList.remove(which)
    painting_name.classList.remove(class_name)

}
