const boards = require('./boards')
const columns = require('./boardColumns')
const tasks = require('./tasks')
const subtasks = require('./subtasks')

module.exports = app => {
  app.use('/api/v2/boards', boards),
  app.use('/api/v2/boardColumns', columns),
  app.use('/api/v2/tasks', tasks),
  app.use('/api/v2/subtasks', subtasks)
}