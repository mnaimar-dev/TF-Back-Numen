const { Supplement } = require("../models/suplementos");

const validarId = async (req, res, next) => {
  const suplemento = await Supplement.findById(req.params.id);
  if (suplemento !== null) {
    next();
  } else {
    res.json({ msg: "El ID es inválido" });
  }
};

module.exports = {
  validarId,
};
