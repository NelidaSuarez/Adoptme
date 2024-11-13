import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.1",
        info: {
            title: "Doc API Adoptme",
            version: "1.0.0",
            description: "API de Adoptme"
        }
    },
    apis:["./src/docs/**/*.yaml"]
}

export const specs = swaggerJSDoc(swaggerOptions);