const mark_btn = document.querySelector(".mark_btn")
const noti_div = document.querySelectorAll(".noti_div")
const red_dot = document.querySelectorAll(".red_dot")
const noti_num = document.querySelector(".noti_num")

mark_btn.addEventListener("click", ()=>{
    noti_div.forEach(element => {
        element.style.backgroundColor = "#fff"
    });
    red_dot.forEach(element => {
        element.style.display = "none"
    })
    noti_num.style.display = "none"
})