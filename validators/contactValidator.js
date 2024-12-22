const { body } = require('express-validator');

const contactValidator = [
  body('name').notEmpty().withMessage('Name is required'),
  body('prename').notEmpty().withMessage('Prename is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('numtel').notEmpty().withMessage('Phone number is required'),
  body('message').notEmpty().withMessage('Message cannot be empty'),
];

module.exports = contactValidator;
