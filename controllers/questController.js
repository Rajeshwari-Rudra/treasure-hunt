/**
 *  quest controller
 *  Handles requests related to quests (see routes)
 *  S538294@nwmissouri.edu
 */
const LOG = require('../util/logger');

const db = require('../models/index')();

// FUNCTIONS TO RESPOND WITH JSON DATA  ----------------------------------------

// GET all JSON
exports.findAll = async (req, res) => {
  (await db).models.Quest.findAll()
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
    (await db).models.Quest.findByPk(id)
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
      context.models.Quest.create(req.body);
    } catch (err) {
      // store the user inputs & the validation errors in res.locals.quest
      // err includes err.message & err.errors (array of validator msgs)
      LOG.error('ERROR SAVING QUEST');
      const item = {};
      item.questname = req.body.questname;
      item.startdate = req.body.startdate;
      item.starttime = req.body.starttime;
      item.errors = err.errors;
      res.locals.quest = item;
      LOG.info(` ERROR ADDING QUEST:${item}`);
    }
    return res.redirect('/quest');
  };
  // POST /save/:id
exports.saveEdit = async (req, res) => {
    try {
      const reqId = parseInt(req.params.id, 10);
      LOG.info(`Save id: ${reqId}`);
      // don't use super-current language features unless you add babel
      const updated = (await db).models.Quest.update(req.body, {
        where: { id: reqId },
      });
      LOG.info(`Updated: ${updated}`);
      return res.redirect('/quest'); // always redirect back for now
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };
  
  // POST /delete/:id
  exports.deleteItem = async (req, res) => {
    try {
      const reqId = parseInt(req.params.id, 10);
      const deleted = (await db).models.Quest.destroy({
        where: { id: reqId },
      });
      if (deleted) {
        return res.redirect('/quest');
      }
      throw new Error(`${reqId} not found`);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };

// RESPOND WITH VIEWS  --------------------------------------------

// GET to this controller base URI (the default)
exports.showIndex = async (req, res) => {
    (await db).models.Quest.findAll()
      .then((data) => {
        res.locals.quest = data;
        res.render('quest/index.ejs', { title: 'Quests', res });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Error retrieving all.',
        });
      });
  };
  
  // GET /create
  exports.showCreate = async (req, res) => {
    // create a temp quest and add it to the response.locals object
    // this will provide a quest object to put any validation errors
    const tempItem = {
      name: 'QuestName',
      age: 1,
      isCartoon: true,
    };
    res.locals.quest = tempItem;
    res.render('quests/create.ejs', { title: 'Quests', res });
  };
  
  // GET /delete/:id
  exports.showDelete = async (req, res) => {
    const { id } = req.params;
    (await db).models.Quests.findByPk(id)
      .then((data) => {
        res.locals.quests = data;
        if (data) {
          res.render('quests/delete.ejs', { title: 'Quests', res });
        } else {
          res.redirect('quests/');
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
    (await db).models. Quest.findByPk(id)
      .then((data) => {
        res.locals.quest = data;
        res.render('quest/details.ejs', { title: 'Quests', res });
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
    (await db).models.Quest.findByPk(id)
      .then((data) => {
        res.locals.quest = data;
        res.render('Quest/edit.ejs', { title: 'Quest', res });
      })
      .catch((err) => {
        res.status(500).send({
          message: `Error retrieving item with id=${id}: ${err.message}`,
        });
      });
  };
