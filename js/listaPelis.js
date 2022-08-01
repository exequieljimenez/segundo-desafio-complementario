// la función ingresarOpcion() solicita que el usuario ingrese un valor y lo registra en la variable elegirOpcion. A continuación llama a la función listaOpciones con elegirOpcion como parámetro
function ingresarOpcion() {
    let elegirOpcion = parseInt(prompt(`Por favor seleccione una opción:
    1 - Agregar una película a la lista
    2 - Salir y ver lista completa de películas
    0 - Salir sin ver lista`))
    listaOpciones(elegirOpcion)
}

// la función listaOpciones() tiene como parámetro un número en base al cual se pueden ingresar distintas opciones a través de un switch
function listaOpciones(elegirOpcion) {
    switch(elegirOpcion) {
        case 0:
            salida = true
            alert(`¡Hasta luego!`)
            break
        case 1:
            agregarPelicula()
            break
        case 2:
            verLista()
            break
        default:
            alert("Por favor, seleccione una opción válida")
    }
}

// definimos la clase Peliculas con un constructor que incluye título, año (usando anio por si hubiese algún conflicto con el caracter 'ñ') y director
class Peliculas {
    constructor(titulo, anio, director) {
        this.titulo = titulo,
        this.anio = anio,
        this.director = director
    }
}

// definimos el array filmoteca, que comienza vacío
const filmoteca = []

// la función agregarPelicula() solicita al usuario que agregue tres valores: titulo, año y director. Cada uno es registrado en una variable. Estas tres variables pasarán como atributos para instanciar un objeto de la clase Peliculas. Este objeto es agregado con el método push al array filmoteca.
function agregarPelicula() {
    let ingresarTitulo = prompt("¿Cuál es el nombre de la película?")
    let ingresarAnio = parseInt(prompt("¿En qué año se estrenó?"))
    let ingresarDirector = prompt("¿Quién la dirigió?")
    let nuevaPelicula = new Peliculas(ingresarTitulo, ingresarAnio, ingresarDirector)
    filmoteca.push(nuevaPelicula)
}

// la función verLista() avisa mediante un alert al usuario que la lista completa de películas queda registrada en la consola y a continuación sale del programa
function verLista() {
    alert("La lista completa podrá verse en la consola. ¡Hasta luego!")
    for (const pelicula of filmoteca) {
        console.log(`La película ${pelicula.titulo} se estrenó en ${pelicula.anio} y fue dirigida por ${pelicula.director}`)
    }
    salida = true
}
 
alert("Este programa construye una lista de películas organizadas según título, año y director/a")

// Este loop while sigue llamando a la opción ingresarOpcion() mientras salida no sea true
let salida
while (salida != true) {
    ingresarOpcion()
}