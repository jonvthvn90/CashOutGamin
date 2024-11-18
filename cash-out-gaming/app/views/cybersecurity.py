from app import app, db
from app.models import Cybersecurity
from flask import render_template, request, redirect, url_for

@app.route('/cybersecurity', methods=['GET', 'POST'])
def cybersecurity():
    if request.method == 'POST':
        cybersecurity_name = request.form['cybersecurity-name']
        cybersecurity_description = request.form['cybersecurity-description']
        cybersecurity = Cybersecurity(cybersecurity_name=cybersecurity_name, cybersecurity_description=cybersecurity_description)
        db.session.add(cybersecurity)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('cybersecurity.html')