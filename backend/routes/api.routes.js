const router = require("express").Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/patient-profile", async (req, res, next) => {
  try {
    const patientProfile = await prisma.PatientProfile.findMany({
      include: { allergy: true },
    });
    res.json(patientProfile);
  } catch (error) {
    next(error);
  }
});

// router.get("/patient-profile/:id", async (req, res, next) => {
//   // getting profile by id
//   try {
//     const { id } = req.params;
//     const patientProfile = await prisma.PatientProfile.findUnique({
//       where: {
//         id: Number(id),
//       },
//       include: {
//         allergy: true,
//       },
//     });
//     res.json(patientProfile);
//   } catch (error) {
//     next(error);
//   }
// });

router.post("/patient-profile/add", async (req, res, next) => {
  // creating new profile
  console.log("jhdfahdsjfh");
  try {
    const patientProfile = await prisma.PatientProfile.create({
      data: req.body,
    });

    res.json(patientProfile);
  } catch (error) {
    next(error);
  }
});

router.delete("/patient-profile/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletePatientProfile = await prisma.PatientProfile.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(deletePatientProfile);
  } catch (error) {
    next(error);
  }
});

router.patch("/patient-profile/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatePatientProfile = await prisma.PatientProfile.patch({
      where: {
        id: Number(id),
      },
      data: req.body, //data sent from frontend
      include: {
        allergy: true,
      },
    });
    res.json(updatePatientProfile);
  } catch (error) {
    next(error);
  }
});

//retrieve data from AllergyController
const AllergyController = require("../controllers/allergy.controllers");
router.get("/allergy", AllergyController.getAllergy);

module.exports = router;
