'use strict'

const User = use('App/Models/User')

class UserController {
    async index () {
        return await User.all()
    }

    async show ({ params }) {
        return await User.all()
    }

    async store ({ request }) {
        return await User.all()
    }

    async update ({ params, request }) {
        return await User.all()
    }

    async destroy ({ params }) {
        return await User.all()
    }
}

module.exports = UserController
