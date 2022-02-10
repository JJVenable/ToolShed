const { Router } = require('express')
const Router = require('express').Router()
const controllers = require('../controllers')
/// not needed b/c line 2?
// const ToolRouter = require('./ToolRouter')
// const TruckRouter = require('./TruckRouter')
// const JobRouter = require('./JobRouter')

Router.use('/tools', ToolRouter);
Router.use('/trucks', TruckRouter);
Router.use('/jobs', JobRouter);

Router.get('/', (req,res) => res.send('This is root'));

Router.post('/tools', controllers.NewTool)
Router.get('/tools', controllers.getAllTools);
Router.get('./tools/:id', controllers.getToolById)

Router.post('/trucks', controllers.NewTruck)
Router.get('/trucks', controllers.getAllTrucks)
Router.get('/trucks/:id', controllers.getTruckById)

Router.post('/job', controllers.NewJob)
Router.get('/job', controllers.getAllJobs)
Router.get('/job/:id', controllers.getJobById)

module.exports = router 