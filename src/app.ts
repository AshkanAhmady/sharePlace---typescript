import axios from "axios";
const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY= "API_KEY";

// the exactully type of what the (then) method returns
type GoogleGeocodingResponse = {
    results: { geometry: {location: {lat: number, lng: number}}}[],
    status: 'OK' | 'ZERO_RESULTS'
}

const searchAddressHandler = (e: Event) => {
    e.preventDefault();
    const searchedAddress = addressInput.value;

    axios.get<GoogleGeocodingResponse>(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(searchedAddress)}&key=${GOOGLE_API_KEY}`)
    .then(response => {
        if(response.data.status !== "OK") {
            throw new Error("could not fetch location!")
        }
        const coordinates = response.data.results[0].geometry.location;
        const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
            center: coordinates,
            zoom: 8,
          });

        new google.maps.Marker({
            position: coordinates,
            map: map,
        });
    })
    .catch(error => alert(error.message));
}

form.addEventListener("submit", searchAddressHandler)