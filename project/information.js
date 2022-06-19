
let cartArr = JSON.parse(localStorage.getItem("cartData")) || [];

let main = document.querySelector("#infoCart");

let final = 0;

displayCartInInfo(cartArr);
function displayCartInInfo(data){
    let total = 0;

    main.innerHTML = "";

    // Rendering elements from cartArray from localstorage.
    data.forEach(function (elem, index) {
        total += elem.price*elem.count;

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
    })
    final = total.toFixed(2);
    document.querySelector(".total").innerText = final;
    document.querySelector(".discounted").innerText = final;
} // All items rendered.



document.querySelector("#apply").addEventListener("click", applyPromo);
    let promoCount = 0;
    let discount = 0;
    localStorage.setItem("total", final-discount)
    let p = document.querySelector("#promo>p");


function applyPromo(){
        let code = document.querySelector("#promo>input").value;
        if(code == "BF30" && promoCount<1){
            promoCount++;
            discount = final*0.3;
            document.querySelector("#apply").innerText = "Applied✔";
            document.querySelector("#apply").style.backgroundColor = "green";
             document.querySelector(".discount").innerText = "-" + discount;
             document.querySelector(".discounted").innerText = "$ " + (final-discount).toFixed(2);
             p.innerText = "*Promocode Applied Successfully*";
             p.style.color = "green"
        } 
        else{
            p.innerText = "*Invalid Input, Please try again*";
            p.style.color = "red"
        }
        localStorage.setItem("total", final-discount)
}


    let form = document.querySelector("#infoForm");
    form.addEventListener('submit', adressFun);

function adressFun(){
        event.preventDefault();
        let name = document.querySelector("#firstName").value + document.querySelector("#lastName").value;
        let address = document.querySelector("#optionalAdress").value + ", " + document.querySelector("#address").value;
        let city = document.querySelector("#city").value;
        let state = document.querySelector("#state").value;
        let country = document.querySelector("#country").value;
        let zip = document.querySelector("#zip").value;
        let phone = document.querySelector("#phone").value;
        
        let details = [name, address, city+", "+state, zip, phone];

        localStorage.setItem("address", JSON.stringify(details));

        form.reset();
        window.location.href = "payment.html"
}



document.querySelector("#infoBox>div:nth-child(2)>span").addEventListener('click', back)
document.querySelector("#formBottom>p").addEventListener('click', back)

function back(){
    window.location.href = "cartPopup.html"
}