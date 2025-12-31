// to run:
// node /Users/arnold/Codeplanet/js_test_bus_stop/script.js
// in separate terminal!


// create class for bus stop arrivals
class BusStopArrivals {
	constructor(lineName, destinationName, expectedArrival) {
		this.lineName = lineName;
		this.destinationName = destinationName;
		this.currentTime = ''; // set to current time 
		this.expectedArrival = expectedArrival;
	}
	// add a method to calculate time between now and arrival.
}


// // make a request for langdon park road bus times
// const bla = '';
// const asyncBusTimes1 = fetch("https://api.tfl.gov.uk/StopPoint/490008943S/arrivals");
// asyncBusTimes1.then(res => res.json()).then(data => console.log(data));



async function foo() {
  let obj;

  const res = await fetch('https://api.tfl.gov.uk/StopPoint/490008943S/arrivals')

  obj = await res.json();

  // loop through each vehicle ID in the JSON
  for (const item of obj) {
  	console.log('Bus Stop Name:' + item.stationName);
  	console.log('Vehicle ID:' + item.vehicleId);
  	console.log('Line Name:' + item.lineName);
  	console.log('Expected Arrival Time:' + item.expectedArrival);
  	console.log('--------------')
  };

}

bustimes  = foo();
