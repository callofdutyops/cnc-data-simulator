module.exports = app => {

    app.get('/', (req, res) => {
        res.redirect('/simulator');
    });

    app.get('/simulator', (req, res) => {
        res.render('iot/simulator');
    });
    
    // route to display all the data that is generated
    app.get('/simulator/data', require('./controllers/data').all);
    
    // route to write data to the database
    app.post('/simulator/data', require('./controllers/data').write);

    // route to convert gcode to toolpaths
    app.post('/simulator/data/gcode', require('./controllers/data').gcode);
    
    // delete the data when the stream is stopped or when the app is closed
    app.get('/simulator/data/delete', require('./controllers/data').delete);

}
