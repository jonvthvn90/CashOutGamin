resource "aws_instance" "main" {
  ami           = "ami-abc123"
  instance_type = "t2.micro"
  vpc_security_group_ids = [aws_security_group.main.id]
  subnet_id = aws_subnet.public.id
}