# Proyecto Backend - Electiva II

Este proyecto es una API desarrollada con Express y Mongoose para el curso de Electiva II. La API permite gestionar datos y ofrece una documentación Swagger para facilitar su uso y prueba.

## Tecnologías Usadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para construir aplicaciones web y APIs.
- **Mongoose**: Biblioteca de modelado de datos de MongoDB para Node.js.
- **Swagger**: Herramienta para documentar y probar APIs.
- **dotenv**: Cargar variables de entorno desde un archivo `.env`.
- **cors**: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- **morgan**: Middleware para registrar solicitudes HTTP.
- **nodemon**: Herramienta para reiniciar automáticamente el servidor de Node.js durante el desarrollo.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/proyecto-back-electiva-ll.git
   cd proyecto-back-electiva-ll

2. Instala las dependencias:

   ```bash
   npm install

3. Configura las variables de entorno:

   - Crea un archivo .env en la raíz del proyecto y define las siguientes variables:

    ```bash
   MONGO_URI=tu_uri_de_mongodb
   PORT=puerto_del_servidor (por defecto 3000)

## Ejecución

- Para iniciar el servidor en modo desarrollo:

    ```bash
   npm run dev

 - Para iniciar el servidor en modo producción:

    ```bash
   npm start

