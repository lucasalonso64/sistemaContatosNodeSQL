const db = require('./db')


const Post = db.sequelize.define('contatosejs',{
   timestamps: false,
    Nome: {
        type: db.Sequelize.STRING
    },

    Setor: {
        type: db.Sequelize.STRING
    },
    Cargo: {
        type: db.Sequelize.STRING
    }
    ,
    Ramal: {
        type: db.Sequelize.STRING
    }
    ,
    Email: {
        type: db.Sequelize.STRING
    }

    
})

//Post.sync({force: true}) //use este comando somente quandor for 
module.exports = Post