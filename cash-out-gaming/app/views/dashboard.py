from app import app, db
from app.models import Dashboard
from flask import render_template, request, redirect, url_for

@app.route('/dashboard', methods=['GET', 'POST'])
def dashboard():
    if request.method == 'POST':
        dashboard_name = request.form['dashboard-name']
        dashboard_description = request.form['dashboard-description']
        dashboard = Dashboard(dashboard_name=dashboard_name, dashboard_description=dashboard_description)
        db.session.add(dashboard)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('dashboard.html')