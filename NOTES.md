# add

### Commonly used built-in directives

```
ng-app
ng-model
ng-controller
ng-click
ng-repeat
ng-show/ng-hide
ng-if
ng-switch-when
```


### How to deploy to heroku
1- create app in heroku dashboard

2- cd to your app folder and run,

```
heroku login
heroku git:remote -a <appName>
```
3- install the database add-on e.g mlab for mongo using command or UI.

4- add the Procfile in your repo

5- to manually deploy and build, run the following from your repo.

```
git add .
git commit -m 'heroku relate'
git push heroku master

(note: make sure to be in the master branch of repo, it didn't work as expected when I was in a dev branch.)

```

Some useful heroku commands

```
heroku run bash
heroku logs --tail
heroku config
heroku restart
```


### Mongo related

```
// run server

mongod --dbpath='<path-to-db-folder>'

// get shell on localhost

mongo --host 127.0.0.1:27017

// get mongo shell on heroku running mlab

mongo ds117701.mlab.com:17701/heroku_9w2w51zr -u <dbuser> -p <dbpassword>

// other

show dbs;
use <db_name>; (e.g. use add)
show collections;
db.<collection_name>.<whatever>; e.g db.adds.find({})

// drop database
use <db_name>;
db.runCommand( { dropDatabase: 1 } )

```


