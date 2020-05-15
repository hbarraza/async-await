const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {
    async taskOne () {
        try {
            throw Error('UN ERROR ALEATORIO');  //Lanza un problema generado a proposito
            await sleep(4000);
            return 'PRIMER VALOR';
        }
        catch (e) {
            console.log(e);
        }
    },

    async taskTwo () {
        try {
            await sleep(2000);
            return 'SEGUNDO VALOR';
        }
        catch (e) {
            console.log(e);
        }
    }
};
