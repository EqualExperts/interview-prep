# operability-interview-prep

- [operability-interview-prep](#operability-interview-prep)
  - [Intro](#intro)
  - [How to be prepared for technical interviews at Equal Experts.](#how-to-be-prepared-for-technical-interviews-at-equal-experts)
    - [Please Do](#please-do)
    - [Please Avoid](#please-avoid)
  - [Recommended Tools and Utils](#recommended-tools-and-utils)

## Intro

We're so glad you're doing an operability technical exercise with Equal Experts. We look forward to working with you. Here are a few pointers before you come in to make the process as smooth as possible. If you've got any questions, just let us know - we'll be happy to help.

## How to be prepared for technical interviews at [Equal Experts](https://www.equalexperts.com).

Please set up a machine that is stable and well configured.

### Please Do

Your machine should:

- have a stable internet connection
- have a webcam
- be able to share your screen (or screens) over Zoom and Google Meet
- be able to run a configuration management and/or orchestration system
- have development tools installed
- tooling for at least one programming language you're comfortable with
- a development environment (or editor) of your choice on this machine.

We strongly encourage people to debug their machine before the interview. It saves a bit of stress all round!

### Please Avoid

Hints on what may not help you:

- working with a machine you have just reinstalled after wiping but have had no time to use before the session since you may not have the network configured or your preferred tools installed
- choosing an esoteric tool/OS that you are interested in exploring but haven't worked with before. We won't judge you for going with the boring and familar. That's a feature not a bug!

## Recommended Tools and Utils

Having the following tools installed and configured _may_ be useful for working on the proposed exercise/s. You are welcome to install preferred alternatives instead. The goal is for you to have a familiar and comfortable working environment.

- A hypervisor of your choice e.g. Virtualbox, KVM/Qemu/ VMWare Fusion, Parallels

  If you don't have something already installed and/or don't have a preference [Virtualbox https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads) is free to use. You may also want to install the associated extension pack which may be downloaded from the same page and is free for personal use.

  **Note** that extension packs are tied to the version of Virtualbox you have installed.

- [Vagrant](https://www.vagrantup.com/downloads.html) https://www.vagrantup.com/downloads.html

- Depending on your preferred distrubution (RPM or deb based) please initialise a vagrant box.

  - RockyLinux 8 [rockylinux/8 https://app.vagrantup.com/rockylinux/boxes/8](https://app.vagrantup.com/rockylinux/boxes/8) for a RHEL compatible distribution

  - Ubuntu 22.04.x LTS [ubuntu/jammy64 https://app.vagrantup.com/ubuntu/boxes/jammy64](https://app.vagrantup.com/ubuntu/boxes/jammy64) for deb based distributions

  - Any other machine images for a current linux distribution of your preference

  Disk is cheap, set up multiples in case there are any hiccups with one or the other.

  You may use any VM of your choice as long as you are certain current
  packages (jvm, jdk, python, ruby and associated package/dependency management
  tools) are available for it and there is good integration with various
  configuration management tools for your preferred Vagrant box and distribution/OS.

  Please confirm that you can start-up and any downloaded virtual boxes and that you can also ssh to the box once it is running.

- Install a container runtime and confirm it's working. Some commonly used variants:
  - [docker desktop https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
  - [rancher desktop https://rancherdesktop.io/](https://rancherdesktop.io/)
  - [podman desktop https://podman-desktop.io/](https://podman-desktop.io/)

  Ensure you can pull and run a container, and port bindings are working.

- Install [minikube https://github.com/kubernetes/minikube](https://github.com/kubernetes/minikube) and confirm it's working.

- Ensure you have C, C++ compilers and associated toolchains available. Some examples are given below for popular operating systems/distributions.

  You may also do clever things like using docker containers or VMs for build purposes. Just ensure you can at least build packages with C, C++ extensions without needing to spend an hour setting up a software development environment.

  - macOS - [XCode](https://developer.apple.com/xcode/features/) including the Command Line Tools which can be installed via the App Store
  - Ubuntu or Debian - `build-essential` package
  - Fedora - `'Development Tools'` group
