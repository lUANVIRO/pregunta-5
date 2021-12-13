function cargar(){
    axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
    .then(function (res) {
        let datos = res.data;
        for(var i in datos){
            if (datos.hasOwnProperty(i)) {
                var contenedor = document.createElement("div")
                var div = document.getElementById('principal')
                div.appendChild(contenedor)
                contenedor.innerHTML = datos[i].name + " vive en " + datos[i].city + "<br>";
                console.log(i)
            }
        }  
    })
    .catch()
}
