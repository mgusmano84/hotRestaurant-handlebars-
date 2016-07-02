// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');








// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server 
// ==============================================================================

var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 8080; // Sets an initial port. We'll use this later in our listener



//adding handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({type:'application/vnd.api+json'}));



var tableArray = [
	{
		customerName: "Ahmed",
		customerEmail: "afhaque89@gmail.com",
		customerID: "afhaque89",
		phoneNumber: "979-587-0887",

	}

];

var waitingArray = [
	{
		customerName: "Saima",
		customerEmail: "saima@gmail.com",
		phoneNumber: "979-587-0887",
		customerID: "saimacool"
	}
];



var lunches = [
  {lunch: 'Beet & Goat Cheese Salad with minestrone soup.'},
  {lunch: 'Pizza, two double veggie burgers, fries with a big glup'}
];

app.get('/tables', function(req,res) {
    res.render('index', tableArray[0]);
});

// app.get('/tables', function(req,res) {
//     res.render('index', waitingArray[0]);
// });





// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);








// ==============================================================================
// LISTENER
// The below code effectively "starts" our server 
// ==============================================================================

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});