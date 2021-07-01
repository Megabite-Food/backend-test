from flask import Flask 
from config.db import db
from flask_migrate import Migrate
from blueprints.bp_index import bp_index
from blueprints.bp_registro import bp_registro

app = Flask(__name__)
app.config.from_object('config.settings')
db.init_app(app)
migrate = Migrate(app, db)

#Registro de Rutas
app.register_blueprint(bp_index)
app.register_blueprint(bp_registro)

#Desarrollo
if __name__ == '__main__':
    app.run(debug = True)