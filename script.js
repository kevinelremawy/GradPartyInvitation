document.addEventListener('DOMContentLoaded', function () {
    console.log("Kevin's Graduation Party 2025: Script loaded successfully!");
  
    // Countdown Timer for the Event (May 18, 2025 at 5:00 PM)
    const eventDate = new Date('May 18, 2025 17:00:00').getTime();
    const countdownElement = document.getElementById('countdown');
  
    const countdown = setInterval(function () {
      const now = new Date().getTime();
      const distance = eventDate - now;
      if (distance < 0) {
        clearInterval(countdown);
        countdownElement.innerHTML = 'The event has started!';
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownElement.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }, 1000);
  
    // Puzzle Validation to unlock RSVP form
    const puzzleForm = document.getElementById('puzzle-form');
    puzzleForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const answer = document.getElementById('puzzle-input').value.trim().toLowerCase();
      console.log("Puzzle answer:", answer);
      const messageDiv = document.getElementById('puzzle-message');
      if (answer === 'keyboard') {
        document.getElementById('rsvp-section').style.display = 'block';
        document.querySelector('.puzzle').style.display = 'none';
        alert("Riddle solved! The RSVP form is now unlocked.\n\nAlso, hidden treasures await you on this page. Good luck finding them!");
      } else {
        messageDiv.innerHTML = '<p style="color: #ff0000;">Incorrect answer. Please try again.</p>';
      }
    });
  
    // Hint Button Toggle for Puzzle
    const hintButton = document.getElementById('hint-button');
    const hintText = document.getElementById('hint-text');
    hintButton.addEventListener('click', function () {
      if (hintText.style.display === 'none') {
        hintText.style.display = 'block';
        hintButton.textContent = 'Hide Hint';
      } else {
        hintText.style.display = 'none';
        hintButton.textContent = 'Show Hint';
      }
    });
  
    // Treasure 1: Clickable "K" in footer
    const treasure1Link = document.getElementById('treasure1-link');
    treasure1Link.addEventListener('click', function () {
      openModal('treasure1-modal');
    });
  
    // Treasure 2: Clickable "cyber" in the invitation
    const treasure2Link = document.getElementById('treasure2-link');
    treasure2Link.addEventListener('click', function () {
      openModal('treasure2-modal');
    });
  
    // Function to open modal by ID
    function openModal(modalId) {
      document.getElementById(modalId).style.display = 'block';
    }
  
    // Close modal when clicking on the "close" span
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const modalId = btn.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'none';
      });
    });
  
    // Handle submission of treasure claim forms
    const treasureForms = document.querySelectorAll('.treasure-form');
    treasureForms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const treasureName = form.getAttribute('data-treasure');
        alert(`${treasureName} claim submitted! Please screenshot this confirmation and bring it to graduation to claim your prize.`);
        form.closest('.modal').style.display = 'none';
      });
    });
  
    // Note: The RSVP form now submits normally to Formspree.
    // Remove any custom submit handler if it prevents default submission.
  });
  