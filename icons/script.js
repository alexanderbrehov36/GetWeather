async function know() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(geo)
	
	}
	
	async function geo (position){
		const lat = position.coords.latitude;
		const lng = position.coords.longitude;
		const key = "UfPPZ77NkaFuk09V8vO9bIjgpWGDju2L";
		await fetch(
	      `https://www.mapquestapi.com/geocoding/v1/reverse?key=${key}&location=${lat}%2C${lng}&outFormat=json&thumbMaps=false`,
	    )
	      .then((response) => response.json())
	      .then((responseJson) => {
	        console.log(
	          'ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson),
	        );
	      });
		}
}	
