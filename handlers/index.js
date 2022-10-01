'use strict'

const routes = require('express').Router({ mergeParams: true });

module.exports = (services) => {
    routes.use('/api/dates/getnumberofdays', require('./dates/getnumberofdays')(services));
    routes.use('/api/filesystem/csvtodatabase', require('./filesystem/csvtodatabase')(services)); //to do
    routes.use('/api/filesystem/jsontocsv', require('./filesystem/jsontocsv')(services)); //to do

    routes.get('/', (req, res) => {
        res.status(200).json({ message: 'Connected!' });
      });

    return routes;
};