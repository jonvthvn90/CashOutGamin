from app import app, db
from app.models import FAQ
from flask import render_template, request, redirect, url_for

@app.route('/faq', methods=['GET', 'POST'])
def faq():
    if request.method == 'POST':
        question = request.form['question']
        answer = request.form['answer']
        faq = FAQ(question=question, answer=answer)
        db.session.add(faq