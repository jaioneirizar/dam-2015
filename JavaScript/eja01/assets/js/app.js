(function() {

    function Persona(nombre, genero, edad) {

        this.Nombre = nombre;
        this.Genero = genero;
        this.Edad = edad;
        this.ObtDetalle = function() {};
    }


    function Estudiante(nombre, genero, edad, curso, grupo) {

        this.Base = Persona;
        this.Base(nombre, gener, edad);
        this.Curso = curso;
        this.Grupo = grupo;
        this.registrar = function() {};
    }

    Estudiante.prototype = new Persona;


    function Profesor(nombre, genero, edad, asignatura, nivel) {

        this.Base = Persona;
        this.Base(nombre, gener, edad);
        this.Asignatura = asignatura;
        this.Nivel = nivel;
        this.asignar = function() {};
    }


    Profesor.prototype = new Persona;

})();
