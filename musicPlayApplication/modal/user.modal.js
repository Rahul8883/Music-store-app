const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const schema = mongoose.Schema;
const userScherma = new schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const user = mongoose.model("userMusic", userScherma);

exports.registration = (req, callback) => {
    var newuser;
    user.find({ email: req.body.email }, (err, data) => {
        err ? callback(err) : data.length > 0 ? callback("user alreaduy present") : bcrypt.genSalt(10, (err, salt) => {
            err ? callback(err) :
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    err ? callback(err) :
                        newuser = new user({
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            email: req.body.email,
                            password: hash,
                        });
                    newuser.save((err, result) => {
                        err ? callback(err) : callback(null, result)
                    })
                })
        })
    })
}
exports.login = (req, callback) => {
    user.findOne({ email: req.body.email }, (err, result) => {
        if (err) {
            callback(err);
        } else if (result != null) {
            bcrypt.compare(req.body.password, result.password).then(function(res) {
                if (res) {
                    callback(null, result);
                } else {
                    callback("Incorrect password");
                }
            }).catch(err => {
                console.log(err);
            })
        } else {
            callback("Invalid user");
        }
    });
};