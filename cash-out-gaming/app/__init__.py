# app/__init__.py
from flask import Flask, render_template, request, redirect, url_for
from .models import db, User, Tournament, Match, Payment
from .views import login_required

app = Flask(__name__)
app.config["SECRET_KEY"] = "secret_key_here"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
db.init_app(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        user = User.query.filter_by(username=username).first()
        if user and user.check_password(password):
            login_user(user)
            return redirect(url_for("index"))
    return render_template("login.html")

@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        username = request.form["username"]
        email = request.form["email"]
        password = request.form["password"]
        user = User(username=username, email=email)
        user.set_password(password)
        db.session.add(user)
        db.session.commit()
        return redirect(url_for("login"))
    return render_template("register.html")

@app.route("/tournament")
@login_required
def tournament():
    tournaments = Tournament.query.all()
    return render_template("tournament.html", tournaments=tournaments)

@app.route("/match")
@login_required
def match():
    matches = Match.query.all()
    return render_template("match.html", matches=matches)

@app.route("/payment")
@login_required
def payment():
    payments = Payment.query.all()
    return render_template("payment.html", payments=payments)

if __name__ == "__main__":
    app.run(debug=True)