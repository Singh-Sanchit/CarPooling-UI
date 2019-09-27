document.getElementById('customer-form').addEventListener('submit', e => {
	e.preventDefault();

	const origin = [localStorage.getItem('origin-lat'),localStorage.getItem('origin-lng')];
	const destination = [localStorage.getItem('dest-lat'),localStorage.getItem('dest-lng')];
	const dater = document.getElementById('datefield').value;
	
	const hrs = document.getElementById('hrs');
	let hour = hrs.options[hrs.selectedIndex].value;
	
	const mins = document.getElementById('mins');
	let min = mins.options[mins.selectedIndex].value;

	console.log(origin, destination, dater, hour, min);
})