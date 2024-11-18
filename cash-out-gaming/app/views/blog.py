from app import app, db
from app.models import Post
from flask import render_template, request, redirect, url_for

@app.route('/blog', methods=['GET', 'POST'])
def blog():
    if request.method == 'POST':
        post_title = request.form['post-title']
        post_content = request.form['post-content']
        post = Post(title=post_title, content=post_content)
        db.session.add(post)
        db.session.commit()
        return redirect(url_for('blog'))
    posts = Post.query.all()
    return render_template('blog/blog.html', posts=posts)

@app.route('/post/<int:post_id>', methods=['GET', 'POST'])
def post(post_id):
    post = Post.query.get(post_id)
    return render_template('blog/post.html', post=post)