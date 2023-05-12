const PatientServices = require("../services/patient.services");

exports.getPatient = async function (req, res, next) {
  try {
    const patient = await PatientServices.getPatient();
    res.json({ status: 200, data: patient, message: "Retrieved" });
  } catch (error) {
    next(error);
  }
};

exports.getPatientByUserId = async function (req, res, next) {
  const { id } = req.params;
  try {
    const patient = await PatientServices.getPatientByUserId(id);
    res.json({ status: 200, data: patient, message: "Retrieved" });
  } catch (error) {
    next(error);
  }
};

exports.getPatientById = async function (req, res, next) {
  const { id } = req.params;
  try {
    const patient = await PatientServices.getPatientById(id);
    res.json({ status: 200, data: patient, message: "Retrieved" });
  } catch (error) {
    next(error);
  }
};

exports.savePatientProfile = async function (req, res, next) {
  try {
    const patient = await PatientServices.savePatientProfile({
      data: req.body,
    });
    res.json({ status: 200, data: patient, message: "Saved" });
  } catch (error) {
    next(error);
  }
};

exports.updatePatientProfile = async function (req, res, next) {
  const { id } = req.params;
  try {
    const patient = await PatientServices.updatePatientProfile(req.body, id);
    res.json(patient);
  } catch (error) {
    next(error);
  }
};

exports.deletePatientProfile = async function (req, res, next) {
  const { id } = req.params;
  try {
    const patient = await PatientServices.deletePatientProfile(req.body, id);
    res.json(patient);
  } catch (error) {
    next(error);
  }
};

exports.viewPatientById = async function (req, res, next) {
  const { id } = req.params;
  try {
    const patient = await PatientServices.getPatientById(req.body, id);
    res.json(patient);
  } catch (error) {
    next(error);
  }
};
