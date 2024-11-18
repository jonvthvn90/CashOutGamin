from app import app, db
from app.models import Test
from flask import render_template, request, redirect, url_for

@app.route('/testing', methods=['GET', 'POST'])
def testing():
    if request.method == 'POST':
        test_name = request.form['test_name']
        test_description = request.form['test_description']
        test = Test(test_name=test_name, test_description=test_description)
        db.session.add(test)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('testing.html')