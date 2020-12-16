# basic-bank

### Prerequisites
  - [NodeJS]

#### Backend
- bank-basic is an [Express] app running in [Nodejs].
- [Mongodb] is used as a database of choice as to store forms and answers [document-style] database should be beneficial.
- Healthcheck api is included to test if the server is running properly.
- [Morgan] and [Npmlog] is used for logging.
- [DotEnv] is used for env variables and auto complete.

### Setup
----
#### MongoDb

- For storing the database, we'll use Atlas. Atlas is MongoDB’s fully-managed database-as-a-service. For our application, we'll use the free tier of Atlas.
- You can follow the **Getting started** section of [this] blog to setup Atlas and get a connection string. We will use this connection string to connect our node.js application to the database.
 
#### NodeJS
```sh
$ cd backend
$ npm install
```

Setting up the .env file...
- you need to add .env file in folder root with keys **PORT**,  **SECRET** and **MONGO_URL**  (mongo connection string that we created earlier).
 
Running the server:
```sh
$ npm start
```
The server will start on http://localhost:8989. (Assuming the port set in .env file was 8989)
You can hit the http://localhost:8989/healthcheck API to verify if the app is working or not. If the response is 'OK', then the app is working.

[//]: # (These are reference links used in the body)
    
   [NodeJS]: <https://nodejs.org/en/download/>
   [this]: <https://medium.com/@sergio13prez/connecting-to-mongodb-atlas-d1381f184369>
   [Express]: <https://expressjs.com/>
   [Mongodb]: <https://www.mongodb.com/>
   [document-style]: <https://www.mongodb.com/document-databases>
   [Morgan]: <https://www.npmjs.com/package/morgan>
   [Npmlog]: <https://www.npmjs.com/package/npmlog>
   [DotEnv]: <https://www.npmjs.com/package/dotenv>
