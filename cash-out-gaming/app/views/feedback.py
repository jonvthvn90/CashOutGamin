from app import app, db
from app.models import Feedback
from flask import render_template, request, redirect, url_for

@app.route('/feedback', methods=['GET', 'POST'])
def feedback():
    if request.method == 'POST':
        feedback_type = request.form['feedback-type']
        feedback_message = request.form['feedback-message']
        feedback = Feedback(feedback_type=feedback_type, feedback_message=feedback_message)
        db.session.add(feedback)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('feedback.html')