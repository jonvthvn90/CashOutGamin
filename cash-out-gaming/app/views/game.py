from app import app, db
from app.models import Game
from flask import render_template, request, redirect, url_for

@app.route('/game', methods=['GET', 'POST'])
def game():
    if request.method == 'POST':
        game_name = request.form['game_name']
        game = Game(game_name=game_name)
        db.session.add(game)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('game.html')