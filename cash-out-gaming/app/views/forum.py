from app import app, db
from app.models import Thread, Post
from flask import render_template, request, redirect, url_for

@app.route('/forum', methods=['GET', 'POST'])
def forum():
    if request.method == 'POST':
        thread_title = request.form['thread-title']
        thread_description = request.form['thread-description']
        thread = Thread(title=thread_title, description=thread_description)
        db.session.add(thread)
        db.session.commit()
        return redirect(url_for('forum'))
    threads = Thread.query.all()
    return render_template('forum/forum.html', threads=threads)

@app.route('/thread/<int:thread_id>', methods=['GET', 'POST'])
def thread(thread_id):
    if request.method == 'POST':
        post_title = request.form['post-title']
        post_content = request.form['post-content']
        post = Post(title=post_title, content=post_content, thread_id=thread_id)
        db.session.add(post)
        db.session.commit()
        return redirect(url_for('thread', thread_id=thread_id))
    thread = Thread.query.get(thread_id)
    posts = Post.query.filter_by(thread_id=thread_id).all()
    return render_template('forum/thread.html', thread=thread, posts=posts)

@app.route('/post/<int:post_id>', methods=['GET', 'POST'])
def post(post_id):
    post = Post.query.get(post_id)
    return render_template('forum/post.html', post=post)