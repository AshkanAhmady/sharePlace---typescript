"use strict";
const form = document.querySelector("form");
const addressInput = document.getElementById("address");
const searchAddressHandler = (e) => {
    e.preventDefault();
    const searchedAddress = addressInput.value;
    console.log(searchedAddress);
};
form.addEventListener("submit", searchAddressHandler);
