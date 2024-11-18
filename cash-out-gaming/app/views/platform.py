from app import app, db
from app.models import Platform
from flask import render_template, request, redirect, url_for

@app.route('/platform', methods=['GET', 'POST'])
def platform():
    if request.method == 'POST':
        platform_name = request.form['platform_name']
        platform = Platform(platform_name=platform_name)
        db.session.add(platform)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('platform.html')