from app import app, db
from app.models import Payment
from flask import render_template, request, redirect, url_for

@app.route('/payment', methods=['GET', 'POST'])
def payment():
    if request.method == 'POST':
        amount = request.form['amount']
        payment_method = request.form['payment_method']
        payment = Payment(amount=amount, payment_method=payment_method)
        db.session.add(payment)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('payment.html')