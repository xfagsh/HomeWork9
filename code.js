// При нажатии на кнопку пропадает панель с куками
let cookie__wrapper = document.querySelector(".cookie__wrapper");
let cookie__wrapper__button = document.querySelector(".cookie__wrapper__button");

let promo__wrapper_btn = document.querySelector(".promo__wrapper_btn")
let wrapper_form = document.querySelector(".wrapper_form")
// let form= document.querySelector("form");
let cross = document.querySelector("i")


cookie__wrapper__button.onclick = () =>{
    cookie__wrapper.style.display = "none";
}

promo__wrapper_btn.onclick = () => {
    wrapper_form.style.display = "block";
}

cross.onclick = () => {
    wrapper_form.classList.add("anim_gone");
    setTimeout(() => {
        wrapper_form.style.display ="none";
        wrapper_form.classList.remove("anim_gone");
    }, 950);
    // wrapper_form.style.display = "none";
}


