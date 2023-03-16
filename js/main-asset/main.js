const paymentForm = document.getElementById("paymentForm");
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: "pk_test_f8379a27378ea646f79f6b0b7388cfa5baafb398", // Replace with your public key
    email: document.getElementById("email-address").value,
    amount: document.getElementById("amount").value * 100,
    ref: `${Math.floor(Math.random() * 1234567899012345 + 1)}`,

    // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you

    // label: "Optional string that replaces customer email"
    onClose: function () {
      alert("Window closed.");
    },
    callback: function (response) {
      let message = "Payment complete! Reference: " + response.reference;
      alert(message);
    },
  });

  handler.openIframe();
}

const checkInDateInput = document.querySelector("#checkIn");
const checkOutDateInput = document.querySelector("#checkOut");

const checkAvailabilityButton = document.querySelector("#check-availability");

// Assume we have a div to display the availability result
const availabilityResultDiv = document.querySelector("#availability-result");

checkAvailabilityButton.addEventListener("click", function () {
  // Get the check-in and check-out dates from the form inputs
  const checkInDate = new Date(checkInDateInput.value);
  const checkOutDate = new Date(checkOutDateInput.value);

  const isRoomAvailable = checkRoomAvailability(checkInDate, checkOutDate);

  // Display the availability result
  if (isRoomAvailable) {
    availabilityResultDiv.textContent = "Room is available!";
  } else {
    availabilityResultDiv.textContent =
      "Sorry, the room is not available for the selected dates.";
  }
});
