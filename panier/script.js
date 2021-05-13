formulaire.onsubmit = (e) => {
  localStorage.setItem("total",total);
  e.preventDefault();
  let products = [];
  for (let cur of JSON.parse(localStorage.getItem("panier"))) {
    products.push(cur._id);
  }
  const firstName = e.target[0].value;
  const lastName = e.target[1].value;
  const address = e.target[2].value;
  const city = e.target[3].value;
  const email = e.target[4].value;
  console.log(firstName, lastName, address, city, email);

  let form = JSON.stringify( {
    contact: {
      firstName,
      lastName,
      address,
      city,
      email,
    },
    products: products,
  });
  console.log(form);

  let postOptions = {
    method: "POST",
    body: form,
    headers: {
      "Content-Type": "application/json"
    },
  }

  fetch("http://localhost:3000/api/teddies/order", postOptions)
  
  .then((response) => response.json())
  .then((json) => {
    console.log(json)

    localStorage.setItem("order_Id","["+JSON.stringify(json)+"]");
    location.href="../order/order.html"

  })
};

let panier = JSON.parse(localStorage.getItem("panier"));
console.log(panier.length);
let pPanier = document.createElement("strong");
pPanier.textContent = panier.length;
pPanier.className = "nb_panier";
let home = document.getElementById("panier");
home.appendChild(pPanier);

let total = 0;
let el = [];
for (let bc of JSON.parse(localStorage.getItem("panier"))) {
  el.push(document.createElement("div"));
  el[el.length - 1].className = "description";
  document.querySelector(".container").appendChild(el[el.length - 1]);

  let img = document.createElement("img");
  img.src = bc.imageUrl;
  img.className = "img";
  el[el.length - 1].appendChild(img);

  let pNom = document.createElement("p");
  pNom.textContent = "Nom : " + bc.name;
  el[el.length - 1].appendChild(pNom);

  let pPrix = document.createElement("p");
  pPrix.textContent = "Prix : " + bc.price + "€";
  el[el.length - 1].appendChild(pPrix);

  total = total + bc.price;


}

console.log(total);

let pDivTotal = document.createElement("div");
pDivTotal.className = "DivTotal";
document.querySelector(".container").appendChild(pDivTotal);

let pText = document.createElement("p");
pText.textContent = "Prix total à payer : ";
pText.className = "total";
pDivTotal.appendChild(pText);

let pTotal = document.createElement("p");
pTotal.textContent = total + "€";
pTotal.className = "total";
pDivTotal.appendChild(pTotal);
