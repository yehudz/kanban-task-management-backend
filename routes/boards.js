const express = require('express');
const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

module.exports = router

// Create a new board
router.use(express.json())
router.post('/', async (req, res)=> {
  try {
    const {name, columns} = req.body;
    const newBoard = await db.query("INSERT INTO board(name) VALUES($1) RETURNING *", 
    [name])
    const boardId = newBoard.rows[0].id;
    columns.forEach(async (column)=> {
      if (!columns) return
      await db.query("INSERT INTO boardColumn (name, board_id) VALUES($1, $2) RETURNING *", 
      [column.name, boardId])
    })
    res.json(newBoard.rows[0])
  } catch (error) {
    console.log(error)
  }
  
})

// Get all boards
router.get('/', async (req, res)=> {
  try {
    const result = await db.query('SELECT * FROM board')
    res.json(result.rows)
  } catch (error) {
    console.log(error)
  }
})

// Get one board
router.get('/:id', async (req, res)=> {
  try {
    const { id } = req.params;
    const result = await db.query('SELECT * FROM board WHERE id = $1', [id])
    res.json(result.rows[0])
  } catch (error) {
    console.log(error)
  }
})

// Update board
router.use(express.json())
router.put('/:id', async (req, res)=> {
  const { id } = req.params
  const { name } = req.body
  try {
    const updateBoard = await db.query(
      "UPDATE board SET name = $1 WHERE id = $2 RETURNING *", 
    [name, id])
    res.json(updateBoard.rows[0])
  } catch (error) {
    console.log(error)
  }
})

// Delete board
router.delete('/:id', async(req, res)=> {
  const { id } = req.params;
  await db.query("DELETE FROM board WHERE id = $1", [id])
  res.json('Board was deleted')
})