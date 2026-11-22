# Welcome to My First Backend
***

## Task
TODO - What is the problem? And where is the challenge?
The problem is building a lightweight HTTP backend server in JavaScript using 
[Express](https://expressjs.com/) that serves Frank Sinatra trivia, a random song 
selection, a redirect to his portrait, and both public and HTTP Basic Authentication-protected 
endpoints. The challenge is configuring the server to listen on `0.0.0.0` at port `8080`, 
formatting responses and status codes (`200`, `302`, `401`) accurately, and keeping the Git repository 
free of third-party dependencies (`node_modules`).

## Description
TODO - How have you solved the problem?
The solution is implemented inside `app.js` using Express with hard-coded data for Frank Sinatra's 
songs (20+ tracks), birth date, birth city, wives, and portrait URL. It defines routes 
for `/`, `/birth_date`, `/birth_city`, `/wives`, `/picture`, `/public`, and `/protected`, 
parsing `Authorization: Basic ...` headers to validate `admin` credentials and returning a `401` response 
with a `WWW-Authenticate` header when unauthorized.

## Installation
/* How to install your project? npm install? make? make re? */
Install Express using [npm](https://www.npmjs.com/) while running your server:

## Usage
/* How does it work? */
Start the server on 0.0.0.0:8080: node app.js.

Once running, test the endpoints with curl:

```
curl -i http://localhost:8080/
curl -i http://localhost:8080/birth_date
curl -i http://localhost:8080/birth_city
curl -i http://localhost:8080/wives
curl -i http://localhost:8080/picture
curl -i http://localhost:8080/public
curl -i http://localhost:8080/protected
curl -i http://admin:admin@localhost:8080/protected
```

### The Core Team
Tessoh Tchinda Raustand(raustand_t)

<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>
