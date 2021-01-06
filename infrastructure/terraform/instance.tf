provider "aws" {
  profile = "default"
  region  = "us-east-1"
}

resource "aws_instance" "webserver" {
  ami               = "ami-0758470213bdd23b1" # Ubuntu 20.04
  instance_type     = "t2.micro"
  availability_zone = "us-east-1a"
  key_name          = "aws-us-east"
  security_groups   = ["${data.aws_security_group.DevWebServerSG.name}"]

  root_block_device {
    volume_type = "gp2"
    volume_size = 8
  }

  volume_tags = {
    Name = "CCWebServer"
  }

  tags = {
    Name = "CCWebServer"
    Apps = "CareerCounsel"
  }
}

resource "aws_eip" "ip" {
  vpc      = true
  instance = aws_instance.webserver.id
}

output "ip" {
  value = aws_eip.ip.public_ip
}
