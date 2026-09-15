const mongoose = require('mongoose');

const recruiterProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  companyName: { type: String, default: '' },
  companyWebsite: { type: String, default: '' },
  companyDescription: { type: String, default: '' },
  position: { type: String, default: '' },
  phone: { type: String, default: '' },
  location: { type: String, default: '' }
}, { timestamps: true });

const RecruiterProfile = mongoose.model('RecruiterProfile', recruiterProfileSchema);
module.exports = RecruiterProfile;
