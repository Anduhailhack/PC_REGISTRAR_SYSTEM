let login_popup = document.querySelector(".login-popup");
let signup_popup = document.querySelector(".signup-popup");
let page_content = document.querySelector('.page-content');

// if (document.querySelector("#show-login"))
document.querySelector("#show-login").addEventListener("click", () => {
    login_popup.classList.add("active");
    page_content.classList.add('active');
})

// if (document.querySelector('#close-login-popup'))
document.querySelector("#close-login-popup").addEventListener( 'click' , () => {
    page_content.classList.remove("active")
    login_popup.classList.remove('active')
})

// if (document.querySelector('#signup-btn'))
document.querySelector('#signup-btn').addEventListener('click' , () => {
    signup_popup.classList.add("active");
    page_content.classList.add('active')
})

// if (document.querySelector('#close-signup-popup'))
document.querySelector("#close-signup-popup").addEventListener( 'click' , () => {
    page_content.classList.remove("active")
    signup_popup.classList.remove('active')
})

// if (document.querySelector('#submit-login'))
document.querySelector("#submit-login").addEventListener('click', () => {
    const username = document.querySelector("#user").value;
    const password = document.querySelector("#pass").value;
    if (validateLogin(username, password))
    {
        fetch('/api/auth/login', {
            method: "POST",
            headers: {"Accept": 'application/json', "Content-Type" : "application/json"},
            body : JSON.stringify({username: username, password : password})
        }).then((resp) => {
            resp.json().then((data) => {
                if (data.status === 'success'){
                    window.location.href = data.route
                }else    
                    document.querySelector(".warning-txt").innerText = data.msg;
            }).catch((err) => {
                document.querySelector(".warning-txt").innerText = "Invalid response from server: " + err;
            })
        }).catch((err)=> {
            err.json().then((data) => {
                alert("Unknown error: " + data)
            }).catch((err)=>{
                alert("Unknown error: " + err)
            })
        })
    }
})

// if (document.querySelector(".user-avatar"))
// document.querySelector(".user-avatar").addEventListener('click', (event)=> {
//     var click = document.querySelector(".list-items");  
//     if(click.style.display === "none") {  
//         click.style.display ="block";  
//     } else {  
//         click.style.display ="none";  
//     } 
//     console.log(event);  
// })

// if (document.querySelector('#submit-signup'))
document.querySelector("#submit-signup").addEventListener('click', () => {
    const username = document.querySelector("#user-signup").value;
    const password = document.querySelector("#pass-signup").value;
    const con_password = document.querySelector("#confirm-pass-signup").value;
    const email = document.querySelector("#email-signup").value;

    if (validateSignup(username, email, password, con_password))
    {
        fetch('/api/auth/signup', {
            method: "POST",
            headers: {"Accept": 'application/json', "Content-Type" : "application/json"},
            body : JSON.stringify({username: username, email: email, password : password})
        }).then((resp) => {
            resp.json().then((data) => {
                console.log(data);
                if (data.status === 'success'){
                    window.location.href = data.route
                }else    
                    document.querySelector(".warning-txt").innerText = data.msg;
            }).catch((err) => {
                document.querySelector(".warning-txt").innerText = "Invalid response from server: " + err;
            })
        }).catch((err)=> {
            err.json().then((data) => {
                alert("Unknown error: " + data)
            }).catch((err)=>{
                alert("Unknown error: " + err)
            })
        })
    }
})


function validateLogin(username, password)
{
    // document.querySelector(".warning-txt").classList.remove("warning-input");
    document.querySelector(".warning-txt").innerText = "";
    
    if (username.length < 5 || username.length > 15)
    {
        // document.querySelector("#user").classList.add("warning-input");
        document.querySelector(".warning-txt").innerText = "Invalid username : username should be more than 5 and less than 15 characters!";
        return false;
    }

    if (!(/^@([A-Za-z])[A-Za-z0-9]/.test(username)))
    {
        // document.querySelector("#user").classList.add("warning-input");
        document.querySelector(".warning-txt").innerText = "Invalid username : username should start with '@' character followed by UPPERCASE or lowercase letter!";
        return false;
    }

    if (password.length < 6)
    {
        // document.querySelector("#pass").classList.add("warning-input");
        document.querySelector(".warning-txt").innerText = "Invalid password: invalid length of password!";
        return false;
    }

    return true;
} 

function validateSignup(username, email, password, con_password)
{
    // document.querySelector(".warning-txt").classList.remove("warning-input");
    document.querySelector(".warning-txt").innerText = "";
    
    if (username.length < 5 || username.length > 15)
    {
        // document.querySelector("#user").classList.add("warning-input");
        
        console.log("Username tesst 1");
        document.querySelector(".warning-txt").innerText = "Invalid username : username should be more than 5 and less than 15 characters!";
        return false;
    }

    if (!(/^@([A-Za-z])[A-Za-z0-9]/.test(username)))
    {
        // document.querySelector("#user").classList.add("warning-input");
        
        console.log("Username test 2");
        document.querySelector(".warning-txt").innerText = "Invalid username : username should start with '@' character followed by UPPERCASE or lowercase letter!";
        return false;
    }

    if (email.length < 8 )
    {
        // document.querySelector("#user").classList.add("warning-input");
        
        console.log("Email test 1");
        document.querySelector(".warning-txt").innerText = "Invalid email : please enter a valid email!";
        return false;
    }

    // if (!(/^([A-Za-z])(._)[A-Za-z0-9]^@([A-Za-z])(.[A-Za-z])/).test(email))
    // {
        
    //     console.log("Email test 2");
    //     document.querySelector(".warning-txt").innerText = "Invalid email : please enter a valid email!";
    //     return false;
    // }

    if (password.length < 6)
    {
        // document.querySelector("#pass").classList.add("warning-input");
        console.log("Password test 1");
        document.querySelector(".warning-txt").innerText = "Invalid password: invalid length of password!";
        return false;
    }

    if (password !== con_password)
    {
        console.log("Password test 2");
        document.querySelector(".warning-txt").innerText = "Invalid password: password field and confirm password field should match!";
        return false;
    }

    return true;
} 