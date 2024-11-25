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
from .models import Post, Comment
from .forms import PostForm, CommentForm
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Game, Review, PaymentMethod, PaymentTransaction, CashOutRequest, CashOutTransaction
from .forms import ReviewForm, PaymentMethodForm, PaymentTransactionForm, CashOutRequestForm, CashOutTransactionForm
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import User, Game, Tournament, Match, Bet
from .forms import UserForm, GameForm, TournamentForm, MatchForm, BetForm
from flask import render_template, request, redirect, url_for
from .models import db, User, Tournament, Match, Payment
from . import app

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

@app.route("/create_tournament", methods=["GET", "POST"])
@login_required
def create_tournament():
    if request.method == "POST":
        name = request.form["name"]
        description = request.form["description"]
        start_date = request.form["start_date"]
        end_date = request.form["end_date"]
        tournament = Tournament(name=name, description=description, start_date=start_date, end_date=end_date)
        db.session.add(tournament)
        db.session.commit()
        return redirect(url_for("tournament"))
    return render_template("create_tournament.html")

@app.route("/create_match", methods=["GET", "POST"])
@login_required
def create_match():
    if request.method == "POST":
        tournament_id = request.form["tournament_id"]
        player1_id = request.form["player1_id"]
        player2_id = request.form["player2_id"]
        start_date = request.form["start_date"]
        end_date = request.form["end_date"]
        match = Match(tournament_id=tournament_id, player1_id=player1_id, player2_id=player2_id, start_date=start_date, end_date=end_date)
        db.session.add(match)
        db.session.commit()
        return redirect(url_for("match"))
    return render_template("create_match.html")

@app.route("/make_payment", methods=["GET", "POST"])
@login_required
def make_payment():
    if request.method == "POST":
        amount = request.form["amount"]
        payment_method = request.form["payment_method"]
        payment = Payment(amount=amount, payment_method=payment_method)
        db.session.add(payment)
        db.session.commit()
        return redirect(url_for("payment"))
    return render_template("make_payment.html")
def index(request):
    return render(request, 'index.html')

def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('index')
    return render(request, 'login.html')

def register(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = UserForm()
    return render(request, 'register.html', {'form': form})

@login_required
def game_list(request):
    games = Game.objects.all()
    return render(request, 'game_list.html', {'games': games})

@login_required
def game_detail(request, pk):
    game = Game.objects.get(pk=pk)
    return render(request, 'game_detail.html', {'game': game})

@login_required
def tournament_list(request):
    tournaments = Tournament.objects.all()
    return render(request, 'tournament_list.html', {'tournaments': tournaments})

@login_required
def tournament_detail(request, pk):
    tournament = Tournament.objects.get(pk=pk)
    return render(request, 'tournament_detail.html', {'tournament': tournament})

@login_required
def match_list(request):
    matches = Match.objects.all()
    return render(request, 'match_list.html', {'matches': matches})

@login_required
def match_detail(request, pk):
    match = Match.objects.get(pk=pk)
    return render(request, 'match_detail.html', {'match': match})

@login_required
def bet_list(request):
    bets = Bet.objects.all()
    return render(request, 'bet_list.html', {'bets': bets})

@login_required
def bet_detail(request, pk):
    bet = Bet.objects.get(pk=pk)
    return render(request, 'bet_detail.html', {'bet': bet})

@login_required
def create_bet(request, pk):
    match = Match.objects.get(pk=pk)
    if request.method == 'POST':
        form = BetForm(request.POST)
        if form.is_valid():
            bet = form.save(commit=False)
            bet.match = match
            bet.user = request.user
            bet.save()
            return redirect('bet_list')
    else:
        form = BetForm()
    return render(request, 'create_bet.html', {'form': form, 'match': match})

@login_required
def update_bet(request, pk):
    bet = Bet.objects.get(pk=pk)
    if request.method == 'POST':
        form = BetForm(request.POST, instance=bet)
        if form.is_valid():
            form.save()
            return redirect('bet_list')
    else:
        form = BetForm(instance=bet)
    return render(request, 'update_bet.html', {'form': form, 'bet': bet})

@login_required
def delete_bet(request, pk):
    bet = Bet.objects.get(pk=pk)
    if request.method == 'POST':
        bet.delete()
        return redirect('bet_list')
    return render(request, 'delete_bet.html', {'bet': bet})

def index(request):
    games = Game.objects.all()
    return render(request, 'index.html', {'games': games})

def games(request):
    games = Game.objects.all()
    return render(request, 'games.html', {'games': games})

def game_detail(request, game_id):
    game = Game.objects.get(id=game_id)
    reviews = Review.objects.filter(game=game)
    return render(request, 'game_detail.html', {'game': game, 'reviews': reviews})

@login_required
def create_review(request, game_id):
    game = Game.objects.get(id=game_id)
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            review = form.save(commit=False)
            review.game = game
            review.user = request.user
            review.save()
            return redirect('game_detail', game_id=game_id)
    else:
        form = ReviewForm()
    return render(request, 'create_review.html', {'game': game, 'form': form})

@login_required
def edit_review(request, game_id, review_id):
    game = Game.objects.get(id=game_id)
    review = Review.objects.get(id=review_id)
    if request.method == 'POST':
        form = ReviewForm(request.POST, instance=review)
        if form.is_valid():
            form.save()
            return redirect('game_detail', game_id=game_id)
    else:
        form = ReviewForm(instance=review)
    return render(request, 'edit_review.html', {'game': game, 'review': review, 'form': form})

@login_required
def delete_review(request, game_id, review_id):
    game = Game.objects.get(id=game_id)
    review = Review.objects.get(id=review_id)
    review.delete()
    return redirect('game_detail', game_id=game_id)

def payment_methods(request):
    payment_methods = PaymentMethod.objects.all()
    return render(request, 'payment_methods.html', {'payment_methods': payment_methods})

def payment_method_detail(request, payment_method_id):
    payment_method = PaymentMethod.objects.get(id=payment_method_id)
    return render(request, 'payment_method_detail.html', {'payment_method': payment_method})

@login_required
def create_payment_method(request):
    if request.method == 'POST':
        form = PaymentMethodForm(request.POST)
        if form.is_valid():
            payment_method = form.save(commit=False)
            payment_method.user = request.user
            payment_method.save()
            return redirect('payment_methods')
    else:
        form = PaymentMethodForm()
    return render(request, 'create_payment_method.html', {'form': form})

@login_required
def edit_payment_method(request, payment_method_id):
    payment_method = PaymentMethod.objects.get(id=payment_method_id)
    if request.method == 'POST':
        form = PaymentMethodForm(request.POST, instance=payment_method)
        if form.is_valid():
            form.save()
            return redirect('payment_methods')
    else:
        form = PaymentMethodForm(instance=payment_method)
    return render(request, 'edit_payment_method.html', {'payment_method': payment_method, 'form': form})

@login_required
def delete_payment_method(request, payment_method_id):
    payment_method = PaymentMethod.objects.get(id=payment_method_id)
    payment_method.delete()
    return redirect('payment_methods')

def payment_transactions(request):
    payment_transactions = PaymentTransaction.objects.all()
    return render(request, 'payment_transactions.html', {'payment_transactions': payment_transactions})

def payment_transaction_detail(request, payment_transaction_id):
    payment_transaction = PaymentTransaction.objects.get(id=payment_transaction_id)
    return render(request, 'payment_transaction_detail.html', {'payment_transaction': payment_transaction})

@login_required
def create_payment_transaction(request):
    if request.method == 'POST':
        form = PaymentTransactionForm(request.POST)
        if form.is_valid():
            payment_transaction = form.save(commit=False)
            payment_transaction.user = request.user
            payment_transaction.save()
            return redirect('payment_transactions')
    else:
        form = PaymentTransactionForm()
    return render(request, 'create_payment_transaction.html', {'form': form})

@login_required
def edit_payment_transaction(request, payment_transaction_id):
    payment_transaction = PaymentTransaction.objects.get(id=payment_transaction_id)
    if request.method == 'POST':
        form = PaymentTransactionForm(request.POST, instance=payment_transaction)
        if form.is_valid():
            form.save()
            return redirect('payment_transactions')
    else:
        form = PaymentTransactionForm(instance=payment_transaction)
    return render(request, 'edit_payment_transaction.html', {'payment_transaction': payment_transaction, 'form': form})

@login_required
def delete_payment_transaction(request, payment_transaction_id):
    payment_transaction = PaymentTransaction.objects.get(id=payment_transaction_id)
    payment_transaction.delete()
    return redirect('payment_transactions')

def cash_out_requests(request):
    cash_out_requests = CashOutRequest.objects.all()
    return render(request, 'cash_out_requests.html', {'cash_out_requests': cash_out_requests})

def cash_out_request_detail(request, cash_out_request_id):
    cash_out_request = CashOutRequest.objects.get(id=cash_out_request_id)
    return render(request, 'cash_out_request_detail.html', {'cash_out_request': cash_out_request})

@login_required
def create_cash_out_request(request):
    if request.method == 'POST':
        form = CashOutRequestForm(request.POST)
        if form.is_valid():
            cash_out_request = form.save(commit=False)
            cash_out_request.user = request.user
            cash_out_request.save()
            return redirect('cash_out_requests')
    else:
        form = CashOutRequestForm()
    return render(request, 'create_cash_out_request.html', {'form': form})

@login_required
def edit_cash_out_request(request, cash_out_request_id):
    cash_out_request = CashOutRequest.objects.get(id=cash_out_request_id)
    if request.method == 'POST':
        form = CashOutRequestForm(request.POST, instance=cash_out_request)
        if form.is_valid():
            form.save()
            return redirect('cash_out_requests')
    else:
        form = CashOutRequestForm(instance=cash_out_request)
    return render(request, 'edit_cash_out_request.html', {'cash_out_request': cash_out_request, 'form': form})

@login_required
def delete_cash_out_request(request, cash_out_request_id):
    cash_out_request = CashOutRequest.objects.get(id=cash_out_request_id)
    cash_out_request.delete()
    return redirect('cash_out_requests')

def cash_out_transactions(request):
    cash_out_transactions = CashOutTransaction.objects.all()
    return render(request, 'cash_out_transactions.html', {'cash_out_transactions': cash_out_transactions})

def cash_out_transaction_detail(request, cash_out_transaction_id):
    cash_out_transaction = CashOutTransaction.objects.get(id=cash_out_transaction_id)
    return render(request, 'cash_out_transaction_detail.html', {'cash_out_transaction': cash_out_transaction})

@login_required
def create_cash_out_transaction(request):
    if request.method == 'POST':
        form = CashOutTransactionForm(request.POST)
        if form.is_valid():
            cash_out_transaction = form.save(commit=False)
            cash_out_transaction.user = request.user
            cash_out_transaction.save()
            return redirect('cash_out_transactions')
    else:
        form = CashOutTransactionForm()
    return render(request, 'create_cash_out_transaction.html', {'form': form})

@login_required
def edit_cash_out_transaction(request, cash_out_transaction_id):
    cash_out_transaction = CashOutTransaction.objects.get(id=cash_out_transaction_id)
    if request.method == 'POST':
        form = CashOutTransactionForm(request.POST, instance=cash_out_transaction)
        if form.is_valid():
            form.save()
            return redirect('cash_out_transactions')
    else:
        form = CashOutTransactionForm(instance=cash_out_transaction)
    return render(request, 'edit_cash_out_transaction.html', {'cash_out_transaction': cash_out_transaction, 'form': form})

@login_required
def delete_cash_out_transaction(request, cash_out_transaction_id):
    cash_out_transaction = CashOutTransaction.objects.get(id=cash_out_transaction_id)
    cash_out_transaction.delete()
    return redirect('cash_out_transactions')
def index(request):
    posts = Post.objects.all()
    return render(request, 'index.html', {'posts': posts})

@login_required
def create_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        form = PostForm()
    return render(request, 'create_post.html', {'form': form})

@login_required
def post(request, pk):
    post = Post.objects.get(pk=pk)
    comments = post.comment_set.all()
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('post', pk=pk)
    else:
        form = CommentForm()
    return render(request, 'post.html', {'post': post, 'comments': comments, 'form': form})
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

def index(request):
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