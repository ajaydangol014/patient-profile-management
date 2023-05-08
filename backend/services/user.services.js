const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.saveUser = async function (query) {
  try {
    const userData = await prisma.User.create(query);
    return userData;
  } catch (error) {
    throw Error("Error while Saving User Profile");
  }
};
