# Use same SG as personal website
data "aws_security_group" "DevWebServerSG" {
  name = "DevWebServerSG"
}
