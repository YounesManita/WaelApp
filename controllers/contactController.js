const Contact = require("../models/contactModel");
const sendEmailToAdmin = require("../utils/emailSender");

const createContactMessage = async (req, res) => {
  try {
    const { name, prename, email, numtel, message } = req.body;

    const newContact = new Contact({ name, prename, email, numtel, message,adresse });
    await newContact.save();

    await sendEmailToAdmin({ name, prename, email, numtel, message });

    return res.status(201).json({
      message:
        "Your message has been successfully sent. We will get back to you shortly.",
    });
  } catch (error) {
    console.error("Error handling contact message:", error);
    return res.status(500).json({
      message:
        "There was an issue sending your message. Please try again later.",
    });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();

    return res.status(200).json({
      message: "All contacts retrieved successfully.",
      data: contacts,
    });
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return res.status(500).json({
      message: "Failed to fetch contact messages. Please try again later.",
    });
  }
};

const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({
        message: "Contact message not found.",
      });
    }

    return res.status(200).json({
      message: "Contact message deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting contact message:", error);
    return res.status(500).json({
      message: "Failed to delete contact message. Please try again later.",
    });
  }
};

module.exports = {
  createContactMessage,
  getAllContacts,
  deleteContact
};
