const Sequelize = require('sequelize')

// conexão com o banco de dados mysql
const sequelize = new Sequelize(
  'React', 'sa', 'epc@123', {
  host: 'BH-DSI-010084L',
  dialect: 'mssql',

 // dialectOptions: {
    //  instanceName : "SQLEXPRESS"
 // }


  

});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    sequelize: sequelize
}
//Usuario.sync({force: true})