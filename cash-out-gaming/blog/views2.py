from app import app
from flask import render_template, request, redirect, url_for
from blog.models import Post

@app.route("/blog")
def blog():
    posts = Post.query.all()
    return render_template("blog.html", posts=posts)

@app.route("/blog/post", methods=["GET", "POST"])
def post():
    if request.method == "POST":
        # Post logic here
        pass
    return render_template("post.html")