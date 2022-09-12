const { check, validationResult, body } = require("express-validator");

const checks = [
  check("name")
    .exists()
    .not()
    .isEmpty()
    .withMessage("El nombre no puede estar vacío")
    .isString()
    .withMessage("El nombre debe ser de tipo String")
    .isLength({ min: 4 })
    .withMessage("El nombre debe tener un mínimo de 4 caracteres"),
  check("category")
    .exists()
    .not()
    .isEmpty()
    .withMessage("La categoría debe estar definida")
    .isString()
    .withMessage("La categoría debe ser de tipo String"),
  check("size")
    .exists()
    .not()
    .isEmpty()
    .withMessage("El tamaño no puede estar vacío")
    .isNumeric()
    .withMessage("El tamaño debe ser del tipo Number"),
  check("price")
    .exists()
    .not()
    .isEmpty()
    .withMessage("El precio no puede estar vacío")
    .isNumeric()
    .withMessage("El precio debe ser de tipo Number"),
  check("internNumber")
    .exists()
    .not()
    .isEmpty()
    .withMessage("Es necesario que agregues el número identificatorio")
    .isNumeric()
    .withMessage("Debe ser del tipo Number"),
];

module.exports = {
  checks,
};
