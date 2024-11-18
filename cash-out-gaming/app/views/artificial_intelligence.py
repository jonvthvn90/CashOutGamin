from app import app, db
from app.models import ArtificialIntelligence
from flask import render_template, request, redirect, url_for

@app.route('/artificial_intelligence', methods=['GET', 'POST'])
def artificial_intelligence():
    if request.method == 'POST':
        artificial_intelligence_name = request.form['artificial-intelligence-name']
        artificial_intelligence_description = request.form['artificial-intelligence-description']
        artificial_intelligence = ArtificialIntelligence(artificial_intelligence_name=artificial_intelligence_name, artificial_intelligence_description=artificial_intelligence_description)
        db.session.add(artificial_intelligence)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('artificial_intelligence.html')