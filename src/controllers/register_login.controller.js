const jwt = require('jsonwebtoken')

const users = []

function createUser(req, res) {
    const { email, password } = req.body

    const user = users.filter(item => (
        item.email === email
    ))

    if (user.length > 0 && user[0].email === email) {
        return res.send('email ja cadastrado')
    }
    
    const newUser = users.push({email, password})
    
    return res.status(200).json(newUser)
}

function login(req, res) {
    const { email, password } = req.body

    const user = users.filter(item => (
        item.email === email
    ))

    if (user.length <= 0) return res.send("email nao cadastrado")

    if (user[0].password !== password) return res.send("senha incorreta")

    const token = jwt.sign({email}, "123teste")

    return res.header('auth-token', token).json({ token, email: user.email })
}

function welcome(req, res) {
    res.send("welcome!")
}

module.exports = {
    createUser,
    login,
    welcome
}