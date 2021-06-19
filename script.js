// Requête GET vers l'API
fetch("http://localhost:3000/api/teddies")
  .then((res) => res.json())
  .then((r) => {
    let el = [];
    // Boucle de création d'éléments
    for (let bc of r) {
      el.push(document.createElement("div"));
      el[el.length - 1].className = "description";
      document.querySelector(".container").appendChild(el[el.length - 1]);

      let img = document.createElement("img");
      img.src = bc.imageUrl;
      el[el.length - 1].appendChild(img);

      let pNom = document.createElement("p");
      pNom.textContent = bc.name;
      el[el.length - 1].appendChild(pNom);

      let pPrix = document.createElement("p");
      pPrix.textContent = bc.price + "€";
      el[el.length - 1].appendChild(pPrix);

      el[el.length - 1].onclick = () => {
        localStorage.setItem("idCourrant", bc._id);
        location.href = "ours/ours.html";
      };
    }
    // Gestion du nombre d'éléments dans le panier
    let panier = JSON.parse(localStorage.getItem("panier"));
    console.log(panier.length);

    let pPanier = document.createElement("strong");
    pPanier.textContent = panier.length;
    pPanier.className = "nb_panier";
    let home = document.getElementById("panier");
    home.appendChild(pPanier);
  });
