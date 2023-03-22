const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./database/db"); // by using the pool we can run queries with postgres

//middleware - any time you're gonna make middle ware we have to use .use();
app.use(cors());
app.use(express.json()); // allowing us to give us access to request that body and we can get json data.

let userData = [];
//ROUTES
//create a users
app.post("/register", async (req, res) => {
  try {
    const { patient_id, first_name, last_name, email_address, password } =
      req.body;

    console.log("Ajay dangol");
    // const newRegistration = await db.client.query(
    //   "INSERT INTO patient_register (patient_id,first_name,last_name,email_address,password) VALUES($1,$2,$3,$4,$5)"
    // )[(patient_id, first_name, last_name, email_address, password)];
    let data =
      // const newRegistration = await db.client.query(
      //   "INSERT INTO test (description) VALUES($1) RETURNING *",
      //   [description]
      // );
      res.json(newRegistration);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/get-user", async (req, res) => {
  try {
    // const getUser= await pool.query("SELECT * FROM patient_register");
    // console.log("get Ajay Patient");
  } catch (error) {
    console.log(error);
  }
});

//get all user

//get a user

//update a user
//delete a user

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
