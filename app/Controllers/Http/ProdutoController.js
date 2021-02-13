'use strict'

const Produto = use('App/Models/Produto')

class ProdutoController {
    async index () {
        return await Produto.all()
    }

    async show ({ params }) {
        return await Produto.all()
    }

    async store ({ request }) {
        return await Produto.all()
    }

    async update ({ params, request }) {
        return await Produto.all()
    }

    async destroy ({ params }) {
        return await Produto.all()
    }
}

module.exports = ProdutoController
