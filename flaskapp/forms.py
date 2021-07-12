from flask_wtf import FlaskForm 
from wtforms import Form, BooleanField, StringField, PasswordField, validators , SelectField
from models import Tipo

class Reporte(FlaskForm):
    placa = StringField('placa', [validators.Length(min=6, max=15),validators.DataRequired()])


class Registro_entrada(FlaskForm):
    placa = StringField('placa', [validators.Length(min=6, max=15),validators.DataRequired()])
    usuario = StringField('nombre cliente', [validators.Length(min=2, max=20),validators.DataRequired()])

class Salida(FlaskForm):
    placa = StringField('placa', [validators.Length(min=6, max=15),validators.DataRequired()])

class Alta(FlaskForm):
    placa = StringField('placa', [validators.Length(min=6, max=15),validators.DataRequired()])
    tipo = SelectField('tipo',coerce=int)
    def buscar_tipo(self):
        self.tipo.choices = [(tipo.idtipo, tipo.nombretipo) for tipo in Tipo.query.all()] 