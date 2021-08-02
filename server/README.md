** Install some packages:

$ npm install express --save
$ npm install body-parser --save
$ npm install cookie-parser --save
$ npm install multer --save

$ npm install router --save
$ npm install mongodb --save

// Using for authentication
// HEADER { 'authorization': 'JWT <encodeJWT>'}
$ npm install jsonwebtoken
$ npm install bcrypt


// Using for .env
$ npm install dotenv

** DEBUG
npm install -g nodemon

** Design Pattern: Factory Method


** How to test server???
1. Right click server folder and choose 'Open In Terminal'.
2. Run command 'node server.js' for old version or 'node api.js' for new version.
3. Open Postman application and test api.


** APIs

+++ Create New User
POST /auth/register HTTP/1.1
Host: 127.0.0.1:3000
Content-Type: application/x-www-form-urlencoded
cache-control: no-cache
Postman-Token: a397f09c-a274-4163-b343-dcd6e06b1222

firstName=Test&lastName=Admin&gender=Female&phone=090128231&email=admin%40fmail.com&password=123

+++ Login
POST /auth/signin HTTP/1.1
Host: 127.0.0.1:3000
Content-Type: application/x-www-form-urlencoded
cache-control: no-cache
Postman-Token: 94422f09-e558-4fe6-9686-ab490f34cf6c

email=admin%40fmail.com&password=123

+++ Get All Users
GET /auth/getAllUsers HTTP/1.1
Host: 127.0.0.1:3000
authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGZtYWlsLmNvbSIsIl9pZCI6IjVjYzdkMjgyOTY5MzBhNDBmODgwNjA2NSIsImlhdCI6MTU1NjYwMTk1NX0.8RF9zvgXV0MusCRP-WWSr9ZBl37Pwb5GMIKigRMUPuw
cache-control: no-cache
Postman-Token: e11654b7-f2a7-487c-b4c7-fc89d930ae30

** WORK TODO
+ Convert error message to json.
+ Apply Swagger
+ Upload to host.