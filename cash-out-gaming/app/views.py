from app import app
from flask import render_template, request, redirect, url_for
from app.models import User, Game
from app.payment import cashAppPayController
from app.streaming import streaming
from django.shortcuts import render
from .models import User, Profile
from app import app, db, login_manager
from app.models import User, Tournament, Match, Leaderboard
from flask import render_template, request, redirect, url_for
from flask_login import login_user, logout_user, login_required
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Profile, Tournament, Match, Leaderboard, Challenge, Wager, Stream, Chat, Payment, Payout

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

def index(request):
    users = User.objects.all()
    return render(request, 'index.html', {'users': users})

def user(request, user_id):
    user = User.objects.get(id=user_id)
    return render(request, 'user.html', {'user': user})

def profile(request, profile_id):
    profile = Profile.objects.get(id=profile_id)
    return render(request, 'profile.html', {'profile': profile})


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User.query.filter_by(username=username).first()
        if user and user.password == password:
            login_user(user)
            return redirect(url_for('index'))
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        user = User(username=username, email=email, password=password)
        db.session.add(user)
        db.session.commit()
        return redirect(url_for('login'))
    return render_template('register.html')

@app.route('/profile')
@login_required
def profile():
    return render_template('profile.html')

@app.route('/tournament')
def tournament():
    tournaments = Tournament.query.all()
    return render_template('tournament.html', tournaments=tournaments)

@app.route('/match/<int:tournament_id>')
def match(tournament_id):
    matches = Match.query.filter_by(tournament_id=tournament_id).all()
    return render_template('match.html', matches=matches)

@app.route('/leaderboard/<int:tournament_id>')
def leaderboard(tournament_id):
    leaderboards = Leaderboard.query.filter_by(tournament_id=tournament_id).all()
    return render_template('leaderboard.html', leaderboards=leaderboards)

ef index(request):
    return render(request, 'app/index.html')

@login_required
def profile(request):
    profile = request.user.profile
    return render(request, 'app/profile.html', {'profile': profile})

@login_required
def tournaments(request):
    tournaments = Tournament.objects.all()
    return render(request, 'app/tournaments.html', {'tournaments': tournaments})

@login_required
def matches(request):
    matches = Match.objects.all()
    return render(request, 'app/matches.html', {'matches': matches})

@login_required
def leaderboard(request, tournament_id):
    leaderboard = Leaderboard.objects.filter(tournament_id=tournament_id)
    return render(request, 'app/leaderboard.html', {'leaderboard': leaderboard})

@login_required
def challenge(request, tournament_id):
    challenge = Challenge.objects.filter(tournament_id=tournament_id)
    return render(request, 'app/challenge.html', {'challenge': challenge})

@login_required
def wager(request, match_id):
    wager = Wager.objects.filter(match_id=match_id)
    return render(request, 'app/wager.html', {'wager': wager})

@login_required
def stream(request, match_id):
    stream = Stream.objects.filter(match_id=match_id)
    return render(request, 'app/stream.html', {'stream': stream})

@login_required
def chat(request, match_id):
    chat = Chat.objects.filter(match_id=match_id)
    return render(request, 'app/chat.html', {'chat': chat})

@login_required
def payment(request):
    payment = Payment.objects.filter(user=request.user)
    return render(request, 'app/payment.html', {'payment': payment})

@login_required
def payout(request):
    payout = Payout.objects.filter(user=request.user)
    return render(request, 'app/payout.html', {'payout': payout})