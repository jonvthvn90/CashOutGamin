from app import app, db
from app.models import Deployment
from flask import render_template, request, redirect, url_for

@app.route('/deployment', methods=['GET', 'POST'])
def deployment():
    if request.method == 'POST':
        deployment_name = request.form['deployment_name']
        deployment_description = request.form['deployment_description']
        deployment = Deployment(deployment_name=deployment_name, deployment_description=deployment_description)
        db.session.add(deployment)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('deployment.html')