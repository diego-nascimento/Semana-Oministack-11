const crypto = require('crypto')


module.exports = function generateuniqueID(){
    return  crypto.randomBytes(4).toString('hex');
}