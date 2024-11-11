import  swaggerJSDOC from "swagger-jsdoc";

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.1",
        info: {
            title: "Documentación API Adoptme",
            version: "1.0.0",
            description: "API Adoptme"
        }
    },
    apis: ["/src/docs/**/*.yaml"]
}

export const specs = swaggerJSDOC(swaggerOptions);