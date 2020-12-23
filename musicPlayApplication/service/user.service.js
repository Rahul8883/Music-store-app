const userModal = require('../modal/user.modal');
exports.registration = (req, callback) => {
    userModal.registration(req, (err, data) => {
        err ? callback(err) : callback(null, data)
    })
}

exports.login = (req, callback) => {
    userModal.login(req, (err, data) => {
        err ? callback(err) : callback(null, data)
    })
}