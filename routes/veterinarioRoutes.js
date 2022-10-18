import express from "express";
const router = express.Router();
import {
  registrar,
  perfil,
  confirmar,
  autenticar,
  actualizarPerfil,
  actualizarPassword,
} from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";

// área publica
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);

// Area privada
router.get("/perfil", checkAuth, perfil);
router.put("/perfil/:id", checkAuth, actualizarPerfil);
router.put("/actualizar-password", checkAuth, actualizarPassword);

export default router;
