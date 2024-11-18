from app import app, db
from app.models import CloudComputing
from flask import render_template, request, redirect, url_for

@app.route('/cloud_computing', methods=['GET', 'POST'])
def cloud_computing():
    if request.method == 'POST':
        cloud_computing_name = request.form['cloud-computing-name']
        cloud_computing_description = request.form['cloud-computing-description']
        cloud_computing = CloudComputing(cloud_computing_name=cloud_computing_name, cloud_computing_description=cloud_computing_description)
        db.session.add(cloud_computing)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('cloud_computing.html')