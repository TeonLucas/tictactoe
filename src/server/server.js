const newrelic = require('newrelic'),
      express = require('express');

const app = express();

// Static assets
app.use(express.static('dist'));

// Squirrelly views
app.set('views', 'dist/views');
app.set('view engine', 'squirrelly');

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Express Squirrelly React App',
        favicon: '/images/favicon.ico',
        main: '/main.js'
    })
})

let PORT = process.env.PORT || 3000;
let server = app.listen(PORT, function () { // This starts the server
    console.log("listening to request on port", PORT);
});

