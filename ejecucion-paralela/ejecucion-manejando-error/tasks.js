const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {
    async taskOne () {
        try {
            throw Error('UN PROBLEMA ALEATORIO');
            await sleep(4000);  //4 segundos
            return 'PRIMER VALOR';
        } 
        catch (e) {
            console.log(e);
        }
    },

    async taskTwo () {
        try {
            await sleep(2000);  //2 segundos
            return 'SEGUNDO VALOR';
        } 
        catch (e) {
            console.log(e);
        }
    }
};
