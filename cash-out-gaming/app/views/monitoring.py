from app import app, db
from app.models import Monitor
from flask import render_template, request, redirect, url_for

@app.route('/monitoring', methods=['GET', 'POST'])
def monitoring():
    if request.method == 'POST':
        monitor_name = request.form['monitor_name']
        monitor_description = request.form['monitor_description']
        monitor = Monitor(monitor_name=monitor_name, monitor_description=monitor_description)
        db.session.add(monitor)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('monitoring.html')
``