const boards = require('./boards')
// const photos = require('./photos') // Example for future routes
module.exports = app => {
  app.use('/api/v2/boards', boards)
  // app.use('/photos', photos)
  // etc..
}