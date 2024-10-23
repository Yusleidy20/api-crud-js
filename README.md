# Shop-CRUD

Este proyecto es una aplicación web simple para gestionar items en un inventario. Utiliza Node.js con Express para el backend y MySQL como base de datos. La interfaz se construye con HTML y Bootstrap.

## Características

- **Crear, Leer, Actualizar y Eliminar** (CRUD) items.
- Interfaz de usuario responsiva utilizando Bootstrap.
- API RESTful para la gestión de items.

## Tecnologías Utilizadas

- **Frontend**: HTML, Bootstrap
- **Backend**: Node.js, Express
- **Base de Datos**: MySQL
- **Dependencias**:
  - cors
  - express
  - mysql

## Instalación

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu_usuario/shop-crud.git
   cd shop-crud




Instala las dependencias:

npm install
Configura la base de datos:

Crea una base de datos en MySQL llamada itemsdb.

Crea una tabla item con la siguiente estructura:

CREATE TABLE item (
    id_item INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL
);

Inicia el servidor:
npm start


Accede a la aplicación:
Abre tu navegador y ve a http://localhost:3000.


API
Obtener todos los items
GET /api/items

![image](https://github.com/user-attachments/assets/938e69ac-23de-487e-95d5-fe06937f76f3)

Obtener un item por ID
GET /api/items/:id_item
![image](https://github.com/user-attachments/assets/0d8b1987-2a0c-46d9-9be7-cf6508a1722a)

Crear un nuevo item
POST /api/items
Cuerpo de la solicitud:

{
    "description": "Descripción del item",
    "price": 10.99,
    "stock": 5
}
![image](https://github.com/user-attachments/assets/71bb1134-d484-4c6e-ac61-27b9f1979cd5)


Actualizar un item
PUT /api/items/:id_item
![image](https://github.com/user-attachments/assets/ce1f6c33-e2ae-431d-98da-952d314cdfd8)


Eliminar un item
DELETE /api/items/:id_item
