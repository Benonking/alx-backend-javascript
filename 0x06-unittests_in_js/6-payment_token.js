function getPaymentTokenFromAPI(succes){
	return new Promise((resolve, reject) =>{
		if (succes){
			resolve({data: 'Successful response from the API'});
		} else {
			// do nothing
		}
	})
}
module.exports = getPaymentTokenFromAPI