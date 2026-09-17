// Select all profile cards
const cards = document.querySelectorAll(".profile-card");

// Add click event to every card
cards.forEach(function(card) {

    card.addEventListener("click", function() {

        // Get the person's name
        const name = card.querySelector("h2").textContent;

        // Show message
        alert("Hello! This is " + name + "'s profile.");

    });

});