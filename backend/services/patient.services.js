const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getPatient = async function () {
  try {
    const patientProfile = await prisma.PatientProfile.findMany({
      include: { allergy: true },
      where: {
        delFlg: false,
      },
    });
    return patientProfile;
  } catch (error) {
    throw Error("Error while retrieving Patient Profile");
  }
};

exports.getPatientByUserId = async function (id) {
  try {
    const patientData = await prisma.PatientProfile.findMany({
      where: {
        userId: Number(id),
      },
      include: {
        allergy: true,
      },
    });
    return patientData;
  } catch (error) {
    console.log(error);
    throw Error("Error while updating Patient Profile");
  }
};

exports.getPatientById = async function (id) {
  try {
    const patientData = await prisma.PatientProfile.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        allergy: true,
      },
    });
    return patientData;
  } catch (error) {
    throw Error("Error while updating Patient Profile");
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
    const patientData = await prisma.PatientProfile.update({
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
    console.log(error);
    throw Error("Error while updating Patient Profile");
  }
};

exports.deletePatientProfile = async function (query, id) {
  try {
    const deletePatientProfile = await prisma.PatientProfile.update({
      where: {
        id: Number(id),
      },
      data: query,
      include: {
        allergy: true,
      },
    });
    return deletePatientProfile;
  } catch (error) {
    throw Error("Error while deleteing Patient Profile");
  }
};
