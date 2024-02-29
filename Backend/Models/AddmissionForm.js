const mongoose = require('mongoose');

const AdmissionSchema = new mongoose.Schema({
  parentFirstName: { type: String, required: true },
  parentLastName: { type: String, required: true },
  childFirstName: { type: String, required: true },
  childLastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  currentSchool: { type: String },
  gradeApplyingFor: { type: String, required: true },
  preferredStartDate: { type: Date, required: true },
  interestedInAfterSchoolPrograms: { type: Boolean, default: false },
  questionsComments: { type: String },
  howDidYouHearAboutUs: { type: String, enum: ['Facebook', 'Instagram', 'Referalls'] },
  address: { type: String }
  
}
)
const AdmissionModel = mongoose.model('Admission', AdmissionSchema);

module.exports = AdmissionModel;
