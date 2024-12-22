
const express = require('express');
const { createContactMessage ,getAllContacts, deleteContact } = require('../controllers/contactController');
const contactValidator = require('../validators/contactValidator');
const { validationResult } = require('express-validator');

const router = express.Router();

router.post('/sendcontact', contactValidator, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  createContactMessage(req, res);
});

router.get('/getallcontacts', (req, res) => {
  getAllContacts(req, res);
});

router.delete('/deletecontact/:id', (req, res) => {
  deleteContact(req, res);
});

module.exports = router;
