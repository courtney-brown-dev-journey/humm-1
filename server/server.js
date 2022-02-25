const express = require('express')
const path = require('path')

const activitiesRoutes = require('./routes/activities')
// const suggestionsRoutes = require('./routes/suggestions')
const counsellingRoutes = require('./routes/counselling')
const counsellorRoutes = require('./routes/counsellors')
const sessionsRoutes = require('./routes/sessions')
const roomRoutes = require('./routes/room')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/activities', activitiesRoutes)
// server.use('/api/v1/suggestions', suggestionsRoutes)
server.use('/api/v1/counselling', counsellingRoutes)
server.use('/api/v1/counsellors', counsellorRoutes)
server.use('/api/v1/sessions', sessionsRoutes)
server.use('/api/v1/room', roomRoutes)


// for browser router (react-router-dom)

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  })

module.exports = server
