provider "aws" {
  region = "your-region"
}

resource "aws_vpc" "cash_out_gaming" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_subnet" "cash_out_gaming" {
  cidr_block = "10.0.1.0/24"
  vpc_id     = aws_vpc.cash_out_gaming.id
  availability_zone = "your-availability-zone"
}

resource "aws_security_group" "cash_out_gaming" {
  name        = "cash-out-gaming"
  description = "Allow inbound traffic on port 80"
  vpc_id      = aws_vpc.cash_out_gaming.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_elb" "cash_out_gaming" {
  name            = "cash-out-gaming"
  subnets         = [aws_subnet.cash_out_gaming.id]
  security_groups = [aws_security_group.cash_out_gaming.id]

  listener {
    instance_port      = 8000
    instance_protocol  = "http"
    lb_port            = 80
    lb_protocol        = "http"
  }
}

resource "aws_route53_record" "cash_out_gaming" {
  zone_id = "your-zone-id"
  name    = "your-domain-name.com"
  type    = "A"
  alias {
    name                   = aws_elb.cash_out_gaming.dns_name
    zone_id               = aws_elb.cash_out_gaming.zone_id
    evaluate_target_health = true
  }
}