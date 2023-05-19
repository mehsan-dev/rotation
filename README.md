# README

## Problem Statement

Using NodeJS, this API accepts a post request with a UTF-8 string and rotation number as payload and returns
a ROT version of the string, storing the original string in a MongoDB database. If rotation number is not given then set 13 by default. The API should be capable of accepting a string of 1,000 characters. (No 3rd party
libraries should be used for ROT.)
### Built With

* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Jest](https://jestjs.io/)

------------

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* `Node v14.17.5`
* `Express v4.18.1`
* `MongoDB`
* `Mongoose v6.4.1`
* `Jest v29.2.2`

### Helping Libraries:
* body-parser
* dotenv
* nodemon

### Installation

1. Clone the repo and cd into it
sh
git clone https://github.com/AdeelSarim/string_rotation_api.git
cd string_rotation_api

2. Move into the project directory
`cd rotate-algo`

3. Install dependencies
`npm`

4. Start the server
* `npm run start`
* `npm run dev` run with nodemon watch

5. Run test suits
`npm jest`

## Approach

  * A simple api application to convert the given string to ROT
  * First check whether rotation of string is in db or not.
  * If is then simply return the encryption in db
  * If not the create hash of each character with it's ROT-13 version on runtime and replace each character of original string
  * After this original and rot strings are saved in db
  * API Error Handling added at application level
  * Functional test added in `encrypt.spec.js` file

## API Docs
### URL:
  * Method: POST
  * URL: https://API_BASE_URL/api/v1/string_rotation
  
  for running local it would become `http://localhost:5000/api/v1/string_rotation`

### Request Payload
  
```json
  {
      "stringRotation": {
      "originalString": "This is a test message"
    }
  }
```
or
```json
  {
      "stringRotation": {
      "originalString": "This is a test message",
      "rotate": 6
    }
  }
```
  
### Response Payload
  
```json
  {
    "stringRotation": {
      "originalString": "This is a test message",
      "rotation": 13,
      "rotString": "Guvf vf n grfg zrffntr"
    }
  }
```
