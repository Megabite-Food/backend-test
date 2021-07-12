from flask.app import Flask
from werkzeug.utils import redirect
from forms import Registro_entrada
from flask import Blueprint , render_template , request , flash, url_for , redirect
from models import Vehiculo,Tipo, Visita , Estancia 
from forms import Registro_entrada , Salida , Alta , Reporte
from config.db import db 
from sqlalchemy import exc , desc , func
from datetime import datetime
import datetime as dt 
import dateutil.parser
import flask 
bp_registro = Blueprint('bp_registro',__name__)

@bp_registro.route('/reporte',methods=['GET','POST'])
def reporte():
    form  = Reporte(request.form)
    if form.validate_on_submit():
        placa = form.placa.data
        #Validar si existe placa .
        existe = Vehiculo.query.filter_by(placa=placa).first()
        if not existe :
            mensaje =' Error , Vehiculo de placa ' + str(placa) + ' No existe'
            flash(mensaje)
            return redirect(url_for('bp_registro.reporte'))
        else : 
            #Obtener precio de residente.
            p = Tipo.query.filter_by(idtipo=3).first()
            precio = p.precio
            #Núm. placa 	Tiempo estacionado (min.) 	Cantidad a pagar
            print(precio)
            print(placa)
            datos = db.engine.execute('SELECT V.PLACA , E.MINUTOS , E.MINUTOS * ' + str(precio) +
            ' AS TOTAL  FROM VEHICULO V INNER JOIN ESTANCIA E ON E.IDVEHICULO = V.IDVEHICULO AND V.PLACA =\''+str(placa)+'\'')
            #datos = db.engine.execute('SELECT V.PLACA , E.MINUTOS , E.MINUTOS * ' + str(precio) +
            #' AS TOTAL  FROM VEHICULO V INNER JOIN ESTANCIA E ON E.IDVEHICULO = V.IDVEHICULO ')
            #datos = db.engine.execute('SELECT V.PLACA AS PLACA FROM VEHICULO V')
            return render_template("generar_reporte.html" , datos=datos )
    return render_template("reporte.html",form=form)


@bp_registro.route('/tablas',methods=['GET','POST'])
def tablas():
    vehiculos = Vehiculo.query.all()
    tipos = Tipo.query.all()
    visitas = Visita.query.all()
    estancias = Estancia.query.all()
    return render_template("tablas.html",vehiculos=vehiculos,tipos=tipos,visitas=visitas,estancias=estancias)


@bp_registro.route('/comienzames',methods=['GET','POST'])
def comienzames():
    #Pone a 0 todos los minutos de la tabla estancia (Solo se registran residentes)
    reseteos = Estancia.query.filter_by(tipo="Residente").all()
    for reset in reseteos:
        reset.minutos=0
    db.session.commit()
    mensaje ='Se ha Reseteado a 0  los Minutos en instancia de los Residentes '
    flash(mensaje)
    return redirect(url_for('bp_registro.registro'))

@bp_registro.route('/alta',methods=['GET','POST'])
def alta():
    form = Alta(request.form)
    form.buscar_tipo()
    if form.validate_on_submit():
        placa = form.placa.data 
        tipo = form.tipo.data 
        c = Tipo.query.filter_by(idtipo=tipo).first()
        cc = c.nombretipo
        #Actualizar placa de vehiculo segun tipo
        vehiculo = Vehiculo.query.filter_by(placa=placa).first()
        if vehiculo is None: #No existe
            mensaje ='ERROR VEHICULO NO EXISTE'
            flash(mensaje)
            return redirect(url_for('bp_registro.alta'))
        else :  #Existe 
            vehiculo.idtipo = tipo 
            db.session.commit()
            mensaje ='Vehiculo Actualizado correctamente a ' + str(cc)
            flash(mensaje)
            return redirect(url_for('bp_registro.alta'))

    return render_template("/alta.html",form=form)

#Rutas del Blueprint Index
@bp_registro.route('/registro',methods=['GET','POST'])
def registro():
    form = Registro_entrada(request.form)
    if  form.validate_on_submit():
        placa = form.placa.data
        nombre = form.usuario.data


        #Validar Si Existe Vehiculo por placa.
        validar_placa = Vehiculo.query.filter_by(placa=placa).first()
        #Si Vehiculo es Nuevo
        if validar_placa  is None:
            try:
                #Vehiculo No Residente Registrado
                nuevo_vehiculo=Vehiculo(placa,nombre,1,None)
                db.session.add(nuevo_vehiculo)
                db.session.flush()
                #Registro En Visita.
                hora_inicio = dt.datetime.now().strftime("%Y-%m-%d %H:%M:%S") 
                nuevo_visita=Visita(str(hora_inicio),None,nuevo_vehiculo.idvehiculo)
                db.session.add(nuevo_visita)
                db.session.commit()
                mensaje ='Vehiculo Nuevo Agregado Hora Inicio : ' + str(hora_inicio)
                flash(mensaje)
                return redirect(url_for('bp_registro.registro'))
            except exc.SQLAlchemyError as e:
                mensaje = "Error : " + str(e._sql_message)
                flash(mensaje)
                return redirect(url_for('bp_registro.registro'))
        #Si Vehiculo no es nuevo 
        elif validar_placa is not None :
            #Registro En Visita.
            #Validar si el ultimo registro en visita no Tiene Hora de Salida
            validacion = Visita.query.filter_by(idvehiculo=validar_placa.idvehiculo).filter_by(hora_fin=None).order_by(Visita.idvisita.asc()).first()
            if validacion: 
                mensaje ='Error , Vehiculo Ya Tiene un Registro Abierto sin hora de Salida '
                flash(mensaje)
                return redirect(url_for('bp_registro.registro'))
            try:
                hora_inicio = dt.datetime.now().strftime("%Y-%m-%d %H:%M:%S") 
                nuevo_visita=Visita(str(hora_inicio),None,validar_placa.idvehiculo)
                db.session.add(nuevo_visita)
                db.session.commit()
                mensaje ='Vehiculo No Nuevo Registrado a Visita Agregado Hora Inicio : ' + str(hora_inicio)
                flash(mensaje)
                return redirect(url_for('bp_registro.registro'))
            except exc.SQLAlchemyError as e:
                mensaje = "Error : " + str(e._sql_message)
                flash(mensaje)
                return redirect(url_for('bp_registro.registro'))
        #Si Vehiculo no es nuevo y Residente o Oficial
    return render_template("/registrar.html",form=form)

@bp_registro.route('/salida',methods=['GET','POST'])
def salida():
    form = Salida(request.form)
    if  form.validate_on_submit():
        placa = form.placa.data
        #Validar tipo de Vehiculo
        vehiculo = Vehiculo.query.filter_by(placa=placa).first()
        if not vehiculo : #Si no existe
            mensaje='Error Vehiculo no Existe'
            flash(mensaje)
            return redirect(url_for('bp_registro.salida'))
        tipo_cli = Tipo.query.filter_by(idtipo=vehiculo.idtipo).first()
        tip = tipo_cli.nombretipo
        precio = tipo_cli.precio

        #Registra Hora de Salida en tabla Visitas , solo si ultima visita obtenida del vehiculo tiene hora fin vacia.
        salida = Visita.query.filter_by(idvehiculo=vehiculo.idvehiculo).filter_by(hora_fin=None).order_by(Visita.idvisita.asc()).first()
        if salida is None: 
            mensaje='Error No se Puede Registrar Esta Salida '
            flash(mensaje)
            return redirect(url_for('bp_registro.salida'))
        hora_fin = dt.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        salida.hora_fin = hora_fin
        db.session.commit() 
        mensaje='Hora de Salida Registrada Correctamente , Cliente Tipo : ' + str(tip) + ' a la Hora : ' + str(hora_fin)
        flash(mensaje)
        #Si Es No Residente.
        if vehiculo.idtipo == 1:
            ini = datetime.strptime(salida.hora_inicio,'%Y-%m-%d %H:%M:%S')
            fin = datetime.strptime(salida.hora_fin,'%Y-%m-%d %H:%M:%S')
            minutos = (abs((ini-fin).total_seconds()))/60 
            total_pagar = minutos * precio 
            mensaje = "El Total a Pagar es : " + str(total_pagar) + " Soles"
            flash(mensaje)
            return redirect(url_for('bp_registro.salida'))

        #Solamente si el Vehiculo es Residente , obtiene ultima hora inicio y fin , y agrega los minutos.
        if vehiculo.idtipo == 3:
            #Obtiene Diferencia en minutos.
            ini = datetime.strptime(salida.hora_inicio,'%Y-%m-%d %H:%M:%S')
            fin = datetime.strptime(salida.hora_fin,'%Y-%m-%d %H:%M:%S')
            minutos = (abs((ini-fin).total_seconds()))/60 
            estancia = Estancia.query.filter_by(idvehiculo=vehiculo.idvehiculo).first()
            if estancia is None: #Primera Vez En Tabla estancia
                nueva_estancia = Estancia(vehiculo.idvehiculo,minutos,tip)
                db.session.add(nueva_estancia)
                db.session.commit()
            if estancia is not None: #Ya Registrado en tabla , se agregan los minutos.
                estancia.minutos = estancia.minutos + minutos 
                db.session.commit()

        return redirect(url_for('bp_registro.salida'))


        return render_template("/salida.html",form=form)
    return render_template("/salida.html",form=form)