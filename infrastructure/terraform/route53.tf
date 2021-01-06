resource "aws_route53_record" "record" {
  zone_id = data.aws_route53_zone.davidliao.zone_id
  name    = "api.davidliao.ca"
  type    = "A"
  ttl     = "3600"
  records = [aws_eip.ip.public_ip]
}

data "aws_route53_zone" "davidliao" {
  name = "davidliao.ca"
}
