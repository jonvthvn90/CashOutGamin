import os
import json

AUDIT_CONFIG = {
    'audit_log_file': '/var/log/audit.log',
    'audit_log_format': '%(asctime)s %(levelname)s %(message)s',
    'audit_log_level': 'INFO',
    'audit_log_rotation': 'daily',
    'audit_log_retention': 30
}

def load_audit_config():
    config_file = os.environ.get('AUDIT_CONFIG_FILE', 'audit_config.json')
    with open(config_file, 'r') as f:
        config = json.load(f)
    return config

def save_audit_config(config):
    config_file = os.environ.get('AUDIT_CONFIG_FILE', 'audit_config.json')
    with open(config_file, 'w') as f:
        json.dump(config, f, indent=4)