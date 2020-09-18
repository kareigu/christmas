const express = require('express');
const app = express();
const ejs = require('ejs');
const fs = require('fs');
const port = 5500;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	const now = Date.now();
	const curYear = new Date().getFullYear();
	const christmas = new Date(`12/24/${curYear}`);
	const days = Math.floor((christmas.getTime() - now) / (1000 * 3600 * 24));
	const hours = Math.floor((christmas.getTime() - now) / (1000 * 3600 * 24 * 60));
	ejs.renderFile('./index.ejs', { days, hours }, (err, template) => {
		if (err)
			throw err;
		else
			res.end(template);
	});
	});

app.listen(port, err => {
	if (err)
		throw err;
	else
	console.log(`Running on port ${port}`);
});
