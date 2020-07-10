var beersJson = 'https://raw.githubusercontent.com/pablz/logourl/master/beers.json',
assetsJson = 'https://raw.githubusercontent.com/pablz/logourl/master/assets.json'
assetsArr = [],
beersArr = [];

(()=>{
    getBeers();
    getAssets();
})();

function getBeers(){ // Consumir un json de modo asíncrono con fetch api
    fetch(beersJson)
    .then(response =>{
            return response.json(); // El método json() extrae el cuerpo del recurso solicitado
    })
    .then(data => { // Data son los datos del response
        // console.log(data);
        beersArr.push(data);
    })
    .catch(error => { // Captura si hubo un error en la petición
        console.log(error);
    })
    .finally(()=>{ // Fynally nos permite hacer algo si todo salió bien
        console.log('Llegó la birra!'); 
    })
}

function getAssets(){
    fetch(assetsJson)
    .then(response =>{
            return response.json();
    })
    .then(data => {
        // console.log(data);
        assetsArr.push(data);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(()=>{
        console.log('Listo los assets!'); 
    })
}





