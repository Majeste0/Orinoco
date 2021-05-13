let panier = JSON.parse(localStorage.getItem("panier"));
let textPanier = document.createElement("strong");
textPanier.textContent = panier.length;
nb_panier.appendChild(textPanier);

let total = localStorage.getItem("total");
let textTotal = document.createElement("strong");
textTotal.textContent = total + " €";
prixTotal.appendChild(textTotal);

let order = JSON.parse(localStorage.getItem("order_Id"));
let textOrder = document.createElement("strong");
textOrder.textContent = order[0].orderId;
num_order.appendChild(textOrder);