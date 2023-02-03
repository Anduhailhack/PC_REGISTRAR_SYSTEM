document.querySelector(".user-avatar").addEventListener('click', (event)=> {
    var click = document.querySelector(".list-items");  
    if(click.style.display === "none") {  
        click.style.display ="block";  
    } else {  
        click.style.display ="none";  
    } 
    console.log(event);  
})