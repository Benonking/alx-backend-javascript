const express = require('express');
const app = express();
const port = 7865;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(port, () => {
	console.log(`API available on localhost port ${port}`);
});

app.get('/', (req, res) => {
	res.send('Welcome to the payment system');
})

// middle ware to validate : id as a numner
app.param('id', (req,res, next, id) => {
	if (!/^\d+$/.test(id)) {
		return res.status(404).send('');
	}
	next();
});
// routehandler for the Get /cart/:id endpoint
app.get('/cart/:id', (req, res) => {
	const cartId = req.params.id;
	res.send(`Payment methods for cart ${cartId}`);
});

app.get('/available_payments', (req, res) =>{
res.json({
		payment_methods: {
			credit_cards: true,
			paypal: false
		}
	}); 
});

app.post('/login', (req, res) => {
	const {userName} = req.body
	res.send(`Welcome ${userName}`)
})
module.exports = app
