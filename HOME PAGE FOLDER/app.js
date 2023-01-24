let popup =  document.querySelector(".popup")
let page_content = document.querySelector('.page-content')
// let closebtn1 = document.getElementsByClassName("close-btn1")[0]

document.querySelector("#show-login").addEventListener("click", function addlogin() {
 popup.classList.add("active");
 page_content.classList.add('active')
})
// 

// sign up function
let signupbtn = document.getElementById('signup-btn')
let popupcontainer = document.getElementById('popup-container')
signupbtn.addEventListener( 'click' , () => {
  page_content.classList.add('active')
  popupcontainer.classList.add('active')
})

let signup_close = document.getElementById('close-btn')
signup_close.addEventListener( 'click' , () => {
  page_content.classList.remove("active")
  popupcontainer.classList.remove('active')
  popup.classList.remove('active')

})
let loginbtn = document.getElementById('submit-btn').addEventListener('click', fetch_func)


function fetch_func(){
  fetch('http://192.168.43.77/api/auth/login', {
    method: "post",
    headers : {"Content-Type": "application/json"},
    body: JSON.stringify({username: "@Israel", password:"123456"})
  })
  .then ((res) => console.log(res.text()))
  .catch(err => console.error(err));
}