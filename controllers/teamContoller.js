/**
 *  Team controller
 *  Handles requests related to Teams (see routes)
 *
 * @author Bhaskar reddy Minupuri <S538310@nwmissouri.edu>
 */
const LOG = require('../util/logger');

const db = require('../models/index')();

// FUNCTIONS TO RESPOND WITH JSON DATA  ----------------------------------------

// GET all JSON
exports.findAll = async (req, res) => {
  (await db).models.Team.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error retrieving all.',
      });
    });
};

// GET one JSON by ID
exports.findOne = async (req, res) => {
  const { id } = req.params;
  (await db).models.Team.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving item with id=${id}: ${err.message}`,
      });
    });
};

// HANDLE EXECUTE DATA MODIFICATION REQUESTS -----------------------------------

// POST /save
exports.saveNew = async (req, res) => {
  // create behaves poorly
  const context = await db;
  try {
    context.models.Team.create(req.body);
  } catch (err) {
    // store the user inputs & the validation errors in res.locals.Team
    // err includes err.message & err.errors (array of validator msgs)
    LOG.error('ERROR SAVING Team');
    const item = {};
    item.name = req.body.name;
    item.age = req.body.age;
    item.isCartoon = req.body.isCartoon;
    item.errors = err.errors;
    res.locals.Team = item;
    LOG.info(` ERROR ADDING Team:${item}`);
  }
  return res.redirect('/Team');
};

// POST /save/:id
exports.saveEdit = async (req, res) => {
  try {
    const reqId = parseInt(req.params.id, 10);
    LOG.info(`Save id: ${reqId}`);
    // don't use super-current language features unless you add babel
    const updated = (await db).models.Team.update(req.body, {
      where: { id: reqId },
    });
    LOG.info(`Updated: ${updated}`);
    return res.redirect('/Team'); // always redirect back for now
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// POST /delete/:id
exports.deleteItem = async (req, res) => {
  try {
    const reqId = parseInt(req.params.id, 10);
    const deleted = (await db).models.Team.destroy({
      where: { id: reqId },
    });
    if (deleted) {
      return res.redirect('/Team');
    }
    throw new Error(`${reqId} not found`);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// RESPOND WITH VIEWS  --------------------------------------------

// GET to this controller base URI (the default)
exports.showIndex = async (req, res) => {
  (await db).models.Team.findAll()
    .then((data) => {
      res.locals.Teams = data;
      res.render('Team/index.ejs', { title: 'Teams', res });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error retrieving all.',
      });
    });
};

// GET /create
exports.showCreate = async (req, res) => {
  // create a temp Team and add it to the response.locals object
  // this will provide a Team object to put any validation errors
  const tempItem = {
    name: 'TeamName',
    age: 1,
    isCartoon: true,
  };
  res.locals.Team = tempItem;
  res.render('Team/create.ejs', { title: 'Teams', res });
};

// GET /delete/:id
exports.showDelete = async (req, res) => {
  const { id } = req.params;
  (await db).models.Team.findByPk(id)
    .then((data) => {
      res.locals.Team = data;
      if (data) {
        res.render('Team/delete.ejs', { title: 'Teams', res });
      } else {
        res.redirect('Team/');
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving item with id=${id}: ${err.message}`,
      });
    });
};

// GET /details/:id
exports.showDetails = async (req, res) => {
  const { id } = req.params;
  (await db).models.Team.findByPk(id)
    .then((data) => {
      res.locals.Team = data;
      res.render('Team/details.ejs', { title: 'Teams', res });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving item with id=${id}: ${err.message}`,
      });
    });
};

// GET /edit/:id
exports.showEdit = async (req, res) => {
  const { id } = req.params;
  (await db).models.Team.findByPk(id)
    .then((data) => {
      res.locals.Team = data;
      res.render('Team/edit.ejs', { title: 'Teams', res });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving item with id=${id}: ${err.message}`,
      });
    });
};
