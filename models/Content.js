const mongoose = require('mongoose');

// Define a schema for your content
const contentSchema = new mongoose.Schema({
  section: {
    type: String,
    required: true,
    unique: true
  },
  content: {
    type: mongoose.Schema.Types.Mixed, // Mixed type allows flexible data structure
    required: true
  }
});

// Create a model from the schema
const Content = mongoose.model('Content', contentSchema);

// Export the model to use it in other files
module.exports = Content;
