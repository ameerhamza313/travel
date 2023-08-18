let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});
 
formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

function logout() {
    // Clear the logged-in status in localStorage
    localStorage.removeItem('isLoggedIn');

    // Redirect back to the login page
    window.location.href = 'index.html';
  }

  // Check if the user is logged in when the index.html page loads
  document.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn || isLoggedIn !== 'true') {
      // Redirect back to the login page if not logged in
      window.location.href = 'index.html';
    }
  });



  document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const fullname = formData.get("fullname");
    const destination = formData.get("destination");
    const numPeople = formData.get("numPeople");
    const arrivalDate = formData.get("arrivalDate");
    const departureDate = formData.get("departureDate");
    const to_email = formData.get("email"); // Using the entered email as the recipient

    // Initialize EmailJS with your user ID
    emailjs.init("sp7Pj81e0ewvULQV6");

    emailjs.send("service_zd8dy7o", "template_rvt5s0i", {
        fullname: fullname,
        destination: destination,
        numPeople: numPeople,
        arrivalDate: arrivalDate,
        departureDate: departureDate,
        to_email: to_email
    })
    .then(function(response) {
        console.log("Email sent successfully:", response);
        alert('Booking Successful');
        // Add your success message or further actions here
    })
    .catch(function(error) {
        console.error("Error sending email:", error);
        alert('Error');
        // Add your error handling here
    });
});