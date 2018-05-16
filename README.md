# Fibzy

### Introduction
Fibzy is a RESTful web service that accepts a number (n) as input and returns the (n) Fibonacci sequence, starting from 
the first position, 0. Fibzy will return the Fibonacci sequences until it exceeds the upper limit of the floating point numbers - Infinity (1.797693134862315E+308) 

Fibzy is lightweight and easily deployable, whether you are deploying to physical hardware, a virtual machine or as a container. It is built on Node.js using the Express.js web framework.

### Prerequisites
 To install and run Fibzy locally, you will need to have either Node.js or Docker installed on your system. Both Node.js and Docker can run on Windows, macOS and Linux.
- Download and install the latest version of [Node.js](https://nodejs.org/en/) directly from their site.

OR

- Download and install the latest version of [Docker Community Edition](https://www.docker.com/get-docker) directly from their site.

### Installation
##### Standard
- Download the [Fibzy zip file](https://github.com/kmart2234/fibzy/archive/master.zip) or [Clone](https://github.com/kmart2234/fibzy.git) the repository.
- If downloading, create a working directory for Fibzy and extract the contents to it. 
- From the working directory of Fibzy (where the package.json file is), execute the following command. This will install all of the required modules for you.
```
npm install
```
Once you have Fibzy on your system, you can jump down to the **Running Fibzy with Node.js Installed** section

##### Deploy as a Docker Container
To deploy Fibzy as a Docker container, execute the command below.
```
# Running locally
docker run --rm -p 8001:8001 kmart2234/fibzy:1.0.0
```

##### Deploy to Play with Docker
If you would like to test, but do not have your own Docker environment you can use [Play with Docker](http://play-with-docker.com/)
- To deploy, you will need to first login using your [Docker Hub](https://hub.docker.com/) credentials.
- Using your browser, copy and paste this link [Fibzy](http://play-with-docker.com/?stack=https://raw.githubusercontent.com/kmart2234/fibzy/master/docker-compose.yml) into a web browser.
- Click Start in the center of the window. This will begin the build of your stack.
- Once your build completes, click on the 8001 link (You will get an error `Cannot GET /`).
- At the end of the URL, paste `:8001/v1/{n}` replacing {n} with your number. (ex. `:8001/v1/5`)

### Running Fibzy with Node.js Installed
Starting Fibzy is easy, just follow the steps below and you will be ready to go.
- From a command prompt switch to the Fibzy working directory (make sure you are in the directory that contains the package.json file) and execute the command below.

```
npm start
```

When Fibzy starts, you will see *"Fibzy started and is listening on port 8001"* at your command prompt. You can now begin using Fibzy!

### Using Fibzy
Once you have Fibzy started, connect to it using a web browser `http://{yourBaseURL}:8001/v1/{n}` or an application like [Postman](https://www.getpostman.com/docs/v6/) or [cURL](https://curl.haxx.se/)


### API Methods

| GET Method |  |
| --- | --- |
| **Method URL:** | http://{yourBaseURL}:8001/v1/{n} |
| **HTTP method:** | GET |
| **Content Type:** | application/json |
| **cURL Example:** | curl -H "Content-Type: application/json" -X GET http://localhost:8001/v1/5 |
| **PS Example:** | Invoke-RestMethod -Method Get -Uri http://localhost:8001/v1/5 |

| POST Method |  |
| --- | --- |
| **Method URL:** | http://{yourBaseURL}:8001/v1/ |
| **HTTP method:** | POST |
| **Content Type:** | application/json |
| **cURL Example:** | curl -H "Content-Type: application/json" -X POST http://localhost:8001/v1/ -d "{"index": 5}" |
| **PS Example:** | Invoke-RestMethod -Method Post -Uri http://localhost:8001/v1/ -Body @{'index' = 5} |

### Testing
Execute the command below from the Fibzy working directory
```
npm test
```

### License
MIT license. See the LICENSE file for details.
