# Add - MVP Project

Provides UI and API interface to calculate,
- basic mathematical expressions such as 1231+12+454
- factorial
- log
- sqrt
- power



## API info

### Endpoints
Send the POST request to any of the following endpoints. Data should be in JSON format with 'query' as key. Examples below.

```
curl -X POST -H "Content-Type: application/json" -d '{"query":"3b10"}' https://mvpadd.herokuapp.com/log
curl -X POST -H "Content-Type: application/json" -d '{"query":"3^5"}' https://mvpadd.herokuapp.com/power
curl -X POST -H "Content-Type: application/json" -d '{"query":"144"}' https://mvpadd.herokuapp.com/sqrt
curl -X POST -H "Content-Type: application/json" -d '{"query":"13"}' https://mvpadd.herokuapp.com/factorial
curl -X POST -H "Content-Type: application/json" -d '{"query":"13*12"}' https://mvpadd.herokuapp.com/basic

If using 'request' npm module

request.post({url: 'https://mvpadd.herokuapp.com/factorial', json: {query: '3'}}, function(err, res, body) { console.log(body) })

OR

request.post({url: 'https://mvpadd.herokuapp.com/factorial', body: {query: '3'}, json:true}, function(err, res, body) { console.log(body) })

OR

request({url: 'https://mvpadd.herokuapp.com/factorial', method: 'POST', body: {query: '3'}, json:true}, function(err, res, body) { console.log(body) })


```



## How to run the app locally?

```
1- Install mongodb
2- Git clone or download the repo
3- Change the working directory to the add folder.
  a) $ mongod --dbpath database/db (in tab 1)
  b) $ npm run server         (in tab 2)
  c) (optional) $ mongodb://127.0.0.1:27017/ (to get the shell - good for quick commands and troubleshooting)
  d) $ npm run test

```


## How to use API locally?

```
Run the app locally and use api. Find running server and api info in the respective sections.
```
