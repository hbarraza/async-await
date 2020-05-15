const { taskOne, taskTwo } = require('./tasks');

// Ejecución secuencial
async function main() {
    try {
        console.time('Midiendo el tiempo');

        const valueOne = await taskOne(); // El Error termina la ejecución completa del programa
        const valueTwo = await taskTwo(); // y no sigue con las tareas siguientes

        console.log('Tarea 1 retorna: ', valueOne);
        console.log('Tarea 2 retorna: ', valueTwo);

        console.timeEnd('Midiendo el tiempo'); // Nunca se ejecuta esta línea
    }
    catch (e) {
      console.log(e); // Arroja el problema de la aplicacion completa
    }
}

main();
