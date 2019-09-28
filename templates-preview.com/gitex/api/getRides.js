document.getElementById('customer-form').addEventListener('submit', e => {
	e.preventDefault();

	const origin = [localStorage.getItem('origin-lat'),localStorage.getItem('origin-lng')];
	const destination = [localStorage.getItem('dest-lat'),localStorage.getItem('dest-lng')];
	const dateFormat = document.getElementById('datefield').value;

	console.log(localStorage.getItem('origin'));
	
	const hrs = document.getElementById('hrs');
	let hour = hrs.options[hrs.selectedIndex].value;
	
	const mins = document.getElementById('mins');
	let min = mins.options[mins.selectedIndex].value;

	let dateArr = dateFormat.split('-');

	let datetimeObj = new Date(...dateArr,hour, min);
	console.log(origin, destination, dateFormat, hour, min);

	info = {
		from: {
			latitude: origin[0],
			longitude: origin[1]
		},
		from: {
			latitude: destination[0],
			longitude: destination[1]
		},
		datetime: datetimeObj
	};

	fetch(`${url}/ride`,{
		headers: {
			"Content-Type": "application/json"
		  },	  
		body: JSON.stringify(info)
	})
	.then( res => res.json())
	.then( data => {
		console.log(data);
	})
	.catch( err => alert(err));

	// let names = [1,2,3]
	// if (true){

	// 	let output = '';
	// 	output += `
	// 				<div class="container" style="margin-top:40px;">
	// 					<div class="card w-100">
	// 					<div class="card-body">
	// 					<h5 class="card-title">${1} Available rides</h5>
	// 						<h4><span class="fas fa-location-arrow map-input-icon">${ localStorage.getItem('origin')}</span></h4>
	// 						<br>
	// 						<h4><span class="map-input-icon"><img src="../icons/circle.svg"  alt="Current Location Icon">${ localStorage.getItem('dest')}</span></h4>

	// 					</div>
	// 					</div>
	// 					<br>
	// 				</div>
	// 				`
	// 	names.forEach(element => {
	// 		output += `
	// 					<div class="card w-100">
	// 						<div class="card-body">
	// 							<h5 class="card-title">Card title</h5>
	// 							<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
	// 							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	// 							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
	// 							Book Ride
	// 						  	</button>
	// 						</div>
	// 					</div>
	// 					<br>
			
	// 				`;
	// 	});

	// 	document.getElementById('rideCards').innerHTML = output;
		
	// }
});



