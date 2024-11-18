from app import app, db
from app.models import Setting
from flask import render_template, request, redirect, url_for

@app.route('/settings', methods=['GET', 'POST'])
def settings():
    if request.method == 'POST':
        setting_name = request.form['setting_name']
        setting_value = request.form['setting_value']
        setting = Setting(setting_name=setting_name, setting_value=setting_value)
        db.session.add(setting)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('settings.html')