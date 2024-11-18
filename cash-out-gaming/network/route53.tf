resource "aws_route53_zone" "main" {
  name = "example.com"
}

resource "aws_route53_record" "main" {
  zone_id = aws_route53_zone.main.id
  name    = "example.com"
  type    = "A"
  alias {
    name                   = aws_elb.main.dns_name
    zone_id               = aws_elb.main.zone_id
    evaluate_target_health = true
  }
}