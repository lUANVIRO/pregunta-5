var contenedor = document.createElement("div")
var div = document.getElementById('principal')
div.appendChild(contenedor)

axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
.then(function (res) {
    let datos = res.data;
    for(i in datos){
        contenedor.innerHTML = datos[i].name + " vive en " + datos[i].city + "<br>";
    }
    
})
.catch()

