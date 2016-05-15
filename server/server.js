var express = require('express');
var server = express();

var serverRoot = __dirname + '/../';
server.use(express.static(serverRoot));

var dbLocId = [{
	cid : '12345',
	lid : 'LONDON'
},{
	cid : '24680',
	lid : 'LIVERPOOL'
}];

var dbProducts = {
	'london' : [{'name' : 'Arsenal TV', 'price' : '15', 'id' : '0'}, {'name':'Chealsea TV', 'price' : '10', 'id' : '1'},{'name' : 'Arsenal TV', 'price' : '15', 'id' : '0'}, {'name':'Chealsea TV', 'price' : '10', 'id' : '1'},{'name' : 'Arsenal TV', 'price' : '15', 'id' : '0'}, {'name':'Chealsea TV', 'price' : '10', 'id' : '1'}],
	'liverpool' : [{'name' : 'Liverpool TV', 'price' : '15', 'id' : '2'}],
	'news'   : [{'name' : 'Sky News', 'price' : '0', 'id' : '3'}, {'name' : 'Sky Sports News', 'price' : '15', 'id' : '4'}]
};

var error = function(description){
	this.description = description;
}

server.get('/skyTest', function(request, response){
	console.log('GET CatalogueFallback');
	response.sendFile('/main.html', {root : serverRoot});
})

//I'm calling with CustomerID and send to view the LocationID
server.get('/catalogue/:cid', function(request,response){
	console.log('GET con il CID');
	var cid = request.params.cid;
	
	var customerInfo = dbLocId.filter(function(e){;
		if(e.cid === cid){
			return e;
		}
	});

	response.setHeader('Content-Type', 'application/json');

	if(!customerInfo || customerInfo.length === 0){
		response.status(404).send(JSON.stringify({'error' : 'There was a problem retrieving the customer information'}));
	}else{
		console.log('error cid');
		response.send(JSON.stringify(customerInfo[0]));
	}
});

//Thanks to CustomerID & LocationID I retrieve the products to visualize to catalogue
server.get('/catalogue/:cid/:lid', function(request,response){
	console.log('GET con il CID + LID');
	response.setHeader('Content-Type', 'application/json');

	var lid = request.params.lid;
	var catalogue = {};

	if(!lid){
		response.status(500).send(JSON.stringify(error('Location not found. Internal server error')));
	}else{
		catalogue.sports = dbProducts[lid.toLowerCase()];
		catalogue.news = dbProducts.news;
		response.send(JSON.stringify(catalogue));
	}
});

server.post('/order/:cid/:orderId', function(request,response){
	response.setHeader('Content-Type', 'application/json');
	response.send(JSON.stringify({'Status' : 'OK'}));
});

server.listen(3000);