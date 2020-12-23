/*****************************************************************************************
 *  @Purpose        : To create music controller to handle the incoming data. 
 *  @file           : music.controller.js        
 *  @author         : RAHUL RANJAN
 *  @version        : v0.1
 *  @since          : 01-Dec-2020
 *****************************************************************************************/
const musicService = require('../service/music.service');
/**
 * @description:it handles the creating music data
 * @param {*request from frontend} req 
 * @param {*response from backend} res 
 */
exports.uploadMusicInDBController = (req, res) => {
    try {
        musicService.uploadMusicInDBService(req, (err, data) => {
            if (err) {
                console.log("err", err);
                res.status(404).send(err)
            } else {
                res.status(200).send("UPLOAD MUSIC DATA SUCCESSFULLY");
            }
        })
    } catch (error) {
        res.send(err);
    }
}
exports.getMusicFromDBController = (req, res) => {
    try {
        musicService.getMusicFromService(req, (err, data) => {
            if (err) {
                throw err
            } else {
                res.status(200).send(data);
            }
        })
    } catch (error) {
        res.send(error);
    }
}

exports.deleteMusicFromDBController = (req, res) => {
    try {
        musicService.deleteMusicFromDBService(req, (err, data) => {
            if (err) {
                console.log("err", err);
                res.status(404).send(err)
            } else {
                res.status(200).send("DELETED MUSIC DATA SUCCESSFULLY");
            }
        })
    } catch (error) {
        res.send(error);
    }
}
exports.getCartData = (req, res) => {
    try {
        musicService.getCartDataInService(req, (err, data) => {
            if (err) {
                console.log('err', err);
                res.status(404).send(err);
            } else {
                res.send(200, data);
            }
        })
    } catch (error) {
        res.send(error)
    }
}
exports.addToCartController = (req, res) => {
    try {
        musicService.addToCartInService(req, (err, data) => {
            if (err) {
                console.log("err", err);
                res.status(404).send(err)
            } else {
                res.status(200).send("UPLOAD CART MUSIC DATA SUCCESSFULLY");
            }
        })
    } catch (error) {
        res.send(404, error)
    }
}
exports.getCartItemInController = (req, res) => {
    try {
        musicService.getCartItemInService(req, (err, data) => {
            if (err) {
                throw err
            } else {
                res.status(200).send(data);
            }
        })
    } catch (error) {
        res.send(error);
    }
}
exports.deletecartItemInController = (req, res) => {
    try {
        musicService.deletecartItemInService(req, (err, data) => {
            if (err) {
                throw err
            } else {
                res.send(200, "CART ITEM DELETED SUCCESSFULLY")
            }
        })
    } catch (error) {

    }
}