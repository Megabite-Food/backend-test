# Prueba Técnica - Programador (Back-end)
La siguiente es una prueba para evaluar a los postulantes a programador **Back-end**.

## INSTALACION
- instalar dependencias
```bash
npm install
```
- restaurar esquema de base de datos
```bash
npx prisma db push
```
- ingresar los registros iniciales necesarios
```bash
npx prisma db seed
```
### uso
Los endpoints disponibles son:
- vehicles para dar de alta nuevos vehiculos (especificando su tipo)
- parking para registrar el uso del servicio
Inicar el servicio:
```bash
npm run start
```
Hacer request desde un cliente http: curl, postman a http://localhost:3000/

para dar de alta un vehiculo:
- metodo: POST
- endpoint: /vehicles
- body(JSON): {"licensePlate":"UIOP0987","vehicleTypeId":3}

para registrar un uso de parking
- metodo: POST
- endpoint: /parking
- body(JSON): {"licensePlate":"UIOP0987"}

### justificacion
La tabla VehicleType permite soportar los diferentes tipos actuales y agregar nuevos
La tabla Tariff permite mantener un control de las tarifas aplicadas segun el tipo