# Running the playbook
`cd ./infrastructure/ansible`
`ansible-playbook -i inventory.txt playbook.yaml`
If installed with pip, bin can be found at `$HOME/.local/bin/`

To test ssh connection:
`ssh -i ~/.ssh/aws-us-east.pem ubuntu@3.222.249.47`

## Running on Windows
Ansible cannot run on a Windows host natively, though it can run under the Windows Subsystem for Linux (WSL). See the [docs](https://docs.ansible.com/ansible/latest/user_guide/windows_faq.html).

Then, copy the private key to WSL:
`cp /mnt/c/Users/liaoc/.ssh/aws-us-east.pem ~/.ssh/aws-us-east.pem`
`sudo chmod 600 ~/.ssh/aws-us-east.pem`
