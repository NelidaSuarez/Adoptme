# Definimos una imagen base de node y su versión para nuestro contenedor
FROM node

# Definimos el directorio de trabajo dentro del contenedor 
WORKDIR /app

# Copiamos el archivo package.json a la carpeta de trabajo
COPY package.json .

# Instalamos las dependencias del proyecto
RUN npm install

RUN npm install bcryptjs
# Copiamos el resto de los archivos a la carpeta de trabajo
COPY . .

# Exponemos el puerto 8080
EXPOSE 8080

# Definimos el comando para correr nuestra aplicación
CMD ["npm", "start"]



