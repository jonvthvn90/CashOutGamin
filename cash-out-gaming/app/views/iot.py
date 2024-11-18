from app import app, db
from app.models import IoT
from flask import render_template, request, redirect, url_for

@app.route('/iot', methods=['GET', 'POST'])
def iot():
    if request.method == 'POST':
        iot_name = request.form['iot-name']
        iot_description = request.form['iot-description']
        iot = IoT(iot_name=iot_name, iot_description=iot_description)
        db.session.add(iot)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('iot.html')