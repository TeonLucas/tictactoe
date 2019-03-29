const newrelic = require('newrelic'),
      express = require('express'),
      dot = require('express-dot-engine'),
      path = require('path');

const app = express();

// Static assets
app.use(express.static('dist'));

// doT views
app.engine('dot', dot.__express);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'dot');

app.get('/', function (req, res) {

    // Pass a Page Load Id each time we render index
    let id = Math.random().toString(36).substr(2);
    console.log('addCustomAttribute: indexRenderId', id);
    newrelic.addCustomAttribute('indexRenderId', id);

    res.render('index', {
        title: 'Express doT React App',
        favicon: '/images/favicon.ico',
        main: '/main.js',
        newrelic: newrelic.getBrowserTimingHeader()
    })
});

app.get('/metric/:id', function (req, res) {
    newrelic.addCustomAttribute('gameId', req.params.id);
    res.send('{"gameId": "'+ req.params.id + '"}\n');
});

let PORT = process.env.PORT || 3000;
let server = app.listen(PORT, function () { // This starts the server
    console.log("listening to request on port", PORT);
});
