from app import app, db
from app.models import Report
from flask import render_template, request, redirect, url_for

@app.route('/report', methods=['GET', 'POST'])
def report():
    if request.method == 'POST':
        report_type = request.form['report-type']
        report_message = request.form['report-message']
        report = Report(report_type=report_type, report_message=report_message)
        db.session.add(report)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('report.html')