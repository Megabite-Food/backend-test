*************************************************
Aplicacion de Estacionamiento.
Autor : Jemmy Perez
Techs : Python , flask
bd : mysql
ORM : Flask-SQLAlchemy
*************************************************

Instalacion :
1. Instalar un entorno virtual de python version 3.7+ en FLASKAPP , levantarlo.
   -> virtualenv entornovirtual
2. Instalar el archivo requirements.txt 
   -> pip install -r requirements.txt 
3. Modificar Archivo config/settings.py , usuario - pass y nombre de BD.
4. Inicializar el ORM (ejecutar a la altura de la ruta app.py) -> flask db ini     
   Inicializar Migraciones                                     -> flask db migrate
   Actualizar BD                                               -> flask db upgrade 
5. Inicializar aplicacion ->   python app.py

6. Ejecutar el script de mysql (script.sql) para insertar los 3 primeros registros de la tabla tipo.

Quedo pendiente exportacion a archivo txt por falta de tiempo.
Saludos
