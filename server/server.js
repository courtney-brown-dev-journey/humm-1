const express = require('express')
const path = require('path')

const activitiesRoutes = require('./routes/activities')
const counsellingRoutes = require('./routes/counselling')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/activities', activitiesRoutes)
server.use('/api/v1/counselling', counsellingRoutes)

// for browser router (react-router-dom)

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  })

module.exports = server
