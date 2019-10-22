// // File index.js

// Import required modules
var express  = require('express'),
mongoose     = require('mongoose'),
bodyParser   = require('body-parser'),
mongoose     = require('mongoose');
app          = express();

// Setup server port
const port = process.env.PORT || 8080;

// Import routes
var apiRoutes = require('./api-routes');

// Configure body-parser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Use Api routes in the app
app.use('/api', apiRoutes);

// Connect to Mongoose and set connection variable
// Setup connection to mongodb Cloud Atlas
const connectionString = 'mongodb+srv://gcbuser:liteBeer1@cluster0-rb7db.mongodb.net/restful_hub?retryWrites=true&w=majority';

// Set values to reduce warnings from MongoDB
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Connect to Mongo Cloud Atlas
mongoose.connect(connectionString);

// Added check for DB connection
var db = mongoose.connection;
if(!db)
	console.log('Error connecting to DB');
else
	console.log('Connected to DB');

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express and Nodemon'));

// Launch app to listen to specified port
app.listen(port, () => {
    console.log("Running RestHub on port " + port);
});