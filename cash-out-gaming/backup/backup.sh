#!/bin/bash

# Set the backup directory
BACKUP_DIR=/path/to/backup/directory

# Set the database credentials
DB_HOST=localhost
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_NAME=your_database

# Set the S3 bucket and credentials
S3_BUCKET=your_bucket_name
S3_ACCESS_KEY=your_access_key
S3_SECRET_KEY=your_secret_key

# Create a timestamp for the backup file
TIMESTAMP=$(date +"%Y-%m-%d-%H-%M-%S")

# Dump the database to a file
mysqldump -h $DB_HOST -u $DB_USERNAME -p$DB_PASSWORD $DB_NAME > $BACKUP_DIR/$TIMESTAMP.sql

# Compress the backup file
gzip $BACKUP_DIR/$TIMESTAMP.sql

# Upload the backup file to S3
aws s3 cp $BACKUP_DIR/$TIMESTAMP.sql.gz s3://$S3_BUCKET/ --access-key $S3_ACCESS_KEY --secret-key $S3_SECRET_KEY

# Remove the local backup file
rm $BACKUP_DIR/$TIMESTAMP.sql.gz

nginx
nginx -t
aws s3 cp /path/to/backup/file s3://your_bucket_name/ --access-key your_access_key --secret-key your_secret_key
nginx -t
openssl s_client -connect example.com:443