# Manage environement variables based on separate environemnt using es6 

## What is problem
* dotenv only supports one file at a time ie dont offer variable overriding
* ie merging .env and .env.production is not possible out of the box.

## Solution
* Use .env to set customer variables in node env
* Use es6 to merge and manage additional variables such as for production and development using javascript files  

## How to use it
* set common  environement variables in .env
* set the environement variable in the script using package.json such 
```
  "start": "NODE_ENV=production nodemon --exec babel-node src/index.js",
```
* Use following import to get envinonement varialbes
```import env from './../env/'```

## How to create new environment variables
Create files inside env/{environment}.js based on the environment of your choice

## Things to do
### Files to .gitignore
```.env
env/*
!env/index.js
```