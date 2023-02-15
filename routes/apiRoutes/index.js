const router = require('express').Router();
const userroutes = require('./userroutes.js');
const thoughtRoutes = require('./thoughtroutes.js');

router.use('/users', userroutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;