const userService = require('../service/user.service');
const token = require('../token');
exports.registration = (req, res) => {
    userService.registration(req, (err, data) => {
        if (err) {
            console.log("err", err);
            res.status(404).send(err);
        } else {
            res.status(200).send("REGISTERED SUCCESSFULLY");
        }
    })
}

exports.login = (req, res) => {
    var responseResult = {};
    userService.login(req, (err, result) => {
        if (err) {
            responseResult.status = false;
            responseResult.message = 'Login Failed';
            responseResult.error = err;
            res.status(500).send(responseResult);
        } else {
            responseResult.status = true;
            responseResult.message = 'LOGIN SUCCESSFULLY';
            responseResult.result = result;
            const payload = {
                user_id: result._id,
                username: result.firstName,
                usersirname: result.lastName,
                email: result.email,
                sucess: true
            }
            const obj = token.GenerateTokenAuth(payload);
            res.status(200).send(obj.token);
        }
    })
}