resource "aws_elb" "main" {
  name            = "example-elb"
  subnets         = [aws_subnet.public.id]
  security_groups = [aws_security_group.main.id]

  listener {
    instance_port     = 80
    instance_protocol = "http"
    lb_port           = 80
    lb_protocol       = "http"
  }
}

resource "aws_elb_target_group" "main" {
  name     = "example-target-group"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_vpc.main.id
}

resource "aws_elb_target_group_attachment" "main" {
  target_group_arn = aws_elb_target_group.main.arn
  target_id        = aws_instance.main.id
  port             = 80
}