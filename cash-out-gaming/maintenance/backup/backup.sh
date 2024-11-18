#!/bin/bash

# Set the backup directory
BACKUP_DIR=/path/to/backup

# Set the database credentials
DB_HOST=localhost
DB_USER=myuser
DB_PASSWORD=mypassword
DB_NAME=mydb

# Set the file directories
FILE_DIR=/path/to/files

# Create the backup directory if it doesn't exist
if [ ! -d "$BACKUP_DIR" ]; then
  mkdir -p "$BACKUP_DIR"
fi

# Backup the database
mysqldump -h "$DB_HOST" -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" > "$BACKUP_DIR"/db_backup.sql

# Backup the files
tar -czf "$BACKUP_DIR"/file_backup.tar.gz "$FILE_DIR"