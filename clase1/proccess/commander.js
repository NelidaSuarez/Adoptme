import { Command } from "commander";

export const program = new Command();

 program
    .option("-d", "Variable para debug", false)  //1er el comando flag, 2do la descripción, 3ero el valor por defecto
    .option("-p <port>", "Puerto del servidor", 3000 )
    .option ("-m <mode>" , "Modo de ejecucion", "development")
    .requiredOption("-u <User>","Usuario del aplicativo", "No se declara usuario")  // Opciones obligatorias el tercer argumento es el valor por defecto
    .option("-l, --letters [letters...]", "Letras especificas")
    program.parse() // parse se utiliza para cerrar la ejecución de comandos.

    console.log ("Options", program.opts());
    
