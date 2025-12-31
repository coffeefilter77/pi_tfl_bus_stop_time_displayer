import { getBusTimes, getBusTimesGroupedByPropertyNotBus } from "./mod_bustimes.js";
import { localTimeUK } from "./mod_currenttime.js";

// we need to await the result here too. cant just do 'const busTimes = getBusTimes()', even if we already await the result in the fxn
const busTimes = await getBusTimes();
console.log(busTimes);


// the problem with the above is that it is not a function so we cant execute it on button click. trying this..
// this is ILLEGAL. you cant use 'await' in a non-async function!
// function displayBusTimesIllegal() {
// 	const busTimes = await getBusTimes();
// 	const el = document.querySelector("p");
// 	el.innerHTML = busTimes;
// }

// this also doesnt work because type="module" scripts are scoped, and Inline HTML handlers (onclick="...") only see global functions
async function displayBusTimesWillBeIgnored() {
	const busTimes = await getBusTimes();
	const el = document.querySelector("p");
	el.innerHTML = JSON.stringify(busTimes);
}

// solution to the above is to add an event listener
// note: this means you REMOVE the onclick="displayBusTime()"
// document.getElementById("btn").addEventListener("click",displayBusTimesByPropertyNotBus); // commented out as we only have one button

async function displayBusTimesAll() {
	const busData = await getBusTimes();

	// to return all data, make a blank paragraph and add this in:
	// el = document.querySelector("p");
	// el.innerHTML = busData;

	// instead we return it in separate chunks
	console.log(busData);
}

async function displayBusTimesByPropertyNotBus() {
	const busData = await getBusTimesGroupedByPropertyNotBus();

	// to return all data:
	// el = document.querySelector("p");
	// el.innerHTML = busData;

	const busLinesParagraph = document.getElementById("lines");
	busLinesParagraph.innerHTML = busData[0];

	const destinationNameParagraph = document.getElementById("destinationName");
	destinationNameParagraph.innerHTML = busData[1];

	const expectedArrivalParagraph = document.getElementById("expectedArrival");
	expectedArrivalParagraph.innerHTML = busData[2];

	const stationNameParagraph = document.getElementById("stationName");
	stationNameParagraph.innerHTML = busData[3];

	const timeToStationParagraph = document.getElementById("timeToStation");
	stationNameParagraph.innerHTML = busData[4];

}


// set current time



// set how many seconds you want bus times to refresh in
const busRefreshPeriod = 30;
// make a countdown equal to the bus refresh period
let secondsRemaining = busRefreshPeriod;

// refresh clock
const refreshClockTimer = setInterval(() => {

	// update counter
	clock = document.getElementById("clock");
	clock.innerHTML = "Next Refresh In: " + secondsRemaining + 's';
	console.log('hi im an interation')

	// update current time
	let timeNow = localTimeUK()
	const timeNowElement = document.getElementById("currenttime");
	timeNowElement.innerHTML = "Current Time: " + timeNow;

	// countdown downwards using an increment: (we add secondsRemaining>0 as a safeguard)
	if (secondsRemaining > 0) {
		secondsRemaining--;	
	}
	

}, 1 * 1000); // 1 seconds = 1 * 1000


// define variable outside function
let busData;

// refresh bus times each 30s
const refreshBusTimer = setInterval(() => {
		console.log('hi im an interation');
		displayBusTimes();

		// to refresh our clock timer countdown, we do this:
		secondsRemaining = busRefreshPeriod;
	}, busRefreshPeriod * 1000); // 30 seconds = 30 * 1000


async function displayBusTimes() {
	busData = await getBusTimes();

	// filter the JS object
	const busData1 = busData[0];
	console.log('busData1 is ' + JSON.stringify(busData1));

	// get the HTML element
	let busItem = document.getElementById("bus1");

	// filter only the HTML element to select each cell
	let cells = busItem.querySelectorAll(".cell");
	
	// assign data to each cell
	cells[0].innerHTML = busData1.line;
	cells[1].innerHTML = busData1.destination;
	cells[2].innerHTML = busData1.timeToArrival;
	cells[3].innerHTML = busData1.expectedArrival;

	// repeat for other bus times

	// get bus data
	const busData2 = busData[1];
	console.log('busData2 is ' + JSON.stringify(busData2));
	 
	// update existing variables related to HTML elements

	busItem = document.getElementById("bus2");
	cells = busItem.querySelectorAll(".cell");
	cells[0].innerHTML = busData2.line;
	cells[1].innerHTML = busData2.destination;
	cells[2].innerHTML = busData2.timeToArrival;
	cells[3].innerHTML = busData2.expectedArrival;


	// get bus data
	const busData3 = busData[2];
	console.log('busData3 is ' + JSON.stringify(busData3));
	 
	// update existing variables related to HTML elements
	
	busItem = document.getElementById("bus3");
	cells = busItem.querySelectorAll(".cell");
	cells[0].innerHTML = busData3.line;
	cells[1].innerHTML = busData3.destination;
	cells[2].innerHTML = busData3.timeToArrival;
	cells[3].innerHTML = busData3.expectedArrival;

	// get bus data
	const busData4 = busData[3];
	console.log('busData4 is ' + JSON.stringify(busData4));
	 
	// update existing variables related to HTML elements
	
	busItem = document.getElementById("bus4");
	cells = busItem.querySelectorAll(".cell");
	cells[0].innerHTML = busData4.line;
	cells[1].innerHTML = busData4.destination;
	cells[2].innerHTML = busData4.timeToArrival;
	cells[3].innerHTML = busData4.expectedArrival;

	// get bus data
	const busData5 = busData[4];
	console.log('busData5 is ' + JSON.stringify(busData5));
	 
	// update existing variables related to HTML elements
	
	busItem = document.getElementById("bus5");
	cells = busItem.querySelectorAll(".cell");
	cells[0].innerHTML = busData5.line;
	cells[1].innerHTML = busData5.destination;
	cells[2].innerHTML = busData5.timeToArrival;
	cells[3].innerHTML = busData5.expectedArrival;

	// get bus data
	const busData6 = busData[5];
	console.log('busData6 is ' + JSON.stringify(busData6));
	 
	// update existing variables related to HTML elements
	
	busItem = document.getElementById("bus6");
	cells = busItem.querySelectorAll(".cell");
	cells[0].innerHTML = busData6.line;
	cells[1].innerHTML = busData6.destination;
	cells[2].innerHTML = busData6.timeToArrival;
	cells[3].innerHTML = busData6.expectedArrival;

	// get bus data
	const busData7 = busData[6];
	console.log('busData7 is ' + JSON.stringify(busData7));
	 
	// update existing variables related to HTML elements
	
	busItem = document.getElementById("bus7");
	cells = busItem.querySelectorAll(".cell");
	cells[0].innerHTML = busData7.line;
	cells[1].innerHTML = busData7.destination;
	cells[2].innerHTML = busData7.timeToArrival;
	cells[3].innerHTML = busData7.expectedArrival;

	// get bus data
	const busData8 = busData[7];
	console.log('busData8 is ' + JSON.stringify(busData8));
	 
	// update existing variables related to HTML elements
	
	busItem = document.getElementById("bus8");
	cells = busItem.querySelectorAll(".cell");
	cells[0].innerHTML = busData8.line;
	cells[1].innerHTML = busData8.destination;
	cells[2].innerHTML = busData8.timeToArrival;
	cells[3].innerHTML = busData8.expectedArrival;

	// get bus data
	const busData9 = busData[8];
	console.log('busData9 is ' + JSON.stringify(busData9));
	 
	// update existing variables related to HTML elements
	
	busItem = document.getElementById("bus9");
	cells = busItem.querySelectorAll(".cell");
	cells[0].innerHTML = busData9.line;
	cells[1].innerHTML = busData9.destination;
	cells[2].innerHTML = busData9.timeToArrival;
	cells[3].innerHTML = busData9.expectedArrival;

	// get bus data
	const busData10 = busData[9];
	console.log('busData10 is ' + JSON.stringify(busData10));
	 
	// update existing variables related to HTML elements
	
	busItem = document.getElementById("bus10");
	cells = busItem.querySelectorAll(".cell");
	cells[0].innerHTML = busData10.line;
	cells[1].innerHTML = busData10.destination;
	cells[2].innerHTML = busData10.timeToArrival;
	cells[3].innerHTML = busData10.expectedArrival;
	

}


// execute refresh function
refreshBusTimer

