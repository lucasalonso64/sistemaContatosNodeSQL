const Sequelize = require('sequelize')
const bodyParse = require('body-parser')
const express = require("express");
const app = express();

const Post = require('../../models/Post')

module.exports = {

    async index(req, res) {
        const posts = await Post.all();
        return res.json(posts);


    },
    async show(req, res) {
        const posts = await Post.all();
        return res.json(posts);
       // res.render('pages/consulta', { posts: posts })

    },

    async rais(req, res) {
        const posts = await Post.all();
        return res.render('pages/home')

    },

    async contato(req, res) {
        const posts = await Post.all();
        return res.render('pages/contact')

    },

    async novo(req, res) {
        const { Nome, Ramal, Setor, Cargo, Email } = req.body
        try {
            Post.create({
                Nome: req.body.Nome,
                Ramal: req.body.Ramal,
                Setor: req.body.Setor,
                Cargo: req.body.Cargo,
                Email: req.body.Email
            })
            const posts = await Post.all();
            return res.render('pages/consulta', { posts: posts })

        } catch (err) {
            res.send("Erro ao gravar contato!")

        }

    },


    async deletet(req, res) {
        var ID = req.params.ID
        try {
            Post.destroy({ where: { ID: ID } })
            res.send("Deletado com sucesso")

        } catch (error) {
            res.send("Erro ao deletar contato")
        }
    },

    async update(req, res) {

        Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.render('pages/home')
    },

    // Tratamento da Edição
    async editar(req, res) {

        try {
            Post.findOne({ ID: req.body.ID }).then((posts) => {

                posts.Nome = req.body.Nome
                posts.Setor = req.body.Setor,
                    posts.Cargo = req.body.Cargo,
                    posts.Ramal = req.body.Ramal,
                    posts.Email = req.body.Email

                posts.save()
            })
            const posts = await Post.all();
            return res.render('pages/consulta', { posts: posts })
        } catch (err) {
            res.send("Erro editar")
        }

    }








}