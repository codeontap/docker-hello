# Hello World API

A super basic [python Flask](https://flask.palletsprojects.com/en/1.1.x/) API which implements a hello world style service

It is packaged as a docker image and used to demonstrate a simple component which can be configured through standard environment variables and made available through a load balancer

## Ports

8000 - HTTP endpoint

## Environment Variables

ENVIRONMENT - the environment the container is in - This is where the hello will be from
