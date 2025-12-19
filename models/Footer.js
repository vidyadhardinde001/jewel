const mongoose = require('mongoose');

const footerSchema = new mongoose.Schema({
  section: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: mongoose.Schema.Types.Mixed, // Flexible structure
    required: true,
  },
});

module.exports = mongoose.model('Footer', footerSchema);
