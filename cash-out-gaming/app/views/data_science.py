from app import app, db
from app.models import DataScience
from flask import render_template, request, redirect, url_for

@app.route('/data_science', methods=['GET', 'POST'])
def data_science():
    if request.method == 'POST':
        data_science_name = request.form['data-science-name']
        data_science_description = request.form['data-science-description']
        data_science = DataScience(data_science_name=data_science_name, data_science_description=data_science_description)
        db.session.add(data_science)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('data_science.html')