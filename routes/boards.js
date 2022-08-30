const express = require('express');
const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

module.exports = router

// Create a new board
router.use(express.json())
router.post('/', async (req, res)=> {
  console.log(req.body)
})

// Get all boards
router.get('/', async (req, res)=> {
  res.status(200).json({
    status: "success",
    data: {
      board: {name: "First board"}
    }
  })
})

// Get one board
router.get('/:id', async (req, res)=> {
  const { id } = req.params;
  console.log(id)
})

// Update board
router.use(express.json())
router.put('/:id', async (req, res)=> {
  const { id } = req.params;
  console.log(req.body)
  console.log(id)
})

// Delete board
router.delete('/:id', async(req, res)=> {
  const { id } = req.params;
  console.log(id)
})