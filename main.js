const app = (require('express'))();
const port = 5500;

app.get('/', (req, res) => {
	console.log(`GET request: / ${req.query.yes}`);
	res.send('yes');
	});

app.listen(port);
console.log(`Running on port ${port}`);
