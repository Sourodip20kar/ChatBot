# meanings
{
Tells about the project backend info
  
  "name": "backend",
  
  "version": "1.0.0",
  
  "description": "",
  
  "main": "index.ts",
  
  "type": "module",
  
  "scripts": {

"dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\" ",

**The tool concurrently is often used in Node.js development environments to run multiple commands concurrently**/
    
"build":"tsc",

"start": "node dist/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.0",
    "concurrently": "^8.2.0",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-validator": "^7.0.1",
    "jsonwebtoken": "^9.0.1",
    "mongoose": "^7.4.2",
    "openai": "^3.3.0"
  },
  "devDependencies": {
    "@types/bcrypt": "^5.0.0",
    "@types/cookie-parser": "^1.4.3",
    "@types/cors": "^2.8.13",
    "@types/express": "^4.17.17",
    "@types/jsonwebtoken": "^9.0.1",
    "@types/node": "^20.4.8",
    "nodemon": "^3.0.1",
    "ts-node": "^10.9.1",
    "typescript": "^5.1.6"
  }
}


About Middleware
## Middleware:-
These ar the functions which gets executed 
before a request is processed.In Node and Express 
middleware can be used to check -
* JSON body validation,
* params validation
* and more acc to requirement


## Authentication:-
* Authentication is a step in which the user 
needs to verify their identity.
* For this application, the user needs to provide the 
Email and password which it created during the 
registration process.
* The user will be provided a "Token" after Auth process

## Authorization:-
* Once the user authenticates, he/she is provide a "Token".
* Now to access a resource, the user needs to show a token that 
was sent during authentication. This ensures that he user is 
entitled to a resource. 

## JSON Web Token (JWT) :-
* Is used to encrypt a payload into a signed token that has 
the permission or Authorities of the user.

## cookie-parser
```"cookie-parser": "^1.4.6"```
used to send to send the cookies from backend to the frontend.