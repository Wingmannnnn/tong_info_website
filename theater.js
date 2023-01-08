//variable
var slider = document.getElementById("Slider")
// var video = document.getElementById("Video")
var door = document.getElementById("Door")
var frame = document.getElementById("Frame")
var xnum = 0
var get_value = document.getElementById("Get_value")
get_value.innerHTML = localStorage.getItem("textvalue")
var video_src = ""

if (get_value.innerHTML == "東石漁人碼頭"){
    var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "https://www.youtube.com/embed/U9x3-pwJfQQ");
        ifrm.setAttribute("allowFullScreen","")
        ifrm.style.width = "1000px";
        ifrm.style.height = "500px";
        frame.appendChild(ifrm);
}
else if(get_value.innerHTML == "白水湖壽島"){
    var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "https://www.youtube.com/embed/AssodP9dkRE");
        ifrm.setAttribute("allowFullScreen","")
        ifrm.style.width = "1000px";
        ifrm.style.height = "500px";
        frame.appendChild(ifrm);
}


// EventListener
slider.addEventListener("mouseenter",slider_up)
// video.addEventListener("ended",close_slider)
door.addEventListener("click",exit)



// function
function slider_up(){
    slider.style.backdropFilter = "blur(0)"
    slider.style.height = "0%"

}

function close_slider(){
    slider.style.backdropFilter = "blur(20px)"
    slider.style.height = "100%"
}

function exit(){
    window.close()
}



