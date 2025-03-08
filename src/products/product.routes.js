import { Router } from "express";
import { registrarProductos, obtenerProductos, obtenerCatalogo, editarProductos, incrementarInventario, decrementarInventario, productosAgotados, obtenerProductosMasVendidos, eliminarProducto, buscarProductoPorNombre, buscarProductoPorCategoria } from "./product.controller.js";
import { registrarProductosValidador, editarProductoValidador, incrementarInventarioValidador, decrementarInventarioValidador, productosAgotadosValidador, eliminarProductoValidador, obtenerProductosMasVendidosValidador, buscarProductoPorNombreValidador, obtenerCatalogoValidador, obtenerProductosValidador, buscarProductoPorCategoriaValidador } from "../middlewares/product-validator.js";

const router = Router();


router.post(
    "/registrarProductos",
    registrarProductosValidador,
    registrarProductos
);


router.get(
    "/producto/:uid", 
    obtenerProductosValidador,
    obtenerProductos
);


router.get(
    "/catalogo", 
    obtenerCatalogoValidador,
    obtenerCatalogo
);


router.put(
    "/producto/:uid", 
    editarProductoValidador, 
    editarProductos
);


router.put(
    "/producto/:uid/incrementarInventario", 
    incrementarInventarioValidador, 
    incrementarInventario
);


router.put(
    "/producto/:uid/decrementarInventario", 
    decrementarInventarioValidador, 
    decrementarInventario
);


router.get(
    "/productosAgotados", 
    productosAgotadosValidador, 
    productosAgotados
);


router.get(
    "/productosMasVendidos",
    obtenerProductosMasVendidosValidador,
    obtenerProductosMasVendidos
);


router.delete(
    "/eliminarProducto/:uid", 
    eliminarProductoValidador, 
    eliminarProducto
);

router.get(
    "/buscarProductoPorNombre",
    buscarProductoPorNombreValidador,
    buscarProductoPorNombre
)

router.get(
    "/buscarProductoPorCategoria",
    buscarProductoPorCategoriaValidador,
    buscarProductoPorCategoria
)

export default router;