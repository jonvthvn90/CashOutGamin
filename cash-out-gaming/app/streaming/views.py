from app import app
from flask import render_template, request, redirect, url_for
from app.streaming import streaming

@app.route("/streaming")
def streaming():
    streaming = streaming()
    return render_template("streaming.html", streaming=streaming)