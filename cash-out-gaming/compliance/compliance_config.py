import os
import json

COMPLIANCE_CONFIG = {
    'compliance_framework': 'GDPR',
    'compliance_level': 'high',
    'data_retention_policy': '30 days',
    'data_encryption': True,
    'access_control': True,
    'audit_logging': True
}

def load_compliance_config():
    config_file = os.environ.get('COMPLIANCE_CONFIG_FILE', 'compliance_config.json')
    with open(config_file, 'r') as f:
        config = json.load(f)
    return config

def save_compliance_config(config):
    config_file = os.environ.get('COMPLIANCE_CONFIG_FILE', 'compliance_config.json')
    with open(config_file, 'w') as f:
        json.dump(config, f, indent=4)