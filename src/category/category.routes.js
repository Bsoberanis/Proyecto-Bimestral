import { Router } from "express";
import { registrarMarca, eliminarCategoria, editarCategorias, visualizarCategorias } from "./category.controller.js";
import { registrarMarcaValidador, eliminarCategoriaValidador, actualizarCategoriaValidador, visualizarCategoriasValidador } from "../middlewares/category-validator.js";

const router = Router();


router.post(
    "/registrarMarca",
    registrarMarcaValidador,
    registrarMarca
);


router.get(
    "/visualizarCategorias",
    visualizarCategoriasValidador,
    visualizarCategorias
);


router.delete(
    "/eliminarCategoria/:uid",
    eliminarCategoriaValidador,
    eliminarCategoria
);


router.patch(
    "/actualizarCategoria/:uid",
    actualizarCategoriaValidador,
    editarCategorias
);

export default router;