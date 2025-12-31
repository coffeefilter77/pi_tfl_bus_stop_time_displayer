// create class for bus stop arrivals
class BusStopArrivals {
	constructor(lineName, destinationName, expectedArrival) {
		this.lineName = lineName;
		this.destinationName = destinationName;
		this.currentTime = ''; // set to current time 
		this.expectedArrival = expectedArrival;
		this.timeToStation = timeToStation;
	}
	// add a method to calculate time between now and arrival.
}

// https://stackoverflow.com/questions/10599148/how-do-i-get-the-current-time-only-in-javascript
var currentDateTime = Date();

export async function getBusTimesGroupedByPropertyNotBus() {
  let obj;
  let lineNameArray = [];
  let destinationNameArray = [];
  let expectedArrivalArray = [];
  let timeToStationArray = [];
  let stationNameArray = [];

  const res = await fetch('https://api.tfl.gov.uk/StopPoint/490008943S/arrivals')

  // this will be a JS object (test using console.log(typeof obj);)
  obj = await res.json();

  for (const item of obj) {
  	lineNameArray.push(item.lineName)
  };

  for (const item of obj) {
  	destinationNameArray.push(item.destinationName)
  };

  for (const item of obj) {
  	expectedArrivalArray.push(item.expectedArrival)
  };

  for (const item of obj) {
  	stationNameArray.push(item.stationName)
  };

  // create array of arrays (2D array) with all results
  // note - this works but is dumb! use destructuring!!
  let busTimesArrayDumb = [
  	lineNameArray,
  	destinationNameArray,
  	expectedArrivalArray,
  	stationNameArray,
  	timeToStationArray
  ]

  // instead we use destructuring
  let busTimesArray = [
  	lineNameArray,
  	destinationNameArray,
  	expectedArrivalArray,
  	stationNameArray,
  	timeToStationArray
  ]

  // with destructuring - now you can access them again with just 'lineName', i.e. you assign each array to a new variable.
  const[lineNames, destinationNames, expectedArrivals, stationNames, timeToStation] = busTimesArray


  return busTimesArray;

}


export async function getBusTimes() {
  let obj;
  let lineNameArray = [];
  let destinationNameArray = [];
  let expectedArrivalArray = [];
  let timeToStationArray = [];
  
  const res = await fetch('https://api.tfl.gov.uk/StopPoint/490008943S/arrivals')

  // this will be a JS object (test using console.log(typeof obj);)
  obj = await res.json();

  // sort should be implemented AFTER i finish designing etc.
  // sort - works but i think i need to adjust the sort by column.
  // https://www.geeksforgeeks.org/javascript/how-to-sort-json-array-in-javascript-by-value/
  // obj.sort((a, b) => {
  //   const aValue = JSON.
  //       stringify(Object.values(a).sort());
  //   const bValue = JSON.
  //       stringify(Object.values(b).sort());
  //   if (aValue < bValue) return -1;
  //   if (aValue > bValue) return 1;
  //   return 0;
	// });

	obj.sort((a, b) => a.timeToStation - b.timeToStation);


  for (const item of obj) {
  	lineNameArray.push(item.lineName)
  };

  for (const item of obj) {
  	// we convert from 2025-12-31T12:53:55Z to 12:53:55
	  // const time = new Date(item.expectedArrival)
	  //   .toTimeString()
	  //   .slice(0, 8);

	  // or to 12:53
	  const time = new Date(item.expectedArrival)
	    .toTimeString()
	    .slice(0, 5);

	  expectedArrivalArray.push(time);
}


  for (const item of obj) {
  	destinationNameArray.push(item.destinationName)
  };

  for (const item of obj) {
  	// to convert an integer like 136 into minutes and seconds mathematically, we first extract the minutes and then seconds and thn add them, as per
  	// https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
  	let minutes = Math.floor(item.timeToStation / 60);
  	let seconds = item.timeToStation - minutes * 60;
  	//timeToStationArray.push(minutes + ':' + seconds + ' (raw: ' + item.timeToStation + ')'); // for debugging

  	// i sometimes get seconds as e.g. 3:2 instead of 3:20. this is not readable. to avoid that, we add padding. 
  	// pad seconds to always have 2 digits
  	const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  	timeToStationArray.push(minutes + ':' + seconds);
  };

  // create array of arrays (2D array) with all results
  // note - this works but is dumb! use destructuring!!
  let busTimesArrayDumb = [
  	lineNameArray,
  	destinationNameArray,
  	expectedArrivalArray,
  	timeToStationArray
  ]

  // instead we use destructuring
  let busTimesArray = [
  	lineNameArray,
  	destinationNameArray,
  	expectedArrivalArray,
  	timeToStationArray
  ]

  // with destructuring - now you can access them again with just 'lineName', i.e. you assign each array to a new variable.
  const[lineNames, destinationNames, expectedArrival, timeToStation] = busTimesArray


  // pivoting results // 

  // instead of returning one array of bus times, one of destination names, etc
  // we can instead pivot to get one array for each bus
  // the below is equivalent to doing 
  // const bus1 = [
	//   lineNames[0],
	//   destinationNames[0],
	//   expectedArrivals[0],
	//   stationNames[0]
	// ]

	// const bus2 = [
	//   lineNames[1],
	//   destinationNames[1],
	//   expectedArrivals[1],
	//   stationNames[1]
	// ]
	// etc


  const buses = lineNames.map((_, i) => ({
	  line: lineNames[i],
	  destination: destinationNames[i],
	  expectedArrival: expectedArrival[i],
	  timeToArrival: timeToStation[i]
	}))


  return buses;

  // // loop through each vehicle ID in the JSON
  // for (const item of obj) {
  // 	console.log('Bus Stop Name:' + item.stationName);
  // 	console.log('Vehicle ID:' + item.vehicleId);
  // 	console.log('Line Name:' + item.lineName);
  // 	console.log('Expected Arrival Time:' + item.expectedArrival);
  // 	console.log('--------------')
  // };

}
