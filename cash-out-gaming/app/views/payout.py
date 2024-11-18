from app import app, db
from app.models import Payout
from flask import render_template, request, redirect, url_for

@app.route('/payout', methods=['GET', 'POST'])
def payout():
    if request.method == 'POST':
        amount = request.form['amount']
        payout_method = request.form['payout_method']
        payout = Payout(amount=amount, payout_method=payout_method)
        db.session.add(payout)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('payout.html')