const common = require('./common')
const createtable =require('./createtable')
const sequalizeArt = require('./sequalizeArt')
const sequalizeEvent = require('./sequalizeEvents')
const sequalizeGaming = require('./sequalizeGaming')
const sequalizeFavourite = require('./sequalizeFavourite')
const selectAll = require('./selectAll')
const sequelize = common.sequelize
const empty ={}
const initialization = (resp) => {sequelize.authenticate().then(() => {
    createtable.createvalidationTable();
    sequalizeArt.createartsTable()
    sequalizeEvent.createEventsTable();
    sequalizeGaming.creategamingsTable();
    sequalizeFavourite.createFavoriteTable();
    selectAll.createALL();
    resp.status(200)
    resp.json(empty)
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    resp.status(640)
    resp.json(empty)
});
}

  module.exports = {
    initialization:initialization
  }