const express = require('express');
const routes = express.Router();
const Post = require('../models/Post')
const app = express();

const ConsultaController = require('./controllers/ConsultaController');

routes.get('/novocontato', (req, res) => {
    res.render('admin/novocontato')
})

routes.get('*/products*', ConsultaController.index);
routes.get('*/consulta*', ConsultaController.show);
routes.get('/', ConsultaController.rais);
routes.get('/contact', ConsultaController.contato);
routes.post('/novocontato', ConsultaController.novo);
routes.get('/delete_/:ID', ConsultaController.deletet);
routes.post('/admin/editar', ConsultaController.editar);


module.exports = routes;