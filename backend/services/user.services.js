const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.saveUser = async function (query, response) {
  const { name, email, password } = query;
  try {
    const sameEmailCheck = await prisma.User.findUnique({
      where: { email: email },
    });

    console.log(sameEmailCheck);

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
    response.json({
      status: 400,
      msg: error.message,
      token: "",
    });
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
      throw Error("No user found");
    }

    const matchPassword = await bcrypt.compare(password, userExist.password);
    if (!matchPassword) {
      throw Error("Password no match");
    }
    const token = jwt.sign(
      {
        id: userExist.user_id,
        email: userExist.email,
        name: userExist.name,
      },
      process.env.JWT_LOGIN_TOKEN,
      {
        expiresIn: "1h",
      }
    );
    return { token };
  } catch (error) {
    response.json({
      status: 400,
      msg: `Incorrect Email or Password.`,
      token: "",
    });
  }
};
