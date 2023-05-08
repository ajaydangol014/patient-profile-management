const router = require("express").Router();

//retrieve data from AllergyController
const AllergyController = require("../controllers/allergy.controllers");
router.get("/allergy", AllergyController.getAllergy);
router.post("/allergy/add", AllergyController.getAllergy);

//Patient Profile
const PatientController = require("../controllers/patient.controllers");
router.get("/patient-profile", PatientController.getPatient);
router.post("/patient-profile/add", PatientController.savePatientProfile);
router.patch("/patient-profile/:id", PatientController.updatePatientProfile);

module.exports = router;
