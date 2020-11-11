const express = require('express')
const routes = express.Router()

const RegisterLoginController = require ('./controllers/register_login.controller')

const verifyToken = require('./services/verify_token')

routes.post('/register', RegisterLoginController.register)

routes.post('/login', RegisterLoginController.login)

routes.get('/welcome', verifyToken, RegisterLoginController.welcome)

module.exports = routes
