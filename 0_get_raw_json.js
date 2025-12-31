// to run:
// node /Users/arnold/Codeplanet/js_test_bus_stop/script.js
// in separate terminal!

// // make a request for langdon park road bus times
const asyncBusTimes1 = fetch("https://api.tfl.gov.uk/StopPoint/490008943S/arrivals");
asyncBusTimes1.then(res => res.json()).then(data => console.log(data));

