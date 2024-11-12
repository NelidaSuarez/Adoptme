import { createLogger, format, transports } from "winston";

const { combine, timestamp, printf, colorize } = format;

//formateo custom 
const customFormat = printf( ({ level, message, timestamp }) =>{
    return `${timestamp} [${level}]: ${message}`;
});
 
export const logger = createLogger ( {
    level: "info", //lvl min de log
    format: combine(
        colorize(),
        timestamp({ format:"YYYY-MM-DD HH:mm:ss"}),
        customFormat
    ),
    transports:[
        new transports.Console(),
        new transports.File({ filename: "logs/error.log" , level: "error"}),
        new transports.File({ filename: "logs/combine.log" }),
    ]
});