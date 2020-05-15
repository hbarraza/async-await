const { taskOne, taskTwo } = require('./tasks');

// Ejecución de 2 tareas de forma paralela
async function main() {
    try {
        console.time('Midiendo el tiempo');

        const data = await Promise.all([taskOne(), taskTwo()]);
        /* Promise all ejecuta todas las tareas en simultaneo en procesos paralelos. 
            Por lo tanto el tiempo de ejecución total estará dado por la tarea que demore más. */

        console.log('Tarea 1 retorna: ', data[0]);
        console.log('Tarea 2 retorna: ', data[1]);

        console.timeEnd('Midiendo el tiempo');
    }
    catch (e) {
        console.log(e);
    }
}

main();   //para ejecutar la funcion asincrona, se llama desde una funcion main