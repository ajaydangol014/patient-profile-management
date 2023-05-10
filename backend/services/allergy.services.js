const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllergy = async function (query) {
  try {
    const allergyData = await prisma.Allergy.findMany({
      include: { user: true },
      where: {
        delFlg: false,
      },
    });
    return allergyData;
  } catch (error) {
    throw Error("Error while retrieving Allergy data");
  }
};

exports.getAllergyById = async function (id) {
  try {
    const allergyData = await prisma.Allergy.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        user: true,
      },
    });
    return allergyData;
  } catch (error) {
    throw Error("Error while updating Patient Profile");
  }
};

exports.saveAllergy = async function (query) {
  try {
    const allergyData = await prisma.Allergy.create(query);
    return allergyData;
  } catch (error) {
    throw Error("Error while retrieving Allergy data");
  }
};

exports.updateAllergy = async function (query, id) {
  try {
    const patientData = await prisma.Allergy.update({
      where: {
        id: Number(id),
      },
      data: query,
      include: {
        user: true,
      },
    });
    return patientData;
  } catch (error) {
    console.log(error);
    throw Error("Error while updating Patient Profile");
  }
};

exports.deleteAllergy = async function (query, id) {
  try {
    const allergy = await prisma.Allergy.update({
      where: {
        id: Number(id),
      },
      data: query,
      include: {
        user: true,
      },
    });
    return allergy;
  } catch (error) {
    throw Error("Error while deleteing Patient Profile");
  }
};
