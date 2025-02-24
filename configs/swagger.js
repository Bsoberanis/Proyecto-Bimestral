import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Proyecto Bimestral API",
            version: "1.0.0",
            description: " sistema de ventas en linea",
            contact:{
                name: " Bsoberanis",
                email: "bsoberanis-2023433@kinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://localhost:27017/proyecto.Bimestral/v1"
            }
        ]
    },
    apis:[
        "./src/auth/auth.routes.js",
        "./src/user/user.routes.js",
        "./src/products/product.routes.js",
        "./src/category/category.routes.js"
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}