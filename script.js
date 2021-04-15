fetch('http://localhost:3000/api/teddies') /*+localStorage.getItem("idCourrant"))*/
.then(res => res.json())
.then( (r)=>{
	let el = []
	for (let bc of r)
	{	
		el.push(document.createElement("div"));
		el[el.length-1].className = "description";
		document.querySelector(".container").appendChild(el[el.length-1]);
		
		let img = document.createElement("img");
		img.src = bc.imageUrl;   
		el[el.length-1].appendChild(img);

		let pNom = document.createElement("p");
		pNom.textContent = 'Nom : ' + bc.name;
		el[el.length-1].appendChild(pNom);
		
		let pPrix = document.createElement("p");
		pPrix.textContent = 'Prix : ' + bc.price + '€';
		el[el.length-1].appendChild(pPrix);

		el[el.length-1].onclick = () => {
		localStorage.setItem("idCourrant", bc._id);
		location.href = "ours/ours.html";	
	}
	}
	
	let panier = JSON.parse (localStorage.getItem("panier"));
		console.log(panier.length);
	
	let pPanier = document.createElement("strong");
	pPanier.textContent = panier.length;
	pPanier.className= "nb_panier"
	let home = document.getElementById("panier");
	home.appendChild(pPanier);

	
	
		/* el.push(document.createElement("div"))
		el[el.length-1].innerHTML = "<img src=" + bc.imageUrl + "";
		document.querySelector(".container").appendChild(el[el.length-1]);

	*/	

	


		 /*el.push(document.createElement("img"))
		el[el.length-1].textContent = bc.imageUrl;
		document.querySelector(".container").appendChild(el[el.length-1]);
		el.push(document.createElement("div"))
		document.querySelector(".container").appendChild(el[el.length-1]); */
}
)












/*  =====================================================================================================
EXEMPLE API 
const img = document.getElementById('img');

fetch('https://api.thecatapi.com/v1/images/search/11')
	.then(res => {
		if(res.ok){
			res.json().then(data => {
				img.src = data[0].url
			})
		} else {
			console.log("ERREUR");
			document.getElementById('apifail').innerHTML = "Une erreur est survenue avec l'api."
		}
	})
	.then(data => img.src = data[0].url)
=====================================================================================================================
	*/