const newrelic = require('newrelic'),
      express = require('express'),
      dot = require('express-dot-engine'),
      path = require('path'),
      winston = require('winston');

const app = express();

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

// Static assets
app.use(express.static('dist'));

// doT views
app.engine('dot', dot.__express);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'dot');

app.get('/', function (req, res) {

    // Pass a Page Load Id each time we render index
    let id = Math.random().toString(36).substr(2);
    logger.info('addCustomAttribute: indexRenderId ' + id.toString());
    newrelic.addCustomAttribute('indexRenderId', id);

    res.render('index', {
        title: 'Express doT React App',
        favicon: '/images/favicon.ico',
        main: '/main.js',
        css: '/main.css',
        newrelic: newrelic.getBrowserTimingHeader()
    })
});

app.get('/metric/:id', function (req, res) {
    newrelic.addCustomAttribute('gameId', req.params.id);
    res.send('{"gameId": "'+ req.params.id + '"}\n');
});

app.get('/user', function (req, res) {
    res.send('{"name": "Test User", "email": "test@example.com"}\n');
});


let PORT = process.env.PORT || 3000;
let server = app.listen(PORT, function () { // This starts the server
    logger.info("listening to request on port " + PORT.toString());
});
