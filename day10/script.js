const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const loginMsg=document.getElementById("login-msg")
const form=document.getElementById("login-form")


form.addEventListener("submit" ,(e)=>{
    e.preventDefault()
    
    const mail=email.value.trim()
    const name=username.value.trim()


    if (!name || !mail || !password){
        loginMsg.innerText=`fill all required details`
        loginMsg.style.color="red"
        return;
    }
    loginMsg.innerText=`Welcome ${name} , ${mail}`
    loginMsg.style.color="green"


})