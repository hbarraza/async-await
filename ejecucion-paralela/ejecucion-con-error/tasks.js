const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {
    async taskOne () {
        throw Error('UN ERROR ALEATORIO');
        await sleep(4000);  //4 segundos
        return 'PRIMER VALOR';
    },

    async taskTwo () {
        await sleep(2000);   //2 segundos
        return 'SEGUNDO VALOR';
    }
};
