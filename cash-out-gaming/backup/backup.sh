#!/bin/bash

# Backup database
pg_dump -U cash_out_gaming cash_out_gaming > backup.sql

# Backup files
tar -czf backup.tar.gz /var/www/cash-out-gaming