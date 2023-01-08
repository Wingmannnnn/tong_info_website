// -------------------------variable-------------------------
const exit_btn = document.getElementById("prev_btn")
const top_line = document.getElementById("Top_line")
const seafood_one = document.getElementById("Seafood_one")
const seafood_two = document.getElementById("Seafood_two")
const localfood_one = document.getElementById("Localfood_one")
const localfood_two = document.getElementById("Localfood_two")
const localfood_three = document.getElementById("Localfood_three")
const dessert_one = document.getElementById("Dessert_one")
const dessert_two = document.getElementById("Dessert_two")
const card_container = document.getElementById("Container")
const top_card = document.getElementById("Top_card")
const bottom_card = document.getElementById("Bottom_card")
const close_card = document.getElementById("Close")
const more_info = document.getElementById("More_info")
const test = document.getElementById("h2h2")
const food_name = document.getElementById("food_name")
const address = document.getElementById("address")
const time = document.getElementById("time")
const phone = document.getElementById("phone")
const must_order = document.getElementById("must_order")
const link = document.getElementById("Link")
const top_front = document.getElementById("Top_front")
const top_front_div1 = document.getElementById("Img2")
const top_front_div2 = document.getElementById("Img3")



var seafood_name_list = ["先天宮廟口六十年蚵嗲","牛港魚池","林記蚵餃","吳氏蚵捲","東石漁人碼頭","甜在心饅頭","第三代古早味粉圓粉條冰","芳玲海鮮炭烤"]
var seafood_name_line = document.createElement("div")
var seafood_name = document.createElement("div")

var top_front_img_list = ["IMG/oyster4.jpg","IMG/food40.jpg","IMG/food3.jpg","IMG/tong_food.jpg","IMG/lin1.png","IMG/bread3.png","IMG/ice1.jpg"]
var div1_img_list = ["IMG/oyster2.jpg","IMG/food41.jpg","IMG/food1.jpg","IMG/food_bbq1.png","IMG/lin2.png","IMG/bread1.png","IMG/ice2.jpg"]
var div2_img_list = ["IMG/oyster3.jpg","IMG/food43.jpg","IMG/food2.jpg","IMG/food_bbq2.png","IMG/lin3.png","IMG/bread2.png","IMG/ice3.png"]

// -------------------------addEventListener-------------------------
exit_btn.addEventListener("click", () => {
    window.location.href = "tasty_food_page.html"
})

seafood_one.addEventListener("mouseenter",show_line.bind(null,"food_line1","seafood_name1", 1))
seafood_one.addEventListener("mouseleave",hide_line.bind(null,"food_line1", "seafood_name1"))
seafood_two.addEventListener("mouseenter",show_line.bind(null,"food_line2", "seafood_name2", 7))
seafood_two.addEventListener("mouseleave",hide_line.bind(null,"food_line2", "seafood_name2"))

localfood_one.addEventListener("mouseenter",show_line.bind(null,"food_line4", "seafood_name4", 0))
localfood_one.addEventListener("mouseleave",hide_line.bind(null,"food_line4", "seafood_name4"))
localfood_two.addEventListener("mouseenter",show_line.bind(null,"food_line5", "seafood_name5", 3))
localfood_two.addEventListener("mouseleave",hide_line.bind(null,"food_line5", "seafood_name5"))
localfood_three.addEventListener("mouseenter",show_line.bind(null,"food_line6", "seafood_name6", 2))
localfood_three.addEventListener("mouseleave",hide_line.bind(null,"food_line6", "seafood_name6"))
dessert_one.addEventListener("mouseenter",show_line.bind(null,"food_line7", "seafood_name7", 5))
dessert_one.addEventListener("mouseleave",hide_line.bind(null,"food_line7", "seafood_name7"))
dessert_two.addEventListener("mouseenter",show_line.bind(null,"food_line8", "seafood_name8", 6))
dessert_two.addEventListener("mouseleave",hide_line.bind(null,"food_line8", "seafood_name8"))

seafood_one.addEventListener("click", show_photo.bind(null,seafood_one,"牛港魚池","嘉義縣東石鄉三家村50號","11:00~18:00","0936957555","烤蚵吃到飽、胡椒魚","https://www.google.com.tw/maps/place/%E7%89%9B%E6%B8%AF%E9%AD%9A%E6%B1%A0/@23.473756,120.1683722,17z/data=!3m1!4b1!4m5!3m4!1s0x346e9d91d8e05257:0xbaffe7fd4e5f6785!8m2!3d23.473756!4d120.1705609?hl=zh-TW&authuser=0",top_front_img_list[0],div1_img_list[0],div2_img_list[0]))
seafood_two.addEventListener("click", show_photo.bind(null,seafood_two,"芳玲海鮮炭烤","嘉義縣東石鄉觀海三路308號","08:00~19:00","0988278172","胡椒蝦、胡椒魚","https://www.google.com.tw/maps/place/%E8%8A%B3%E7%8E%B2-%E8%9A%B5%E3%81%AE%E6%96%99%E7%90%86/@23.4512304,120.1330402,17z/data=!3m1!4b1!4m5!3m4!1s0x346c27bdfb6e68c3:0x5ef25c0f44532f7a!8m2!3d23.4512304!4d120.1352289?hl=zh-TW&authuser=0",top_front_img_list[3],div1_img_list[3],div2_img_list[3]))
localfood_one.addEventListener("click",show_photo.bind(null,localfood_one,"先天宮廟口六十年蚵嗲","嘉義縣東石鄉東石村199號之1","9:00~19:00","暫無資料","炸透抽、蚵仔煎","https://www.google.com.tw/maps/place/%E6%9D%B1%E7%9F%B3%E5%85%88%E5%A4%A9%E5%AE%AE%E5%BB%9F%E5%8F%A3%E5%85%AD%E5%8D%81%E5%B9%B4%E8%9A%B5%E5%97%B2%E8%80%81%E5%BA%97/@23.4562996,120.1477146,17z/data=!3m1!4b1!4m5!3m4!1s0x346c2784fa423a8d:0x1e0e13f4272f9e9a!8m2!3d23.4563112!4d120.1499152?hl=zh-TW&authuser=0",top_front_img_list[1],div1_img_list[1],div2_img_list[1]))
localfood_two.addEventListener("click",show_photo.bind(null,localfood_two,"吳氏蚵捲","嘉義縣東石鄉東石村4之5號","10:30 ~ 19:00","(05)3732852","蚵捲、蚵仔煎、鹽烤鮮蚵","https://www.google.com.tw/maps/place/%E5%90%B3%E6%B0%8F%E8%9A%B5%E6%8D%B2/@23.458374,120.1504003,17z/data=!3m1!4b1!4m5!3m4!1s0x346e9d07dd86a96d:0x8de9bd6257812c3d!8m2!3d23.458374!4d120.152589?hl=zh-TW&authuser=0",top_front_img_list[2],div1_img_list[2],div2_img_list[2]))
localfood_three.addEventListener("click",show_photo.bind(null,localfood_three,"林記蚵餃","嘉義縣東石鄉猿樹村154-23號","10:00 ~ 20:00","(05)3734399","蚵仔湯、炸蚵餃","https://www.google.com.tw/maps/place/%E6%9E%97%E8%A8%98%E8%9A%B5%E9%A4%83/@23.4579191,120.1483418,17z/data=!3m1!4b1!4m5!3m4!1s0x346c27847c344fc9:0xc82b63d9a53cf41!8m2!3d23.4579191!4d120.1505305?hl=zh-TW&authuser=0",top_front_img_list[4],div1_img_list[4],div2_img_list[4]))
dessert_one.addEventListener("click", show_photo.bind(null,dessert_one,"甜在心饅頭"," 614嘉義縣東石鄉","11:00~19:00","(05)3733793","肉包、黑糖饅頭","https://www.google.com/maps?ll=23.471995,120.172946&z=16&t=m&hl=zh-TW&gl=US&mapclient=embed&q=23%C2%B028%2719.2%22N+120%C2%B010%2722.6%22E+23.471995,+120.172946@23.4719949,120.172946",top_front_img_list[5],div1_img_list[5],div2_img_list[5]))
dessert_two.addEventListener("click", show_photo.bind(null,dessert_two,"第三代古早味粉圓粉條冰"," 嘉義縣東石鄉東石5號附6","暫無資料","(05)3730289","粉圓冰、粉條冰","https://www.google.com/maps/place/%E7%AC%AC%E4%B8%89%E4%BB%A3%E5%8F%A4%E6%97%A9%E5%91%B3%E7%B2%89%E5%9C%93%E7%B2%89%E6%A2%9D%E5%86%B0/@23.4577187,120.1516345,15z/data=!4m2!3m1!1s0x0:0xbd345012f787f493?sa=X&ved=2ahUKEwi5q_GUka78AhUTr1YBHTvLB9AQ_BJ6BAhoEAg",top_front_img_list[6],div1_img_list[6],div2_img_list[6]))
close_card.addEventListener("click",close_photo)







// -------------------------function-------------------------
function show_line(which, class_name, i){
    top_line.appendChild(seafood_name_line)
    top_line.appendChild(seafood_name)
    seafood_name_line.classList.add(which)
    seafood_name.classList.add(class_name)
    seafood_name.textContent = seafood_name_list[i]
}

function hide_line(which, class_name){
    top_line.removeChild(seafood_name_line)
    top_line.removeChild(seafood_name)
    seafood_name_line.classList.remove(which)
    seafood_name.classList.remove(class_name)

}

function show_photo(food,name,addr,opened_time,pho,must,linker,img1,img2,img3){
    const photo_pos = food.getBoundingClientRect()
    food_name.textContent = "店名:"+name
    address.textContent = "地址:"+addr
    link.href = linker
    time.textContent = "營業時間:"+opened_time
    phone.textContent = "電話:"+pho
    must_order.textContent = "必點清單:"+must
    top_front.style.backgroundImage = "url("+img1+")"
    top_front_div1.style.backgroundImage = "url("+img2+")"
    top_front_div2.style.backgroundImage = "url("+img3+")"
    // --------top_line-------
    if(photo_pos.x < 280){
        food.animate([
            {transform: "rotate(-5deg)",opacity:"0.8"},
            {transform: "translateX(700px)",opacity:"0.1"},
            {transform:"scale(3,5)",opacity:"0"},

        ],
            {
                duration:2000,
                iterations:1,
                easing:"ease-In"
            }
        )
        ,top_card.animate([
            {transform: "rotateX(0deg) translateY(0%)"},
         ],
             {
                 duration:2000,
                 iterations:1,
                 easing:"linear",
                 fill:"forwards"
             }
         )
        ,card_container.animate([
           {opacity:"0"},
           {opacity:"0"},
           {opacity:"0.2"},
           {opacity:"0.6"},
           {opacity:"0.8"},
           {opacity:"1"},
        ],
            {
                duration:4000,
                iterations:1,
                easing:"linear",
                fill:"forwards"
            }
        ),card_container.style.zIndex = "102"
    }
    // ------------middle line----------
    else if(photo_pos.x < 800){
        food.animate([
            {transform: "rotate(-5deg)",opacity:"0.8"},
            {transform:"scale(3,5)",opacity:"0"},

        ],
            {
                duration:2000,
                iterations:1,
                easing:"ease-In"
            }
        )
        ,top_card.animate([
            {transform: "rotateX(0deg) translateY(0%)"},
         ],
             {
                 duration:2000,
                 iterations:1,
                 easing:"linear",
                 fill:"forwards"
             }
         )
        ,card_container.animate([
           {opacity:"0"},
           {opacity:"0"},
           {opacity:"0.2"},
           {opacity:"0.6"},
           {opacity:"0.8"},
           {opacity:"1"},
        ],
            {
                duration:4000,
                iterations:1,
                easing:"linear",
                fill:"forwards"
            }
        ),card_container.style.zIndex = "102"
    }
    // -----------bottom line---------------
    else{
        food.animate([
            {transform: "rotate(-5deg)",opacity:"0.8"},
            {transform: "translateX(-700px)",opacity:"0.1"},
            {transform:"scale(3,5)",opacity:"0"},

        ],
            {
                duration:2000,
                iterations:1,
                easing:"ease-In"
            }
        )
        ,top_card.animate([
            {transform: "rotateX(0deg) translateY(0%)"},
         ],
             {
                 duration:2000,
                 iterations:1,
                 easing:"linear",
                 fill:"forwards"
             }
         )
        ,card_container.animate([
           {opacity:"0"},
           {opacity:"0"},
           {opacity:"0.2"},
           {opacity:"0.6"},
           {opacity:"0.8"},
           {opacity:"1"},
        ],
            {
                duration:4000,
                iterations:1,
                easing:"linear",
                fill:"forwards"
            }
        ),card_container.style.zIndex = "102"
    }
}

function close_photo(){
    top_card.animate([
        {transform:"rotateX(-180deg) translateY(-70%)"}
     ],
         {
             duration:1000,
             iterations:1,
             easing:"ease-out",
             fill:"forwards"
         }
     )
     ,bottom_card.animate([
        {opacity:"0"}
     ],
         {
             duration:1000,
             iterations:1,
             easing:"ease-out"
         }
     ),
    card_container.animate([
        {opacity:"1"},
        {opacity:"0.9"},
        {opacity:"0.8"},
        {opacity:"0.2"},
        {opacity:"0"},
     ],
         {
             duration:1000,
             iterations:1,
             easing:"linear",
             fill:"forwards"
         }
     ),card_container.style.zIndex = "0"
}

