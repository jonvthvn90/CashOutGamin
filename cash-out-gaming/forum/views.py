from app import app
from flask import render_template, request, redirect, url_for
from forum.models import Post

@app.route("/forum")
def forum():
    posts = Post.query.all()
    return render_template("forum.html", posts=posts)

@app.route("/forum/post", methods=["GET", "POST"])
def post():
    if request.method == "POST":
        # Post logic here
        pass
    return render_template("post.html")