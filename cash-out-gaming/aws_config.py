import boto3

AWS_ACCESS_KEY_ID = 'YOUR_ACCESS_KEY_ID'
AWS_SECRET_ACCESS_KEY = 'YOUR_SECRET_ACCESS_KEY'

s3 = boto3.client('s3', aws_access_key_id=AWS_ACCESS_KEY_ID,
                         aws_secret_access_key=AWS_SECRET_ACCESS_KEY)

def upload_file_to_s3(file, bucket_name, object_name):
    try:
        s3.upload_file(file, bucket_name, object_name)
    except Exception as e:
        print(e)

def download_file_from_s3(bucket_name, object_name, file):
    try:
        s3.download_file(bucket_name, object_name, file)
    except Exception as e:
        print(e)