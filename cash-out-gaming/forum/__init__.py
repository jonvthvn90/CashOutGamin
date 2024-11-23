from .views import ForumView, ThreadView, PostView
from .models import Forum, Thread, Post
from .forms import ThreadForm, PostForm
from .models import Post, Comment
from .views import forum, post_detail, create_post, create_comment
__all__ = [
    'ForumView',
    'ThreadView',
    'PostView',
    'Forum',
    'Thread',
    'Post',
    'ThreadForm',
    'PostForm',
    'Comment'
]