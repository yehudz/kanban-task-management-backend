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

// Get all tasks related to a board column
router.use(express.json())
router.get('/:id', async (req, res)=> {
  
})

// Update tasks name only
router.use(express.json())
router.put('/:id', async (req, res)=> {
  
})

// Delete tasks from board column
router.delete('/:id', async(req, res)=> {
  
})