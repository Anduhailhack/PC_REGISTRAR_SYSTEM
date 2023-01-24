let login_popup = document.querySelector(".login-popup");
let signup_popup = document.querySelector(".signup-popup");
let page_content = document.querySelector('.page-content');

document.querySelector("#show-login").addEventListener("click", () => {
    login_popup.classList.add("active");
    page_content.classList.add('active')
})

document.querySelector("#close-login-popup").addEventListener( 'click' , () => {
    page_content.classList.remove("active")
    login_popup.classList.remove('active')
})

document.querySelector('#signup-btn').addEventListener('click' , () => {
    signup_popup.classList.add("active");
    page_content.classList.add('active')
})

document.querySelector("#close-signup-popup").addEventListener( 'click' , () => {
    page_content.classList.remove("active")
    signup_popup.classList.remove('active')
})
