const express = require('express');
const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

module.exports = router

// Get all boardColumns related to a board
router.use(express.json())
router.get('/:boardId', async (req, res)=> {
  try {
   const { boardId } = req.params;
    const boardColumns = await db.query(
      "SELECT * FROM boardColumn WHERE board_id = $1", 
      [boardId])
    res.status(200).json(boardColumns.rows) 
  } catch (error) {
    console.log(error)
  }
})

// Create a new single column to a board
router.use(express.json())
router.post('/', async (req, res)=> {
  try {
     const {name, boardId, order, color} = req.body;
    await db.query(
      "INSERT INTO boardColumn (name, board_id, column_order, color) VALUES($1, $2, $3, $4)", 
      [name, boardId, order, color])
    res.status(200).json("Board column created")
  } catch (error) {
    console.log(error)
  }
})

// Update boardColumn name only
router.use(express.json())
router.put('/:id', async (req, res)=> {
  try {
    const { id } = req.params;
    const { name, color } = req.body;
    await db.query("UPDATE boardColumn SET name = $1, color = $2 WHERE id = $3", 
    [name, color, id])
    res.json('Board column updated')
  } catch (error) {
    console.log(error)
  }
})

// Delete boardColumn
router.delete('/:id', async(req, res)=> {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM boardColumn WHERE id = $1", [id])
    res.json("Column deleted")
  } catch (error) {
    console.log(error)
  }
})