const mongoose = require('mongoose');

const studentProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  phone: { type: String, default: '' },
  college: { type: String, default: '' },
  university: { type: String, default: '' },
  degree: { type: String, default: '' },
  branch: { type: String, default: '' },
  graduationYear: { type: Number, default: new Date().getFullYear() },
  cgpa: { type: Number, default: 0 },
  location: { type: String, default: '' },
  bio: { type: String, default: '' },
  careerInterests: [{ type: String }],
  skills: [{ type: String }],
  projects: [{
    title: String,
    description: String,
    link: String
  }],
  certifications: [{
    name: String,
    issuer: String,
    url: String
  }],
  internships: [{
    company: String,
    role: String,
    duration: String
  }],
  achievements: [{ type: String }],
  github: { type: String, default: '' },
  linkedin: { type: String, default: '' },
  portfolio: { type: String, default: '' },
  profileCompletion: { type: Number, default: 0 },
  careerReadinessScore: { type: Number, default: 0 }
}, { timestamps: true });

const StudentProfile = mongoose.model('StudentProfile', studentProfileSchema);
module.exports = StudentProfile;
