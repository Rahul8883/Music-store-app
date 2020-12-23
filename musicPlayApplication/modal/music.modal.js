const mongoose = require('mongoose');
const schema = mongoose.Schema;
const musicSchema = new schema({
    trackName: {
        type: String,
    },
    artistName: {
        type: String,
    },
    albumName: {
        type: String,
    },
    albumYear: {
        type: String,
    },
    trackPrice: {
        type: Number,
    }
});
var musicTrack = mongoose.model('Music', musicSchema);

const cartSchema = new schema({
    // username: {
    //     type: String
    // },
    trackname: {
        type: String
    },
    trackid: {
        type: String
    },
    // quantity: {
    //     type: String
    // },
    unitprice: {
        type: Number
    },
    // musicList: {
    //     type: Array
    // }
});
var cartMusic = mongoose.model('Cart', cartSchema);

function musicModel() {}

// function cartModel() {}

/**
 * @description:it will add the music data using musicSchema schema and save the data into the database
 * @param {*request from frontend} musicData 
 * @param {*response to backend} callback 
 */

musicModel.prototype.uploadMusicInDBModal = (req, callback) => {
    const Track = new musicTrack({
        "trackName": req.body.trackName,
        "artistName": req.body.artistName,
        "albumName": req.body.albumName,
        "albumYear": req.body.albumYear,
        "trackPrice": req.body.trackPrice
    });
    Track.save((err, result) => {
        if (err) {
            throw err
        } else {
            callback(null, result)
        }
    })
}

musicModel.prototype.getMusicFromModal = (req, callback) => {
    try {
        musicTrack.find((err, result) => {
            if (err) {
                callback(err)
            } else {
                callback(null, result)
            }
        })
    } catch (error) {
        res.send('Error', error)
    }
}

musicModel.prototype.deleteMusicFromDBModal = async(req, res) => {

    const id = req.params.id;
    try {
        const success = await musicTrack.findByIdAndDelete(id);
        return success;
    } catch (error) {
        res.send('Error', error)
    }
}

musicModel.prototype.getDataForCart = async(req, callback) => {
    const id = req.params.id;
    try {
        const data = await musicTrack.findById(id);
        if (data) {
            callback(null, data)
        } else {
            console.log("Modal is not working properly");
        }
        console.log("data in model", data);
    } catch (error) {
        console.log(error);
    }
}
musicModel.prototype.addToCartInModel = (req, callback) => {
    console.log(req.body);
    const cartItem = new cartMusic({
        "trackname": req.body.trackname,
        "trackid": req.body.trackid,
        "unitprice": req.body.unitprice
    });
    cartItem.save((err, result) => {
        if (err) {
            throw err
        } else {
            callback(null, result)
        }
    })
}
musicModel.prototype.getCartItemInModal = (req, callback) => {
    try {
        cartMusic.find((err, result) => {
            if (err) {
                callback(err)
            } else {
                callback(null, result)
            }
        })
    } catch (error) {
        res.send('Error', error)
    }
}

musicModel.prototype.deletecartItemInModal = async(req, res) => {
    const id = req.params.id;
    console.log("Id comes in modal ", id);
    try {
        const success = await cartMusic.findByIdAndDelete(id);
        return success;
    } catch (error) {
        res.send('Error', error)
    }
}

module.exports = new musicModel();