// function regular () {
//     var pickup = 2; 
//     var destination = 2; 
//     var fare = 2 * 2 * 15;

// document.getElementById('output').innerHTML = 'Fare :' + fare;
// }

// function discount() {
//     var pickup = 2; 
//     var destination = 2; 
//     var discounted = 2 * 2 * 15 * 0.8;

// document.getElementById('output').innerHTML = 'Fare :' + discounted;

// }

// Constants
var BASE_FARE = 50; // fixed base fare
var DISTANCE_RATE = 15; // per km rate
var BASE_DISTANCE = 2; // base distance to subtract

// Pick up distance - array
var pickupDistance = [
0, // North Avenue
1.2, // Quezon Avenue
2.2, // GMA–Kamuning
4.1, // Araneta Center–Cubao
5.6, // Santolan–Annapolis
7.9, // Ortigas
8.7, // Shaw Boulevard
9.7, // Boni
10.5, // Guadalupe
12.5, // Buendia
13.45, // Ayala
14.65, // Magallanes
16.7 // Taft Avenue
];

// Drop off distance - array
var dropoffDistance = [
0, // North Avenue
1.2, // Quezon Avenue
2.2, // GMA–Kamuning
4.1, // Araneta Center–Cubao
5.6, // Santolan–Annapolis
7.9, // Ortigas
8.7, // Shaw Boulevard
9.7, // Boni
10.5, // Guadalupe
12.5, // Buendia
13.45, // Ayala
14.65, // Magallanes
16.7 // Taft Avenue
];

function show(text) {
var out = document.getElementById('output');
if (out) {
out.innerHTML = text;
}
}

// Regular fare function
function regular() {
// read selected indices from the selects
var pickup = parseInt(document.getElementById('pickupSelect').value, 10);
var dropoff = parseInt(document.getElementById('destinationSelect').value, 10);

// if pick-up and destination are same, show exception message
if (pickup === dropoff) {
show('<span style="color: #000000; font-size: 30px; background-color: #38a3a5;">pick-up and destination are the same</span>');
return;
}

// compute ride distance
var rideDistance = Math.abs(dropoffDistance[dropoff] - pickupDistance[pickup]);

// apply base distance rule
var chargeDistance;
if (rideDistance > BASE_DISTANCE) {
chargeDistance = rideDistance - BASE_DISTANCE;
} else {
// if ride distance is less or equal base, charge based on base distance
chargeDistance = BASE_DISTANCE;
}

// compute fare: base fare + (chargeDistance * rate)
var fare = BASE_FARE + (chargeDistance * DISTANCE_RATE);

// display results
var outMessage = '';
outMessage += 'Ride distance: ' + rideDistance.toFixed(2) + ' km<br>';
// outMessage += 'Chargeable distance: ' + chargeDistance.toFixed(2) + ' km<br>';
outMessage += 'Regular fare: ₱' + fare.toFixed(2);
show(outMessage);
}

// Discounted fare function (20% off regular)
function discount() {
// read selected indices
var pickup = parseInt(document.getElementById('pickupSelect').value, 10);
var dropoff = parseInt(document.getElementById('destinationSelect').value, 10);

// if pick-up and destination are same, show exception message
if (pickup === dropoff) {
show('<span style="color: #000000; font-size: 30px; background-color: #38a3a5;">pick-up and destination are the same</span>');
return;
}

// compute ride distance
var rideDistance = Math.abs(dropoffDistance[dropoff] - pickupDistance[pickup]);

// compare the base distance
var chargeDistance;
if (rideDistance > BASE_DISTANCE) {
chargeDistance = rideDistance - BASE_DISTANCE;
} else {
chargeDistance = BASE_DISTANCE;
}

// compute regular fare then discount
var regularFare = BASE_FARE + (chargeDistance * DISTANCE_RATE);
var discountedFare = regularFare * 0.8; // 20% off

// show results
var outMessage = '';
outMessage += 'Ride distance: ' + rideDistance.toFixed(2) + ' km<br>';
outMessage += 'Discounted fare (20% off): ₱' + discountedFare.toFixed(2);
show(outMessage);
}
