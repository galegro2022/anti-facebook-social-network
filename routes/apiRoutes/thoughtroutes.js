const router = require('express').Router();
const {
  createThought,
  getAllThought,
  getSingleThought,
  deleteThought,
} = require('../../controllers/thoughtController');

// create a new thought
router.route('/').get(getAllThought).post(createThought);

// delete thought
router.route('/:id').get(getSingleThought).delete(deleteThought);
