const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllergy = async function (query) {
  try {
    const allergyData = await prisma.Allergy.findMany({
      include: { user: true },
    });
    return allergyData;
  } catch (error) {
    throw Error("Error while retrieving Allergy data");
  }
};

exports.saveAllergy = async function (query) {
  try {
    const allergyData = await prisma.Allergy.create({ query });
    return allergyData;
  } catch (error) {
    throw Error("Error while retrieving Allergy data");
  }
};
