/******************************************************************************
 *  @Purpose        : To create music services that will send the incoming data 
                      to musicModel and save that data to database and at login 
                      time fetching correct information from database.
 *  @file           : music.services.js        
 *  @author         : RAHUL RANJAN
 *  @version        : v0.1
 *  @since          : 14-Nov-2020
 ******************************************************************************/
const musicModal = require('../modal/music.modal')

/**
 * @description:it will send createNote data to model
 * @param {*request from frontend} data 
 * @param {*response to backend} callback
 */
exports.uploadMusicInDBService = (data, callback) => {
    musicModal.uploadMusicInDBModal(data, (err, result) => {
        if (err) {
            throw err
        } else {
            callback(null, result);
        }
    })
}

exports.getMusicFromService = (data, callback) => {
    musicModal.getMusicFromModal(data, (err, result) => {
        if (err) {
            throw err
        } else {
            callback(null, result);
        }
    })
}

exports.deleteMusicFromDBService = (data, callback) => {
    musicModal.deleteMusicFromDBModal(data, (err, result) => {
        if (err) {
            throw err
        } else {
            callback(null, result);
        }
    })
}
exports.getCartDataInService = (data, callback) => {
    musicModal.getDataForCart(data, (err, result) => {
        if (err) {
            throw err
        } else {
            callback(null, result)
        }
    })
}
exports.addToCartInService = (data, callback) => {
    musicModal.addToCartInModel(data, (err, result) => {
        if (err) {
            throw err
        } else {
            callback(null, result)
        }
    })
}
exports.getCartItemInService = (data, callback) => {
    musicModal.getCartItemInModal(data, (err, result) => {
        if (err) {
            throw err
        } else {
            callback(null, result);
        }
    })
}
exports.deletecartItemInService = (data, callback) => {
    musicModal.deletecartItemInModal(data, (err, result) => {
        if (err) {
            throw err
        } else {
            callback(null, result)
        }
    })
}