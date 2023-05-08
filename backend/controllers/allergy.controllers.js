const AllergyService = require("../services/allergy.services");

exports.getAllergy = async function (req, res, next) {
  try {
    const allergy = await AllergyService.getAllergy({});
    return res.json(allergy);
  } catch (error) {
    next(error);
  }
};
