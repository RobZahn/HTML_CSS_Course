// Initialize and add map
function initMap() {
	// Your location
	const loc = { lat: 40.7128, lng: -74.006 };
	// Centered map on location
	const map = new google.maps.Map(document.querySelector('.map'), {
		zoom: 14,
		center: loc
	});
	//The marker, positioned at location
	const marker = new google.maps.Marker({ position: loc, map: map });
}
