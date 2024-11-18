from app import app, db
from app.models import Data
from flask import render_template, request, redirect, url_for

@app.route('/data', methods=['GET', 'POST'])
def data():
    if request.method == 'POST':
        data_name = request.form['data-name']
        data_description = request.form['data-description']
        data = Data(data_name=data_name, data_description=data_description)
        db.session.add(data)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('data.html')