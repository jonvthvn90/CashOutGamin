from app import app, db
from app.models import Stream
from flask import render_template, request, redirect, url_for

@app.route('/stream', methods=['GET', 'POST'])
def stream():
    if request.method == 'POST':
        stream_url = request.form['stream_url']
        stream = Stream(stream_url=stream_url)
        db.session.add(stream)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('stream.html')