const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getPatient = async function (query) {
  try {
    const patientProfile = await prisma.PatientProfile.findMany({
      include: { allergy: true },
    });
    return patientProfile;
  } catch (error) {
    throw Error("Error while retrieving Patient Profile");
  }
};

exports.savePatientProfile = async function (query) {
  try {
    const patientProfileData = await prisma.PatientProfile.create(query);
    return patientProfileData;
  } catch (error) {
    throw Error("Error while saving Patient Profile");
  }
};

exports.updatePatientProfile = async function (query, id) {
  try {
    const patientData = await prisma.PatientProfile.patch({
      where: {
        id: Number(id),
      },
      data: query,
      include: {
        allergy: true,
      },
    });
    return patientData;
  } catch (error) {
    throw Error("Error while updating Patient Profile");
  }
};

exports.deletePatientProfile = async function (query, id) {
  try {
    const deletePatientProfile = await prisma.PatientProfile.delete({
      where: {
        id: Number(id),
      },
    });
    return deletePatientProfile;
  } catch (error) {
    throw Error("Error while deleteing Patient Profile");
  }
};
