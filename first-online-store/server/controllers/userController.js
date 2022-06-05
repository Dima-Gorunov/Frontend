const ApiError = require('../error/ApiError')

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest("Не задан id"))
        }
        res.json(id)
    }

    async checkDef(req, res) {
        res.json({message: 'this is user api'})
    }

}

module.exports = new UserController()