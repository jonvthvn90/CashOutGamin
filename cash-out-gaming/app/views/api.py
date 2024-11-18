from app import app, db
from app.models import API
from flask import render_template, request, redirect, url_for

@app.route('/api', methods=['GET', 'POST'])
def api():
    if request.method == 'POST':
        api_name = request.form['api-name']
        api_description = request.form['api-description']
        api = API(api_name=api_name, api_description=api_description)
        db.session.add(api)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('api.html')