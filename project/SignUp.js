
document.querySelector("form").addEventListener("submit",createFun);
let dataArr=JSON.parse(localStorage.getItem("userData")) || [];
function createFun(){
  event.preventDefault();

  let dataObj = {first_name:document.querySelector("#fname").value,
                 last_name:document.querySelector("#lname").value,
                 email:document.querySelector("#email").value,
                 password:document.querySelector("#password").value,
                } ;
                if(checkEmail(dataObj.email)===true){
                  alert("Account Successfully Created");
                  window.location.href="login.html";
                  dataArr.push(dataObj)
                  localStorage.setItem("userData",JSON.stringify(dataArr));
                }else{
                  let p = document.querySelector("#alert")
                  p.innerText="This Email is already Registered";
                  p.style.color="red"
                  p.style.fontSize="20px"
                  
                }           
}
function checkEmail(email){
  let filtered = dataArr.filter(function(element){
    return email===element.email
  });
  if(filtered.length>0){
    return false;
  }else{
     return true;
  }
}
 
 
 
