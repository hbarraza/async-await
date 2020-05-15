const { taskOne, taskTwo } = require('./tasks');

// Ejecución secuencial
async function main() {
    try {
        console.time('Midiendo el tiempo');

        const valueOne = await taskOne(); // Tarea que demora 4 segundos para terminar
        const valueTwo = await taskTwo(); // Tarea que demora 2 segundos para terminar. Se espera a que la ultima tarea finalice

        console.log('Tarea 1 retorna: ', valueOne);
        console.log('Tarea 2 retorna: ', valueTwo);
        
        console.timeEnd('Midiendo el tiempo'); // Un total de 6 segundos para terminar
    }
    catch (e) {
        console.log(e);
    }
}

main(); //para ejecutar la funcion asincrona, se llama desde una funcion main
