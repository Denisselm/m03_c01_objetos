/*class Persona { //por buena practica todas las clases empiezan con mayuscula
    constructor(nom, edad, prof) { //en el constructor determino los parametros
        this.nombre = nom; //con this hago referencia la las intancias y les asigno el parámetro
        this.edad = edad;
        this.profesion = prof;
    }
    print(css) { //funcion que llama a un selector de css y le entrega el nombre de mi instancia, en este caso pedro picapiedra
        const tag = document.querySelector(css)
        tag.textContent = this.nombre;
    }
}
const p1 = new persona('Pedro Picapiedra', 30, 'operador') //creo las variables a las que les voy a asignar valores a las instancias con la palabra reservada 'new'
const p2 = new persona('Pedro Picapiedra', 30, 'operador')

const persona = [p1, p2] // cree un array con los objetos creados*/


class Libros {
    contructor(name, year, author, edit) {
        this.nombre = name;
        this.año = year;
        this.autor = author;
        this.editorial = edit;
    }
    mostrarLibro() { //no recibe parametros pero tiene que retornar los libros
        return `${this.nombre}-${this.año}-${this.autor}-${this.editorial}`
    }
}

const libro1 = new book('La peste', 1947, 'Albert Camus', 'Bad robot')
const libro2 = new book('1984', 1949, 'George Orwell', 'My bro')
const libro3 = new book('Farenheit 451', 1953, 'Ray Bradbury', 'Mommy long legs')
const libro4 = new book('Demian', 1919, 'Hermann Hesse', 'Honor')


const book = [libro1, libro2, libro3, libro4]

function filtrarPorAutor(libros, nombre_autor) { //creo la funcion con el parametro que me retornara lo que busco
    const libros_autor = [] //array vacio para llenar con cada iteracion de la busqueda

    for (let libro of Libros) { //ciclo para recorrer y encontrar el autor buscado
        if (libro.autor == nombre_autor) {
            libros_autor.push(libro)
        }

    }
    return libros_autor;

}
//filter para encontrar una propiedad
/*return libros.filter(lib => lib.autor == nombre_autor)*/