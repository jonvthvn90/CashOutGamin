from app import app, db
from app.models import Wager
from flask import render_template, request, redirect, url_for

@app.route('/wager', methods=['GET', 'POST'])
def wager():
    if request.method == 'POST':
        amount = request.form['amount']
        game = request.form['game']
        wager = Wager(amount=amount, game=game)
        db.session.add(wager)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('wager.html')