const AllergyService = require("../services/allergy.services");

exports.getAllergy = async function (req, res, next) {
  try {
    const allergy = await AllergyService.getAllergy({});
    return res.json(allergy);
  } catch (error) {
    next(error);
  }
};

exports.getAllergyById = async function (req, res, next) {
  const { id } = req.params;
  try {
    const allergy = await AllergyService.getAllergyById(id);
    res.json({ status: 200, data: allergy, message: "Retrieved" });
  } catch (error) {
    next(error);
  }
};

exports.saveAllergy = async function (req, res, next) {
  try {
    const allergy = await AllergyService.saveAllergy({ data: req.body });
    res.json(allergy);
  } catch (error) {
    next(error);
  }
};

exports.updateAllergy = async function (req, res, next) {
  const { id } = req.params;
  try {
    const allergy = await AllergyService.updateAllergy(req.body, id);
    res.json(allergy);
  } catch (error) {
    next(error);
  }
};

exports.deleteAllergy = async function (req, res, next) {
  const { id } = req.params;
  try {
    const patient = await AllergyService.deleteAllergy(req.body, id);
    res.json(patient);
  } catch (error) {
    next(error);
  }
};
