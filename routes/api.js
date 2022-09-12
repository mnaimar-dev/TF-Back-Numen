const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const {
  vistaSuplementos,
  vistaUnSuplemento,
  crearSuplemento,
  editarSuplemento,
  eliminarSuplemento,
  axiosConsult,
} = require("../controller/controller");
const { checks } = require("../middleware/check");
const { validarId } = require("../middleware/validarId");

/* GET users listing. */
router.get("/ver", vistaSuplementos);
router.get("/ver/:id", validarId, vistaUnSuplemento);
router.post("/crear", checks, crearSuplemento);
router.put("/editar/:id", validarId, checks, editarSuplemento);
router.delete("/eliminar/:id", validarId, eliminarSuplemento);

// Axios Consult
router.get("/users/:id", axiosConsult); // Los ID son numeros del 1 al 12

module.exports = router;
