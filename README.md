This is exercise for Node.js API.

Reactjs and Nodejs are used for this exercise. 

## Quick Start

#### Download Sources

```bash
git clone https://github.com/xieminyi/shoppingCenter.git
```

#### Install npm packages in project folder
```bash
npm install
```

#### Build project
```bash
npm run build
```

#### Starting server (http://localhost:3000)
```bash
node server
```

#### Back end testing
```bash
mocha test
```

## Project design patterns (from front end to back end)

/src/components (All html components and their events)

/src/shared (All services supporting html elements)

/server/routes (All api interface for front end services)

/server/api (The supports for api functions, such as query to database)


## Summary of project

#### Front end (Reactjs)

##### Major Structure

/src/components

Including all maijor components, such as pages (/ShopingCenter, /Assets) and routers (/Main)

/src/shared
            
Including all the services for components, and they are communicated to backend api, such as queries to database. 

##### Note

Access token validation service is used for both Shopping centers and Assets pages

#### Back end (Node.js)

##### Major Structure

/sever/api
 
Including database setup, and queries to database

/server/routes
             
Including routers setting and api functions

/server/config.js

Including configurations of mongodb environment variables

##### Note

1) For searching of assets, attributes "name", "shopping center name", and "status" are indexed for faster search speed (Mongodb is in used)

2) Mongodb environment setting is in /server/config.js

3) Testing is included in /test

4) Proprocessing of data including reading requires and completing adding data. Such as, adding a shopping center may need adding several new assets. 







