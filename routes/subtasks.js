const express = require('express');
const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

module.exports = router

// Create a new single subtask to a task
router.use(express.json())
router.post('/', async (req, res)=> {
  try {
   const {title, completed, task_id} = req.body;
    const subtask = await db.query(
      'INSERT INTO subtask(title, completed, task_id) VALUES($1, $2, $3) RETURNING *', 
    [title, completed, task_id]) 
    res.json(subtask.rows[0])
  } catch (error) {
    console.log(error)
  }
})

// Get all subtasks related to a task
router.use(express.json())
router.get('/:id', async (req, res)=> {
  const { id } = req.params;
  try {
    const substasks = await db.query('SELECT * FROM subtask WHERE task_id = $1', [id])
    res.json(substasks.rows)
  } catch (error) {
    console.log(error)
  }
})

// Update subtask name and completed
router.use(express.json())
router.put('/:id', async (req, res)=> {
 try {
  const { id } = req.params;
  const { title, completed } = req.body;
  await db.query(
    "UPDATE subtask SET title = $1, completed = $2 WHERE id = $3", 
    [title, completed, id])
  res.status(200).json("Subtask updated")
 } catch (error) {
  console.log(error)
 }
})

// Delete tasks from board column
router.delete('/:id', async(req, res)=> {
  
})