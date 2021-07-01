#Modelos para ORM de la Base de Datos.
from sqlalchemy import Column, Integer, DateTime , func , MetaData , Float , UniqueConstraint , Date
from datetime import datetime
from config.db import db
import pytz

class Vehiculo(db.Model):
    idvehiculo = db.Column(db.Integer, primary_key=True )
    placa = db.Column(db.String(20))
    usuario = db.Column(db.String(100))
    idtipo = db.Column(db.Integer,db.ForeignKey('tipo.idtipo'))
    created = db.Column(db.DateTime,default=datetime.now(pytz.timezone('America/Lima')))
    relacion_visita = db.relationship('Visita',backref='Tipo',lazy=True)
    relacion_estancia = db.relationship('Estancia',backref='Tipo',lazy=True)

    def __init__(self,placa,usuario,idtipo,created):
        self.placa=placa 
        self.usuario=usuario 
        self.idtipo=idtipo
        self.created=created

class Tipo(db.Model):
    idtipo = db.Column(db.Integer, primary_key = True)
    nombretipo = db.Column(db.String(15),unique=True)
    precio = db.Column(db.Float)
    relacion_vehiculo = db.relationship('Vehiculo',backref='Tipo',lazy=True)
    def __init__(self,nombretipo,precio):
        self.nombretipo=nombretipo 
        self.precio=precio

class Visita(db.Model):
    idvisita = db.Column(db.Integer, primary_key = True)
    hora_inicio = db.Column(db.String(50))
    hora_fin = db.Column(db.String(50))
    idvehiculo = db.Column(db.Integer,db.ForeignKey('vehiculo.idvehiculo'))
    def __init__(self,hora_inicio,hora_fin,idvehiculo):
        self.hora_inicio = hora_inicio
        self.hora_fin = hora_fin
        self.idvehiculo = idvehiculo

class Estancia(db.Model):
    idestancia = db.Column(db.Integer, primary_key = True)
    idvehiculo = db.Column(db.Integer,db.ForeignKey('vehiculo.idvehiculo'))
    minutos = db.Column(db.Float)
    tipo = db.Column(db.String(30))
    def __init__(self,idvehiculo,minutos,tipo):
        self.idvehiculo=idvehiculo
        self.minutos=minutos 
        self.tipo=tipo

    



