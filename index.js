const express = require('express')

const app = new express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const expressSession = require('express-session')

const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')

const validateMiddleware = require("./middleware/validateMiddleware");

app.use(fileUpload())

app.use(expressSession({
    secret: 'a secret'
}))

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.use(express.static('public'))

let port = process.env.PORT
if (port == null || port == "") {
    port = 5000
}

app.listen(port, () => {
    console.log("App listening...")
})

app.use('/posts/store', validateMiddleware)

app.get('/posts/new', newPostController)
app.get('/', homeController)
app.get('/post/:id', getPostController)
app.post('/posts/store', storePostController)
app.get('/auth/register', newUserController)
app.post('/users/register', storeUserController)
app.get('/auth/login', loginController)
app.post('/users/login', loginUserController)