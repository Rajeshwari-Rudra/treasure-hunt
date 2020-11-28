/**
 * @index.js - manages all routing
 *
 * router.get when assigning to a single request
 * router.use when deferring to a controller
 *
 * @author Denise Case <dcase@nwmissouri.edu>
 * @requires express
 */

const express = require('express');
const LOG = require('../util/logger');
const userRouter = require('./users');

const clueRoutes = require('./clue.routes');
const competitionRoutes = require('./competition.routes');
const locationRoutes = require('./location.routes');
const playerRoutes = require('./player.routes');
const questRoutes = require('./quest.routes');
const teamRoutes = require('./team.routes');


LOG.info('routes/index.js: STARTING custom routes......');

const router = express.Router();

// Manage top-level request first

const appTitle = 'The Hunt App';
const appSubTitle = 'our collaborative web app';

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index.ejs', { title: appTitle, subTitle: appSubTitle });
});

router.get('/index', (req, res) => {
  res.render('index.ejs', { title: appTitle, subTitle: appSubTitle });
});


router.use('/user', userRouter);

// better route to t-e-a-m before we route to t-e-a
// team routing moved before tea routing
try {
  router.use('/team', teamRoutes);
} catch (err) {
  LOG.error(`ERROR: ${err.message}`);
}

try {
  router.use('/clue', clueRoutes);
} catch (err) {
  LOG.error(`ERROR: ${err.message}`);
}
try {
  router.use('/competition', competitionRoutes);
} catch (err) {
  LOG.error(`ERROR: ${err.message}`);
}

try {
  router.use('/location', locationRoutes);
} catch (err) {
  LOG.error(`ERROR: ${err.message}`);
}

try {
  router.use('/quest', questRoutes);
} catch (err) {
  LOG.error(`ERROR: ${err.message}`);
}

try {
  router.use('/player', playerRoutes);
} catch (err) {
  LOG.error(`ERROR: ${err.message}`);
}


LOG.info('routes/index.js: ENDING custom routes......');

module.exports = router;
