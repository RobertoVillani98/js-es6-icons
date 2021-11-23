const card = [
	{name: 'cat', prefix: 'fa-', type: 'animal', family: 'fas', color: 'orange'},
	{name: 'crow', prefix: 'fa-', type: 'animal', family: 'fas', color: 'orange'},
	{name: 'dog', prefix: 'fa-', type: 'animal', family: 'fas', color: 'orange'},
	{name: 'dove', prefix: 'fa-', type: 'animal', family: 'fas', color: 'orange'},
	{name: 'dragon', prefix: 'fa-', type: 'animal', family: 'fas', color: 'orange'},
	{name: 'horse', prefix: 'fa-', type: 'animal', family: 'fas', color: 'orange'},
	{name: 'hippo', prefix: 'fa-', type: 'animal', family: 'fas', color: 'orange'},
	{name: 'fish', prefix: 'fa-', type: 'animal', family: 'fas', color: 'orange'},
	{name: 'carrot', prefix: 'fa-', type: 'vegetable', family: 'fas', color: 'green'},
	{name: 'apple-alt', prefix: 'fa-', type: 'vegetable', family: 'fas', color: 'green'},
	{name: 'lemon', prefix: 'fa-', type: 'vegetable', family: 'fas', color: 'green'},
	{name: 'pepper-hot', prefix: 'fa-', type: 'vegetable', family: 'fas', color: 'green'},
	{name: 'user-astronaut', prefix: 'fa-', type: 'user', family: 'fas', color: 'blue'},
	{name: 'user-graduate', prefix: 'fa-', type: 'user', family: 'fas', color: 'blue'},
	{name: 'user-ninja', prefix: 'fa-', type: 'user', family: 'fas', color: 'blue'},
	{name: 'user-secret', prefix: 'fa-', type: 'user', family: 'fas', color: 'blue'}
];

costruzioneCard(card);
//attribusice la funzione filterElements al change della select
document.getElementById("icons-filter").onchange = filterElements;




function costruzioneCard(arr) {
    //TODO: use for each
	for (let i = 0; i < arr.length; i++) {
		addCard(arr[i])
	}
}

function addCard(iCard) {
	const container = document.getElementById('container');
	container.innerHTML +=
		`
       <div class="card">
            <i class="${(iCard.family + ' ' + iCard.prefix + iCard.name)}" style= "color: ${iCard.color}"></i>
            <span>${iCard.name}</span>
        </div> 
		`
}

function filterElements (){
    //pulisce l'inner html
    const container = document.getElementById('container');
	container.innerHTML = "";
    //prende il valore dalla select
    let value = this.value;
	
    
    // console.log("value ---------> ",value);
    
    //filtra gli elementi selezionati in base al tipo scelto e li mette nell'arrray
    let newCardArr = card.filter((item)=> item.type===value);
    //fa vedere i nuovi elementi filtrati
    costruzioneCard(newCardArr);
}


