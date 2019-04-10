
//this is the main page of function
const express			= require('express')		; // library that build ports
const bodyParser		= require('body-parser')	; // library read incomming data from frount end
const cookieParser 		= require('cookie-parser')	; // library that handeled the cookies


const accountRouter 	= require('./api/account')	; // read in the function that 


const app				= express()					; 

app.use(bodyParser.json());							  
app.use(cookieParser());							  

app.use('/account', accountRouter);

module.exports = app;