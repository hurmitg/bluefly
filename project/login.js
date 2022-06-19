let dataArrLS = JSON.parse(localStorage.getItem("userData")) || [];

document.querySelector("form").addEventListener("submit",signinFun)

function signinFun(event){
    event.preventDefault();

    let signinData = {
                       email:document.querySelector("#email").value,
                       password:document.querySelector("#password").value,
                     };
                     if(checkSignin(signinData.email,signinData.password)===true){
                        localStorage.setItem("signin",signinData)
                        alert("Signin Successfull")
                        window.location.href="index.html";
                     }else{
                        alert("Wrong username/Password");
                     }
}

function checkSignin(email,password){
    let filtered = dataArrLS.filter(function(element){
 return element.email===email && element.password===password; 
    });

    if(filtered.length>0){
        return true;
    }else{
        return false;
    }
}