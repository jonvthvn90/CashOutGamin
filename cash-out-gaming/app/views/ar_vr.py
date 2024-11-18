from app import app, db
from app.models import ARVR
from flask import render_template, request, redirect, url_for

@app.route('/ar_vr', methods=['GET', 'POST'])
def ar_vr():
    if request.method == 'POST':
        ar_vr_name = request.form['ar_vr-name']
        ar_vr_description = request.form['ar_vr-description']
        ar_vr = ARVR(ar_vr_name=ar_vr_name, ar_vr_description=ar_vr_description)
        db.session.add(ar_vr)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('ar_vr.html')