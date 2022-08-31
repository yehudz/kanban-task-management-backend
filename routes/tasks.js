const express = require('express');
const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

module.exports = router

// Create a new single task to a board column
router.use(express.json())
router.post('/', async (req, res)=> {
  try {
    const {title, board_column_id, task_order, description} = req.body;
    console.log(req.body)
    const task = await db.query(
      "INSERT INTO task (title, board_column_id, task_order, description) VALUES($1, $2, $3, $4) RETURNING *", 
      [title, board_column_id, task_order, description])
    res.json(task.rows)
  } catch (error) {
    console.log(error)
  }
})

// Get all tasks related to a board column
router.use(express.json())
router.get('/:id', async (req, res)=> {
  try {
    const { id } = req.params;
    const tasks = await db.query(
      "SELECT * FROM task WHERE board_column_id = $1", 
    [id])
    res.json(tasks.rows)
  } catch (error) {
    console.log(error)
  }
})

// Update tasks name only
router.use(express.json())
router.put('/:id', async (req, res)=> {
  const { title, description, board_column_id } = req.body;
  const { id } = req.params;
  try {
    await db.query(
      "UPDATE task SET title = $1, description = $2, board_column_id = $3 WHERE id = $4", 
      [title, description, board_column_id, id])
    res.json("Task updated")
  } catch (error) {
    console.log(error)
  }
})

// Delete tasks from board column
router.delete('/:id', async(req, res)=> {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM task WHERE id = $1", 
    [id])
    res.json("Task deleted")
  } catch (error) {
    console.log(error)
  }
})