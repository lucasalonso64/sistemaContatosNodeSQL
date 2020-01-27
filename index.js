const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
var expressLayouts = require('express-ejs-layouts')
const bodyParse = require('body-parser')
const Post = require('./models/Post')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(expressLayouts)
app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json())

app.get('/editar/:ID', (req, res) => {
    var ID = req.params.ID
    Post.findOne({
        where: { ID: ID }
    }).then(function (posts) {
        res.render('admin/edicao', { posts: posts })
    })
})

app.use('/api', require('./src/routes'))
app.get('/consulta', require('./src/routes'))
app.get('/', require('./src/routes'))
app.get('/contact', require('./src/routes'))
app.get('/novocontato', (req, res) => { res.render('admin/novocontato') })
app.post('/novocontato', require('./src/routes'))
app.get('/delete_/:ID', require('./src/routes'))
app.get('/editar', (req, res) => { res.render('admin/edicao') })
app.post('/admin/editar', require('./src/routes'))

// abrindo um servidro com express
app.listen(4000, function () {
    console.log("Servidor executando...");
}); 