from app import app, db
from app.models import Chat
from flask import render_template, request, redirect, url_for

@app.route('/chat', methods=['GET', 'POST'])
def chat():
    if request.method == 'POST':
        message = request.form['message']
        chat = Chat(message=message)
        db.session.add(chat)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('chat.html')