FROM python:3.9-slim

# Set working directory to /app
WORKDIR /app

# Copy requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install -r requirements.txt

# Copy project code
COPY . .

# Expose port 8000 for the development server
EXPOSE 8000

# Run command to start development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]