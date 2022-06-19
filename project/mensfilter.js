
/******filter brands*****/


let brand = document.createElement("form");
brand.id = "brand";
brand.style.display = "grid";
brand.style.justifyContent = "space-evenly";
brand.innerText = "Brands";
brand.fontSize = "15px";
brand.style.gap = "2px";

let category = document.createElement("div");

let obj1 = {};

showfilter(mens);

function showfilter(data) {

  data.forEach(element => {

    if (obj1[element.brand_name] == undefined) {
      obj1[element.brand_name] = element.brand_name;


      let input = document.createElement("input");
      input.type = "checkbox";
      input.id = element.brand_name;
      input.value = element.brand_name;

      let label = document.createElement("label");
      label.setAttribute("for", element.brand_name);
      label.innerText = element.brand_name;
      label.style.fontSize = "10px";

      let div = document.createElement("div");
      div.append(input, label);
      brand.append(div);

    }

  });
}


let filtered = [];

document.querySelector("#filter").append(brand);

let checkboxes = document.querySelectorAll("#brand input");


checkboxes.forEach(elem => {
  elem.addEventListener("click", function () {


    if (this.checked == true) {

      let val = event.target.value;

      mens.forEach(function (elem) {
        if (val == elem.brand_name)
          filtered.push(elem);
      })

      console.log(filtered);

      displayProduct(filtered);

    }
    else {

      let val = event.target.value;

      filtered = filtered.filter(function (elem) {
        return elem.brand_name != val;
      })


      displayProduct(filtered);
    }

    if (filtered.length == 0) {
      console.log("in");
      window.location.reload();
    }


  });

})


/********filter price******/


let price = document.createElement("form");
price.id = "price";
price.style.display = "grid";
price.style.justifyContent = "space-evenly";
price.innerText = "Filter by price";
price.fontSize = "20px";
price.style.gap = "2px";
price.style.margin = "30px 0px";



let lowinput = document.createElement("input");
lowinput.type = "checkbox";
lowinput.id = "low";
lowinput.value = 1000;

let label1 = document.createElement("label");
label1.setAttribute("for", "low");
label1.innerText = "-$1000";
label1.style.fontSize = "13px";

let div1 = document.createElement("div");
div1.append(lowinput, label1);
price.append(div1);




let mediuminput = document.createElement("input");
mediuminput.type = "checkbox";
mediuminput.id = "low";
mediuminput.value = 2000;

let label2 = document.createElement("label");
label2.setAttribute("for", "medium");
label2.innerText = "-$2000";
label2.style.fontSize = "13px";

let div2 = document.createElement("div");
div2.append(mediuminput, label2);
price.append(div2);





let highinput = document.createElement("input");
highinput.type = "checkbox";
highinput.id = "low";
highinput.value = 3000;

let label3 = document.createElement("label");
label3.setAttribute("for", "high");
label3.innerText = "$2000+";
label3.style.fontSize = "13px";

let div3 = document.createElement("div");
div3.append(highinput, label3);
price.append(div3);

document.querySelector("#filter").append(price);

let filterboxes = document.querySelectorAll("#price input");

let filtered1 = [];

filterboxes.forEach(elem => {
  elem.addEventListener("click", function () {
    if (this.checked == true) {

      let val = event.target.value;

      if (val <= 2000) {
        mens.forEach(function (elem) {
          if (val <= elem.price)
            filtered1.push(elem);
        })

        console.log(filtered1);

        displayProduct(filtered1);
      }
      else {
        mens.forEach(function (elem) {
          if (val >= elem.price)
            filtered1.push(elem);
        })

        displayProduct(filtered1);
      }

    }
    else {
      let val = event.target.value;

      if (val <= 2000) {
        filtered1 = filtered1.filter(function (elem) {
          return elem.price <= val;
        })


        displayProduct(filtered1);
      }
      else {
        filtered1 = filtered1.filter(function (elem) {
          return elem.price >= val;
        })

        displayProduct(filtered1);
      }
    }

    if(filtered1.length==0)
    {
      window.location.reload();
    }

  });
})