const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.saveUser = async function (query) {
  const { name, email, password } = query;
  try {
    const sameEmailCheck = await prisma.User.findUnique({
      where: { email: email },
    });

    if (sameEmailCheck) {
      throw Error("Email address must be unique");
    }

    const hashPassword = bcrypt.hash(password, 10); //hashing the password

    const userData = await prisma.User.create({
      data: {
        name: name,
        password: hashPassword,
        email: email,
      },
    });
    return userData;
  } catch (error) {
    console.log(error);
    throw Error("Error while Saving User Profile", error);
  }
};

exports.getUser = async function (query, response) {
  const { email, password } = query;
  try {
    const userExist = await prisma.User.findUnique({
      where: {
        email: email,
      },
    });
    if (!userExist) {
      throw Error("NO user found");
    }

    const matchPassword = await bcrypt.compare(password, userExist.password);
    if (!matchPassword) {
      throw Error("Password no match");
    }
    const token = jwt.sign(
      {
        id: userExist.id,
        email: userExist.email,
      },
      process.env.JWT_LOGIN_TOKEN,
      {
        expiresIn: "1h",
      }
    );
    return { token };
  } catch (error) {
    console.log("asdfasdfadsfasdfadsf", error);
  }
};
