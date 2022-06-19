let details = JSON.parse(localStorage.getItem("address"));
console.log(details);

displaAddress(details);
function displaAddress(details){

    details.forEach(function(elem) {
        data = elem;
        
    document.querySelector("#details").innerHTML += `<span>${data}</span>`;
    });
}



let cartArr = JSON.parse(localStorage.getItem("cartData")) || [];

let main = document.querySelector("#infoCart");
    
let final = Number(localStorage.getItem("total"));


displayCartInInfo(cartArr);
function displayCartInInfo(data){

    main.innerHTML = "";

    // Rendering elements from cartArray from localstorage.
    data.forEach(function (elem, index) {

     let item = document.createElement("div"); // Every new product inside this.

     item.setAttribute("class", "infoItem");

            let imgDiv = document.createElement("div");
                let image = document.createElement("img");
                image.setAttribute("src", elem.img_url);

                let p = document.createElement("p");
                p.innerText = elem.count;

                imgDiv.append(image, p);


            let nameP = document.createElement("div");
                    nameP.innerText = elem.name;
                
            let priceP = document.createElement("div");
                        priceP.innerText = "$" + elem.price;
                
                

        item.append(imgDiv, nameP, priceP);

     main.append(item); // Appending products
     document.querySelector(".discounted").innerText = "$ " +final.toFixed(2);
    })
} // All items rendered.


let btn = document.querySelector("#formBottom>button");
btn.addEventListener("click", submit);

function submit(){
    let card = document.querySelector("#cardNumber").value;
    let name = document.querySelector("#cardName").value;
    let date = document.querySelector("#cardDate").value;
    let cvv = document.querySelector("#cvv").value;

    if(card=="" || name=="" || date=="" || cvv==""){
        alert("Please Enter Correct Details")
    } 
    else {
        window.location.href = "pay.html";
    }
}
