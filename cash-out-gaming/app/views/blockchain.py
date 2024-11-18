from app import app, db
from app.models import Blockchain
from flask import render_template, request, redirect, url_for

@app.route('/blockchain', methods=['GET', 'POST'])
def blockchain():
    if request.method == 'POST':
        blockchain_name = request.form['blockchain-name']
        blockchain_description = request.form['blockchain-description']
        blockchain = Blockchain(blockchain_name=blockchain_name, blockchain_description=blockchain_description)
        db.session.add(blockchain)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('blockchain.html')