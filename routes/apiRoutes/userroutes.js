const router = require('express').Router();
const {
  createUser,
  getAllUser,
  getSingleUser,
  deleteUser,
} = require('../../controllers/userController');

 // create a new user
router.route('/').get(getAllUser).post(createUser);

 // delete user
router.route('/:id').get(getSingleUser).delete(deleteUser);

module.exports = router;