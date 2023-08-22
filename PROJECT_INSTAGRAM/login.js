let eye_close=document.getElementById("eye_close_ab");
let password=document.getElementById("get_pwd");

eye_close.onclick = function(){
    if(password.type == "password"){
        password.type="text";
        eye_close.src="eye_open.png"
    }
    else{
        password.type="password";
        eye_close.src="eye_close.png"
    }
}
function log(){
    let my_name = "naveen_14_05";
    let my_pass = "Naveen.123"

    let user_name = ((document.getElementById('get_id')).value);
    let pass = ((document.getElementById('get_pwd')).value);
    if(my_name !== user_name || my_pass !== pass)
    {
        if(user_name !== ''&& pass !== ''){
            document.getElementById('error').innerHTML = "Sorry, your password was incorrect. Please double-check your password."
        }
        
    }
    else{
        window.open("firstpage.html");
    }
    console.log(user_name , pass)
    
}

const form = document.getElementById('formid');

function submitForm(event) {
    event.preventDefault();
 }
 form.addEventListener('submit', submitForm);