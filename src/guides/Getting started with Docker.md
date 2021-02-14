---
type: guide
date: 2020-05-05 08:00:00 +00:00
excerpt: "How to set up Docker in order to run Docker images on your machine"
permalink: /guides/setting-up-docker
---

# Getting started with Docker

Docker is a tool for downloading software *images* and running them inside *containers*. Those containers could be set up very quickly without the hassle that comes with the installation of regular, native applications (e.g. installing apps, bloat the file system with lots of files everywhere, setting up the right permissions and eventually messing up your entire configuration). With Docker, you just download an image and run it, or you build an image yourself from a given recipe &mdash; a Dockerfile.

Docker also makes it straightforward to completely remove images and containers, leaving no garbage on your system after removal. And, as an extra, Docker also allows to run multiple instances of the same image(s) simultaneously.

So, in a nutshell, easy to handle, easy to maintain, easy to distribute, easy to scale up and easy to get rid off when needed.

# How does Docker work

With Docker, you run applications in constrained environments. Multiple applications and default configurations are put together to form an image. Those images, containing the apps and default configuration files, can be run in containers. Depending on your particular use case, you can 'attach' local configuration files to your containers, replacing the default ones that are included with the images.

Docker offers three ways to run images in containers. You can use pre-built-images, you can work in a container from the command line, or you can build your own images using Dockerfiles.

::: note

Yes, I know there are way more use cases for Docker, but this cover the three most used ones.

:::

### Pre-built images



### Command line

### Dockerfiles

# Installation

The installation depends on your whether you're using Windows, Linux or macOS.

# Linux

First thing you'll need to do is to install Docker

````sh
sudo apt install docker.io
````

Then, add your current user to the `docker` group

```sh
sudo gpasswd -a $USER docker && newgrp docker
```

After that, try to run the `hello-world` docker-image to test if all permissions are set up correctly and your Docker installation works

````sh
docker run hello-world
````

Docker should begin downloading the `hello-world` image and run it immediately, and shows the following output:

```
Hello from Docker!
This message shows that your installation appears to be working correctly.

(...)
```

Nice, it works.