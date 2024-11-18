from app import app, db
from app.models import Challenge
from flask import render_template, request, redirect, url_for

@app.route('/challenge', methods=['GET', 'POST'])
def challenge():
    if request.method == 'POST':
        opponent = request.form['opponent']
        game = request.form['game']
        challenge = Challenge(opponent=opponent, game=game)
        db.session.add(challenge)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('challenge.html')