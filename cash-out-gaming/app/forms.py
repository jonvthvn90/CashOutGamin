from django import forms
from .models import User, Profile
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired
from .models import Post, Comment
from .models import Review, PaymentMethod, PaymentTransaction, CashOutRequest, CashOutTransaction

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ('rating', 'review')

    def __init__(self, *args, **kwargs):
        super(ReviewForm, self).__init__(*args, **kwargs)
        self.fields['rating'].widget.attrs['class'] = 'form-control'
        self.fields['review'].widget.attrs['class'] = 'form-control'

class PaymentMethodForm(forms.ModelForm):
    class Meta:
        model = PaymentMethod
        fields = ('name', 'description')

    def __init__(self, *args, **kwargs):
        super(PaymentMethodForm, self).__init__(*args, **kwargs)
        self.fields['name'].widget.attrs['class'] = 'form-control'
        self.fields['description'].widget.attrs['class'] = 'form-control'

class PaymentTransactionForm(forms.ModelForm):
    class Meta:
        model = PaymentTransaction
        fields = ('payment_method', 'amount')

    def __init__(self, *args, **kwargs):
        super(PaymentTransactionForm, self).__init__(*args, **kwargs)
        self.fields['payment_method'].widget.attrs['class'] = 'form-control'
        self.fields['amount'].widget.attrs['class'] = 'form-control'

class CashOutRequestForm(forms.ModelForm):
    class Meta:
        model = CashOutRequest
        fields = ('amount', 'payment_method')

    def __init__(self, *args, **kwargs):
        super(CashOutRequestForm, self).__init__(*args, **kwargs)
        self.fields['amount'].widget.attrs['class'] = 'form-control'
        self.fields['payment_method'].widget.attrs['class'] = 'form-control'

class CashOutTransactionForm(forms.ModelForm):
    class Meta:
        model = CashOutTransaction
        fields = ('cash_out_request', 'amount')

    def __init__(self, *args, **kwargs):
        super(CashOutTransactionForm, self).__init__(*args, **kwargs)
        self.fields['cash_out_request'].widget.attrs['class'] = 'form-control'
        self.fields['amount'].widget.attrs['class'] = 'form-control'
class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'content']

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['content']
class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')

class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ('bio',)

class ThreadForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired()])

class PostForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    content = TextAreaField('Content', validators=[DataRequired()])