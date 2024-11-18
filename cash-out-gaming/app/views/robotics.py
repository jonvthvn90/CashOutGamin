from app import app, db
from app.models import Robotics
from flask import render_template, request, redirect, url_for

@app.route('/robotics', methods=['GET', 'POST'])
def robotics():
    if request.method == 'POST':
        robotics_name = request.form['robotics-name']
        robotics_description = request.form['robotics-description']
        robotics = Robotics(robotics_name=robotics_name, robotics_description=robotics_description)
        db.session.add(robotics)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('robotics.html')