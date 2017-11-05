This is exercise for building Assets and Shopping center API.

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

## Summary of project

#### Front end (Reactjs)

##### Major Structure

/src
 |-----/components
 |           |------/App (core application file)
 |           |------/Main (routes of each page)
 |           |------/Homepage (Links to other pages and authoritation)
 |           |------/ShoppingCenter (shopping center list)
 |           |------/Assets (Assets list and search)
 |           |------/Log (Activities log)
 |           |------/NotFound (other entries)
 |-----/shared
             |------/Centers (data queries from database, such as fetching center list)
             |------/Assets (data queries from database)
             |------/Log (data queries from database)
             |------/Auth (validation from database)

##### Note

Access token validation service is used for both Shopping centers and Assets pages

#### Back end (Node.js)

##### Major Structure

/sever
 |-----/api
 |           |------/database (queries to database)
 |           |------assets.data.operations.js 
 |           |------center.data.operations.js
 |           |------log.data.operations.js
 |           |------auth.data.operations.js
 |-----/routes
             |------/centers (preprocessing of data* + http require and response)
             |------/assets (as above)
             |------/logs (as above)
             |------/auth (as aboce)
             |------index.js (routers)

##### Note

1) For searching on assets, attributes "name", "shopping center name", and "status" are indexed for faster search speed (Mongodb is in used)

2) Mongodb environment setting is in /server/config.js

3) Testing is included in /test

4) * proprocessing of data including reading requires and completing adding data. Such as, adding a shopping center may need adding several new assets. 

#### Future work

1) Complete UI (adding shoppong center, adding assets, and edting center or asset)





