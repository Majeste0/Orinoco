fetch('http://localhost:3000/api/teddies/' + localStorage.getItem("idCourrant")) 
.then(res => res.json())
.then( (r)=>{
	let el = []

		el.push(document.createElement("div"));
		el[el.length-1].className = "image";
		document.querySelector(".container").appendChild(el[el.length-1]);
		
		let img = document.createElement("img");
		img.src = r.imageUrl;   
		el[el.length-1].appendChild(img);
		
		el.push(document.createElement("div"));
		el[el.length-1].className = "description";
		document.querySelector(".container").appendChild(el[el.length-1]);

		let pNom = document.createElement("p");
		pNom.textContent = 'Nom : ' + r.name;
		el[el.length-1].appendChild(pNom);

		let pDescription = document.createElement("p");
		pDescription.textContent = 'Description : ' + r.description;
		el[el.length-1].appendChild(pDescription);
		
		let pCouleurs = document.createElement("p");
		pCouleurs.textContent = 'Couleurs : ';
		el[el.length-1].appendChild(pCouleurs);

		let sel = document.createElement("select");
		sel.className = "color";
	
		for(let cur of r.colors)
		{
			let opt = document.createElement("option");
 			opt.textContent = cur;
 			sel.appendChild(opt);
		}
		el[el.length-1].appendChild(sel);


	let pPrix = document.createElement("p");
	pPrix.textContent = 'Prix : ' + r.price + '€';
	el[el.length-1].appendChild(pPrix);

	let panier = JSON.parse (localStorage.getItem("panier"));
	if(localStorage.getItem("panier")) {
		console.log(panier.length);
	
	
	let pPanier = document.createElement("strong");
	pPanier.textContent = panier.length;
	pPanier.className = "nb_panier"
	let home = document.getElementById("panier");
	home.appendChild(pPanier);
	}
	
	let Button = document.createElement("button");
	Button.textContent = 'Ajouter au panier';
	el[el.length-1].appendChild(Button);
	
	let addLocal = ()=> {
		if(localStorage.getItem("panier"))
		{
			let temp = JSON.parse (localStorage.getItem("panier"));
			temp.push(r);
			localStorage.setItem("panier",JSON.stringify(temp));
			panier.length++;
			location.reload();
			
		}
		else localStorage.setItem("panier","["+JSON.stringify(r)+"]");
		location.reload();
	}	
		Button.onclick = () => {
		addLocal();
		}
	
	let Delete = document.createElement("button");
	Delete.textContent = 'Vider le panier';
	Delete.className = "delete";
	el[el.length-1].appendChild(Delete);
	Delete.onclick = () => {
	console.log(panier.length);
	location.reload();
	}

	})

	

