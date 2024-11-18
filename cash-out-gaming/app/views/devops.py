from app import app, db
from app.models import DevOps
from flask import render_template, request, redirect, url_for

@app.route('/devops', methods=['GET', 'POST'])
def devops():
    if request.method == 'POST':
        devops_name = request.form['devops-name']
        devops_description = request.form['devops-description']
        devops = DevOps(devops_name=devops_name, devops_description=devops_description)
        db.session.add(devops)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('devops.html')