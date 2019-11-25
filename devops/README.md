# devops-interview-prep

Are you coming into EE for an interview? Here are a few pointers before you come in to make the interview as smooth as possible. If you've got any questions, just let us know - we'll be happy to help.

Devops prep for interviews at [equalexperts](https://www.equalexperts.com).

Please bring a laptop that is stable and well configured.

Your machine should:

- be able to run a configuration management and/or orchestration system
- have development tools installed
- tooling for at least one programming language you're comfortable with
- a development environment (or editor) of your choice on this machine.

We strongly advise that people debug their machine before the interview. It saves a bit of stress all round!

A list of tools and software that you _may_ find useful to work on the proposed exercise/s is provided below. You are welcome to install preferred alternatives instead.

- A virtualisation system of your choice e.g. Virtualbox, VMWare Fusion, Parallels

  If you don't have something already installed and/or don't have a preference [Virtualbox](https://www.virtualbox.org/wiki/Downloads) https://www.virtualbox.org/wiki/Downloads is free you may also want to install the associated extension pack which may be downloaded from the same page and is free for personal use.

  **Note** that extension packs are tied to the version of Virtualbox you have installed.

- [Vagrant](https://www.vagrantup.com/downloads.html) https://www.vagrantup.com/downloads.html

- Depending on your preferred distrubution (RPM or deb based) please initialise a vagrant box.

  If you are using the virtualbox vagrant provider we recommend the vagrant boxes by [Jeff Geerling aka geerlingguy](https://www.jeffgeerling.com) since they have guest additions etc. installed.

  - CentOS 8 [geerlingguy/centos8 https://app.vagrantup.com/geerlingguy/boxes/centos8](https://app.vagrantup.com/geerlingguy/boxes/centos8) for RPM based distributions

  - Ubuntu 18.04 LTS [geerlingguy/ubuntu1804 https://app.vagrantup.com/geerlingguy/boxes/ubuntu1804](https://app.vagrantup.com/geerlingguy/boxes/ubuntu1804) for deb based distributions

  Disk is cheap, set up both in case there are any hiccups with one or the other.

  You may use any other box of your choice as long as you are certain current
  packages (jvm, jdk, python, ruby and associated package/dependency management
  tools) are available for it and there is good integration with various
  configuration management tools for that Vagrant box and distribution/OS.

  Please confirm that you can start and ssh to any downloaded virtual boxes.

- Install [docker https://www.docker.com](https://www.docker.com) and confirm it's working.

- Install [minikube https://github.com/kubernetes/minikube](https://github.com/kubernetes/minikube) and confirm it's working.

- Ensure you have C, C++ compilers and associated toolchains available. Some examples are given below for popular operating systems/distributions.

  You may also do clever things like using docker containers or VMs for build purposes. Just ensure you can at least build packages with C, C++ extensions without needing to spend an hour setting up a software development environment.

  - macOS - [XCode](https://developer.apple.com/xcode/features/) including the Command Line Tools which can be installed via the App Store
  - Ubuntu or Debian - `build-essential` package
  - Fedora - `'Development Tools'` group
