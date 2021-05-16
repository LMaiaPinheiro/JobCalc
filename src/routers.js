const express = require('express')
const routers = express.Router()
const ProfileController = require('./controllers/ProfileController')
const JobController = require('./controllers/JobController')
const DashboardController = require('./controllers/DashboardController')


routers.get('/',DashboardController.index)
 
routers.get('/job',JobController.create)
routers.post('/job',JobController.save)
routers.get('/job/:id',JobController.show)
routers.post('/job/:id',JobController.update)
routers.post('/job/delete/:id',JobController.delete)

routers.get('/profile',ProfileController.index)
routers.post('/profile',ProfileController.update)


module.exports = routers