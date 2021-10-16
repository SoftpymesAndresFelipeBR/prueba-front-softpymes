/*
INSTRUCCIONES:

1. Crear una función tomando como parámetro un "id" de "company" y devolver el nombre de la "company".

2: Crear una función tomando como parámetro un "id" de "company" y quitar la "company" de la lista.

4: Crear una función tomando como parámetro un "id" de "company" y un nuevo "user" cuyo el apelido es "Delgado",
   el nombre "Juan", de 35 años y dueño de un carro.
   El nuevo "user" debe agregarse a la lista de "users" de este "company" y tener un "id" generado automáticamente.
   La función también debe modificar el atributo "usersLength" de "company".

5: Crear una función tomando como parámetro un "id" de "company" y un "id" de "user".
   La función debe quitar este "user" de la lista de "users" de "company" y cambiar el atributo "usersLength" de "company".

6: Crear una función tomando como parámetro dos "id" de "company" y un "id" de "user".
   La función debe permitir que el user sea transferido de la primera "company" a la una "company".
   El atributo "usersLength" de cada "company" debe actualizarse. */

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const companies = createAll();

cleanConsole(7, companies);

console.log('%c ---- RES 7 --- part 1', 'background: #bada55; color: #222', 'Put here your method: ');
console.log('%c ---- RES 7 --- part 2', 'background: #bada55; color: #222', 'Put here your method: ');
console.log('%c ---- RES 7 --- part 3', 'background: #bada55; color: #222', 'Put here your method: ');
console.log('%c ---- RES 7 --- part 4', 'background: #bada55; color: #222', 'Put here your method: ');
console.log('%c ---- RES 7 --- part 5', 'background: #bada55; color: #222', 'Put here your method: ');
console.log('%c ---- RES 7 --- part 6', 'background: #bada55; color: #222', 'Put here your method: ');


