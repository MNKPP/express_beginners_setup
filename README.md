# Basic configuration for beginners

## How to launch project ?

To launch your project start to install the dependencies.

```console
npm i
```

When the dependencies is installed the project can be run with:

```console
npm start
```

## Dependencies

- express
- express-session
- morgan
- mongoose
- nodemon
- ejs
- dotenv

## How to use index in `./routes`

When you create a route in this project, it's necessary to `require` the new router in the index to use it easyly in `app.js`. Then you can add the name of the router here in line 8:

```js
const { homeRouter, [router_name] } = require('./routes/index');
```