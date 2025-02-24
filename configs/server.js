"use strict"

import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import { dbConexion } from "./mongo.js"
import authRoutes from "../src/auth/auth.routes.js"
import userRoutes from "../src/user/user.routes.js"
import productRoutes from "../src/products/product.routes.js"
import categoryRoutes from "../src/category/category.routes.js"
import apiLimiter from "../src/middlewares/rate-limit-validator.js"
import { swaggerDocs, swaggerUi } from "./swagger.js"

export const middlewares = (app) =>{
    app.use(express.json())
    app.use(cors())
    app.use(helmet())
    app.use(morgan("dev"))
    app.use(apiLimiter)
}

export const routes = (app) =>{
    app.use("/proyectoBimestral/v1/auth", authRoutes)
    app.use("/proyectoBimestral/v1/user", userRoutes)
    app.use("/proyectoBimestral/v1/products" , productRoutes)
    app.use("/proyectoBimestral/v1/category", categoryRoutes)
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}

export const conectarDB = async () =>{
    try{
        await dbConexion()
    }catch(e){
        console.log(`DATABASE CONNECTION FAILED: ${e}`)
        process.exit(1)    
    }
}

  

export const inicioServidor = async () => {
    const app = express();
    try {
        middlewares(app);
        await conectarDB(); // Esperar la conexión antes de continuar
        routes(app);
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            console.log(` SERVER CORRIENDO EN EL PUERTO ${PORT}`);
        });
    } catch (err) {
        console.error(` FALLO INICIO DEL SERVIDOR: ${err}`);
        process.exit(1); // Salir si el servidor no puede arrancar
    }
};

