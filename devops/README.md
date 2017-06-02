# devops-interview-prep
Devops prep for interviews @equalexperts

1. install virtualbox https://www.virtualbox.org/wiki/Downloads and the extension pack 
2. install vagrant https://www.vagrantup.com/downloads.html
3. depending on your preference (redhat or ubuntu distro) go and initialize a vagrant configuration

  `vagrant init minimal/centos7; vagrant up --provider virtualbox`
  
  `vagrant init minimal/trusty64; vagrant up --provider virtualbox`

4. check all good there with 

  `vagrant ssh`
