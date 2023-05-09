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

    const hashPassword = await bcrypt.hash(password, 10); //hashing the password

    const userData = await prisma.User.create({
      data: {
        name: name,
        password: hashPassword,
        email: email,
      },
    });
    return userData;
  } catch (error) {
    throw Error("Error while Saving User Profile");
  }
};

exports.getUser = async function (query, response) {
  const { id, email, password } = query;
  try {
    const userExist = await prisma.User.findUnique({
      where: {
        email: email,
      },
    });
    if (userExist) {
      const matchPassword = await bcrypt.compare(password, userExist.password);
      if (matchPassword) {
        const token = jwt.sign(
          {
            email: userExist.email,
            password: userExist.password,
          },
          process.env.JWT_LOGIN_TOKEN,
          {
            expiresIn: "1h",
          }
        );
        return response.json({
          status: 200,
          token: token,
        });
      } else {
        throw Error("Password no match");
      }
    } else {
      throw Error("NO user found");
    }
  } catch (error) {
    console.log(error);
  }
};
