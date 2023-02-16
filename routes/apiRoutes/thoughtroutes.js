const router = require('express').Router();
const {
  createThought,
  getAllThought,
  getSingleThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtControllers');

// create a new thought
router.route('/').get(getAllThought).post(createThought);

// delete thought
router.route('/:id').get(getSingleThought).delete(deleteThought);

// create reaction
router.route('/:thoughtId/reactions').post(createReaction);

// delete reaction
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.exports = router;