const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = {
    // Visualizar
    async index(req, res) {
        const products = await Product.find();
        return res.json(products);

    },
    // Detalhar por ID
    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);

    },
    // Criar
    async store(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },
    // Atualizar
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json(product);
    },
    // Deletar
    async destroy(req, res) {
        const product = await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }
};