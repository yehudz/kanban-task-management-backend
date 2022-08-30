const boards = require('./boards')
const columns = require('./boardColumns')
// const photos = require('./photos') // Example for future routes
module.exports = app => {
  app.use('/api/v2/boards', boards),
  app.use('/api/v2/boardColumns', columns)
  // app.use('/photos', photos)
  // etc..
}