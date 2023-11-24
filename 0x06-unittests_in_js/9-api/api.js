const express = require('express');
const app = express();
const port = 7865;
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
})
module.exports = app
