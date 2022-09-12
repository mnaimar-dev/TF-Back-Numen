const { check, validationResult, body } = require("express-validator");
const { Supplement } = require("../models/suplementos");
const bcrypt = require("bcrypt");
const axios = require("axios");

const vistaUno = (req, res) => {
  res.render("index", { title: "Express" });
};

// ⬇️ Muestra todos los suplementos ⬇️
const vistaSuplementos = async (req, res) => {
  const suplementos = await Supplement.find();
  res.json({ suplementos });
};

// ⬇️ Muestra un suplementos ⬇️
const vistaUnSuplemento = async (req, res) => {
  try {
    const suplemento = await Supplement.findById(req.params.id);
    res.json({ suplemento });
  } catch (err) {
    res.status(400).json({ msg: "El id no es correcto", err });
  }
};

// ⬇️ Crea un nuevo suplemento ⬇️
const crearSuplemento = async (req, res) => {
  try {
    const error = validationResult(req);

    if (error.isEmpty()) {
      const product = new Supplement(req.body);
      await product.save();
      res.status(201).json({ product, msg: "Producto creado ✅" });
    } else {
      res.status(501).json(error);
    }
  } catch (err) {
    res.status(501).json({
      msg: "Este producto ya existe 👎🏻. Intenta agregando un nuevo producto.",
      err,
    });
  }
};

// ⬇️ Editar un suplemento ⬇️
const editarSuplemento = async (req, res) => {
  try {
    const error = validationResult(req);
    if (error.isEmpty()) {
      const { id } = req.params;
      const nameBeforeUpdate = await Supplement.findByIdAndUpdate(id, req.body);
      res.status(202).json({ name: req.body.name, nameBeforeUpdate });
    } else {
      res.status(501).json(error);
    }
  } catch (err) {
    res
      .status(501)
      .json({ msg: "Este suplemento ya existe en la base de datos.", err });
  }
};

// ⬇️ Eliminar un suplemento ⬇️
const eliminarSuplemento = async (req, res) => {
  try {
    const suplemento = await Supplement.findByIdAndDelete(req.params.id);
    res.json({
      msg: "El suplemento ha sido eliminado correctamente ✅",
      suplemento,
    });
  } catch (err) {
    res.status(400).json({
      msg: "No se ha podido eliminar el suplemento. Intente más tarde.",
    });
  }
};

// ⬇️ Consulta Axios ⬇️
const axiosConsult = async (req, res) => {
  try {
    const respuesta = await axios.get(
      "https://reqres.in/api/users/" + req.params.id,
      {
        timeout: 10000,
      }
    );
    res.json({
      status: respuesta.status,
      data: respuesta.data,
    });
  } catch (error) {
    res.json({ status: error.response.status, data: error.response.data });
  }
};

module.exports = {
  vistaUno,
  vistaSuplementos,
  vistaUnSuplemento,
  crearSuplemento,
  editarSuplemento,
  eliminarSuplemento,
  axiosConsult,
};
