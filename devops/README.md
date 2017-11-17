# devops-interview-prep

Devops prep for interviews [@equalexperts](https://www.equalexperts.com).

Please bring a laptop that is stable and well configured.

You should be able run a configuration management and/or orchestration system on
that machine. You should also have development tools, at least one programming
language you're comfortable with and a development environment (or editor) of
your choice on this machine.

It is stressful to have to debug your machine before we start working on the
proposed exercise. A list of useful tools and software that you may find useful
to work on the proposed exercise/s is provided below. You are welcome to install
preferred alternatives instead.

- A virtualisation system of your choice e.g. Virtualbox, VMWare Fusion,
  Parallels

  If you don't have something already installed and/or don't have a preference
  [Virtualbox](https://www.virtualbox.org/wiki/Downloads)
  https://www.virtualbox.org/wiki/Downloads is free and the associate extension
  pack which may be downloaded from the same page.

  **Note** that extension packs are tied to the version of Virtualbox you have
  installed.
- [Vagrant](https://www.vagrantup.com/downloads.html)
  https://www.vagrantup.com/downloads.html
- Depending on your preferred distrubution (RPM or deb based) go and initialize
  a vagrant configuration.

  We recommend:
  * `minimal/centos7` https://app.vagrantup.com/minimal/boxes/centos7 for RPM
    based distributions
  * `minimal/xenial64` https://app.vagrantup.com/minimal/boxes/xenial64 for deb
    based distributions

  Disk is cheap, grab both in case there are any hiccups with one or the other.

  You may use any other box of your choice as long as you are certain current
  packages (jvm, jdk, python, ruby and associated package/dependency management
  tools) are available for it and there is good integration with various
  configuration management tools for that Vagrant box and distribution/OS.

  Please confirm that you can start any downloaded virtual boxes and you can ssh
  to them.

- Install [docker](https://www.docker.com) https://www.docker.com and confirm
  it's working.
- Install [minikube](https://github.com/kubernetes/minikube)
  https://github.com/kubernetes/minikube and confirm it's working.
- Ensure you have C, C++ compilers and associated toolchains available. Some
  examples are given below for popular operating systems.

  You may also do clever things like using docker containers or VMs. Just ensure
  you can at least build packages with C, C++ extensions without needing to
  spend an hour setting up a software development environment.
  * macOS - [XCode](https://developer.apple.com/xcode/features/) including the
    Command Line Tools which can be installed via the App Store
  * `build-essential` metapackage if you're using Ubuntu or Debian
  * `'Development Tools'` group if you're using Fedora
