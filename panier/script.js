			formulaire.onsubmit = (event) => {
			event.preventDefault();
			let form = JSON.stringify ({contact:{firstName:"test",lastName:"test",email:"test@test.com",address:"test",city:"test"},products:['5be9c8541c9d440000665243']})
			fetch("http://localhost:3000/api/teddies/order", {
				method: "post",
				headers: {
					'Content-Type': 'application/json'
				  },
				body: form
			}) 
		}
		
		let panier = JSON.parse (localStorage.getItem("panier"));
		console.log(panier.length);
		let pPanier = document.createElement("strong");
		pPanier.textContent = panier.length;
		pPanier.className= "nb_panier"
		let home = document.getElementById("panier");
		home.appendChild(pPanier);



		let norbert = 0, arnold = 0, lennycarl = 0, gustav = 0, garfunkel = 0;

	for (let i = 0; i < panier.length; ++i){
		if(panier[i]._id == '5be9c8541c9d440000665243')
		norbert++;
		if(panier[i]._id == '5beaa8bf1c9d440000a57d94')
		arnold++;
		if(panier[i]._id == '5beaa8bf1c9d440000a57d95')
		lennycarl++;
		if(panier[i]._id == '5beaabe91c9d440000a57d96')
		gustav++;
		if(panier[i]._id == '5beaacd41c9d440000a57d97')
		garfunkel++;
		console.log(i);
	}
	console.log(norbert,arnold,lennycarl,gustav,garfunkel);
	
	
	
	let total = 0;
	let el = []
	for (let bc of JSON.parse (localStorage.getItem("panier")))
	{	

		el.push(document.createElement("div"));
		el[el.length-1].className = "description";
		document.querySelector(".container").appendChild(el[el.length-1]);
		
		let img = document.createElement("img");
		img.src = bc.imageUrl;
		img.className = "img";   
		el[el.length-1].appendChild(img);

		let pNom = document.createElement("p");
		pNom.textContent = 'Nom : ' + bc.name;
		el[el.length-1].appendChild(pNom);
	
		let pPrix = document.createElement("p");
		pPrix.textContent = 'Prix : ' + bc.price + '€';
		el[el.length-1].appendChild(pPrix);
		
		total = total + bc.price;
	}
	
	console.log(total);

	let pDivTotal = document.createElement ("div");
	pDivTotal.className = "DivTotal";
	document.querySelector(".container").appendChild(pDivTotal);

	let pText = document.createElement ("p");
	pText.textContent = 'Prix total à payer : ';
	pText.className = "total";
	pDivTotal.appendChild(pText);

	let pTotal = document.createElement ("p");
	pTotal.textContent = total + '€';
	pTotal.className = "total";
	pDivTotal.appendChild(pTotal);


	
	
