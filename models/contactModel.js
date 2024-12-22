const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    prename: { type: String, required: true },
    adresse:{type:String},
    email: { type: String, required: true, lowercase: true, match: /.+\@.+\..+/ },
    numtel: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
