/******************************************************************************
 *  @Purpose        : Method is used to generate tokens
 *  @file           : token.js        
 *  @author         : Rahul Rs
 *  @version        : v0.1
 *  @since          : 24-oct-2020
 ******************************************************************************/
const jwt = require('jsonwebtoken');
module.exports = {
    /**
     * @description:exporting token 
     * @param {*it contains unique ID} payload 
     */
    GenerateTokenAuth(payload) {
        const token = jwt.sign({ payload }, "rahul@700", { expiresIn: '1D' })
        const obj = {
            status: true,
            message: 'Token Generated Successfully!!',
            token: token
        }
        return obj;
    }
}