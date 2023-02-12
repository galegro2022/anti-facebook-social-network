const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
//const thoughtRoutes = require('./thoughtroutes.js');


router.use('/api', apiRoutes);
//router.use('/thoughts', ('./thoughtroutes.js'));


module.exports = router;