So far the templates for every aspect of backend tasks.
auth/
	this one contains everything that deals with authenticating the operator of this application
	send jwt back and forth
database/
	this one contains everything that deals with database stuff, fasilitates the connection to database
	through an adapter, which tries to provide uniform interfaces for all the calls and db stuff
routes/
	this are all the api stuff, calls from frontend and other systems with hit these endpoints ...