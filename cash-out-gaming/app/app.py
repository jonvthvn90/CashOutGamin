from flask import Flask, render_template, request, redirect, url_for
from app.models import User, Game
from app.payment import cashAppPayController
from app.streaming import streaming

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # Login logic here
        pass
    return render_template("login.html")

@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        # Register logic here
        pass
    return render_template("register.html")

@app.route("/games")
def games():
    games = Game.query.all()
    return render_template("games.html", games=games)

@app.route("/game/<int:game_id>")
def game(game_id):
    game = Game.query.get(game_id)
    return render_template("game.html", game=game)

@app.route("/streaming")
def streaming():
    return render_template("streaming.html")

@app.route("/earn", methods=["POST"])
def earn():
    user = User.query.get(request.user_id)
    amount = request.form["amount"]
    currency = request.form["currency"]
    payment = cashAppPayController.createPayment(amount, currency)
    user.balance += payment.amount
    db.session.commit()
    return redirect(url_for("index"))

@app.route("/pay", methods=["POST"])
def pay():
    user = User.query.get(request.user_id)
    amount = request.form["amount"]
    currency = request.form["currency"]
    payment = cashAppPayController.createPayment(amount, currency)
    user.balance -= payment.amount
    db.session.commit()
    return redirect(url_for("index"))