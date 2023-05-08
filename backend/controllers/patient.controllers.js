const PatientServices = require("../services/patient.services");

exports.getPatient = async function (req, res, next) {
  try {
    const patient = await PatientServices.getPatient();
    res.json({ status: 200, data: patient, message: "Retrieved" });
  } catch (error) {
    next(error);
  }
};

exports.savePatientProfile = async function (req, res, next) {
  try {
    const patient = await PatientServices.savePatientProfile();
    res.json({ status: 200, data: patient, message: "Saved" });
  } catch (error) {
    next(error);
  }
};

exports.updatePatientProfile = async function (req, res, next) {
  try {
    const patient = await PatientServices.updatePatientProfile();
    res.json(patient);
  } catch (error) {
    next(error);
  }
};

exports.deletePatientProfile = async function (req, res, next) {
  try {
    const patient = await PatientServices.deletePatientProfile(req.body);
    res.json(patient);
  } catch (error) {
    next(error);
  }
};
