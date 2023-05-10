const router = require("express").Router();

//retrieve data from AllergyController
const AllergyController = require("../controllers/allergy.controllers");
router.get("/allergy", AllergyController.getAllergy);
router.post("/allergy/add", AllergyController.saveAllergy);
router.post("/allergy/delete/:id", AllergyController.deleteAllergy);

//Patient Profile
const PatientController = require("../controllers/patient.controllers");
router.get("/patient-profile", PatientController.getPatient);
router.get("/patient-profile/:id", PatientController.getPatientById);
router.post("/patient-profile/add", PatientController.savePatientProfile);
router.put("/patient-profile/edit/:id", PatientController.updatePatientProfile);
router.post(
  "/patient-profile/delete/:id",
  PatientController.deletePatientProfile
);

//User Profile
const UserController = require("../controllers/user.controllers");
router.post("/user/add", UserController.saveUser);
router.post("/user/", UserController.getUser);

module.exports = router;
