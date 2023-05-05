const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  password: "admin",
  host: "localhost",
  port: "5324",
  database: "patient_profile_management",
});

client.connect();
module.exports = { client };
