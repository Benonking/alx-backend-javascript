function calculateNumber(type, a, b){
	const types = ['SUM','DIVIDE','SUBTRACT']
	if (type == types[0]) {
		return Math.round(a) + Math.round(b)
	}
	if (type == types[1]){
		if (Math.round(b) == 0){
			return 'Error'
		}
		return Math.round(a) / Math.round(b)
	}
	if (type == types[2]){
		return Math.round(a) - Math.round(b)
	}
}
module.exports = calculateNumber