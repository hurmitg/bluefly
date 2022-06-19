


let main = document.querySelector("#main");
let cartArr = JSON.parse(localStorage.getItem("cartData")) || [];


// Initialising Main Variables
let cartButton = document.getElementById("cartButton");
let closePopup = document.getElementById("popupclose");
let overlay = document.getElementById("overlay");
let popup = document.getElementById("popup");

// Show Overlay and Popup(cart)
cartButton.onclick = function () {
    document.querySelector("body").setAttribute('class', 'stop-scrolling');
    overlay.style.display = 'block';
    popup.style.display = 'flex';
    cartInititalise();
}

// Close Popup Event
closePopup.onclick = function () {
    document.querySelector("body").removeAttribute('class', 'stop-scrolling')
    overlay.style.display = 'none';
    popup.style.display = 'none';
    popupContent.setAttribute("class", "popupcontent");
};





function cartInititalise() {

    //Variables Inside Cart popup
    let popupContent = document.querySelector("#popup>div:nth-child(2)");
    let popupBottom = document.querySelector(".popupBottom");
    let cartArray = JSON.parse(localStorage.getItem("cartData"));

    displayCart(cartArray);

    function displayCart(cartArray) {

        popupContent.removeAttribute("class", "popupcontent");
    popupContent.innerHTML = "<p>Your cart is currently empty.</p>"
    popupBottom.style.display = "none";

        let total = 0; // To determine subtotal

        if (cartArray.length == 0) {
            popupContent.removeAttribute("class", "popupcontent");
            popupContent.innerHTML = "<p>Your cart is currently empty.</p>"
            popupBottom.style.display = "none";
        } else {
            popupContent.setAttribute("class", "popupcontent");
            popupBottom.style.display = "block";
            document.querySelector("#checkoutButton").addEventListener('click', ()=>{
                window.location.href = "information.html";
            })

            popupContent.innerHTML = "";

            // Rendering elements from cartArray from localstorage.
            cartArray.forEach(function (elem, index) {
                total += (elem.price*elem.count);

             let popupCartItem = document.createElement("div"); // Every new product inside this.

                popupCartItem.setAttribute("class", "popupCartItem");

                    let imgDiv = document.createElement("div");
                        let image = document.createElement("img");
                        image.setAttribute("src", elem.img_url);
                        imgDiv.append(image);


                    let infoDiv = document.createElement("div");

                        let nameP = document.createElement("p");
                            nameP.innerText = elem.name;

                        let div = document.createElement("div"); // For quanity and product price.

                            let buttonsDiv = document.createElement("div"); // Quantity toggle

                                let DecBtn = document.createElement("button");
                                    DecBtn.setAttribute('class', 'decButton')
                                    DecBtn.addEventListener("click", function () {
                                        decreaseFun(elem, index);
                                    });
                                    DecBtn.innerText = "-";
                            
                                let divSpan = document.createElement("span");
                                    divSpan.innerText = elem.count;
                            
                                let IncBtn = document.createElement("button");
                                    IncBtn.setAttribute('class', 'incButton')
                                    IncBtn.addEventListener("click", function () {
                                        increaseFun(elem);
                                    });
                                    IncBtn.innerText = "+";

                                buttonsDiv.append(DecBtn, divSpan, IncBtn);
                        
                            let priceP = document.createElement("p");
                                priceP.innerText = "$" + elem.price;
                        
                        div.append(buttonsDiv, priceP);
                        
                    infoDiv.append(nameP, div);

                popupCartItem.append(imgDiv, infoDiv);

             popupContent.append(popupCartItem); // Appending products
            })
            
        let final = total.toFixed(2);
        document.querySelector(".cartTotal").innerText = "$" + final;
        } // All items rendered.
  }

    // Increasing quantity function 
    function increaseFun(elem) {
        elem.count++;
        displayCart(cartArr);
        localStorage.setItem("cartData", JSON.stringify(cartArr))
    }

    // Decreasing quantity function 
    function decreaseFun(elem, index) {
        if (elem.count > 0) {
            elem.count--;
        }
        if (elem.count == 0) {
            removeFun(elem, index);
            popupContent.innerHTML = "<p>Your cart is currently empty.</p>"
        }
        displayCart(cartArr);
        localStorage.setItem("cartData", JSON.stringify(cartArr))
    }

    function removeFun(elem, index) {
        cartArr.splice(index, 1);
        displayCart(cartArr);
        localStorage.setItem("cartData", JSON.stringify(cartArr))
    }
}