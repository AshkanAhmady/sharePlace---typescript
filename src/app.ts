const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const searchAddressHandler = (e: Event) => {
    e.preventDefault();
    const searchedAddress = addressInput.value;

    console.log(searchedAddress)
}

form.addEventListener("submit", searchAddressHandler)