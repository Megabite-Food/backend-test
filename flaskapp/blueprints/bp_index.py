from flask import Blueprint , render_template
import flask 
bp_index = Blueprint('bp_index',__name__)

#Rutas del Blueprint Index
@bp_index .route('/',methods=['GET','POST'])
def index():
    return render_template("/index.html")

