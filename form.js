
const form = document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(name.value.length < 3){
        document.querySelector("label[for='name']").classList.add("error");
    }
    else{
        document.querySelector("label[for='name']").classList.remove("error");
    }
    if(email.value.length < 3){
        document.querySelector("label[for='email']").classList.add("error");
    }
    else{
        document.querySelector("label[for='email']").classList.remove("error");
    }
    if(subject.value.length < 3){
        document.querySelector("label[for='subject']").classList.add("error");
    }
    else{
        document.querySelector("label[for='subject']").classList.remove("error");
    }
    if(message.value.length < 3){
        document.querySelector("label[for='message']").classList.add("error");
    }
    else{
        document.querySelector("label[for='message']").classList.remove("error");
    }
})