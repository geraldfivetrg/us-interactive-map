var detailsBox = document.getElementById('details-box');

document.addEventListener('mouseover', function (e) {
  if (e.target.tagName == 'path') {
    var content = e.target.dataset.name;
    detailsBox.innerHTML = content;
    detailsBox.style.opacity = "100%";
  }
  else {
    detailsBox.style.opacity = "0%";
  }
});

window.onmousemove = function (e) {
  var x = e.clientX,
      y = e.clientY;
  detailsBox.style.top = (y + 20) + 'px';
  detailsBox.style.left = (x) + 'px';
};


// Function to highlight the state on the map when selected from the dropdown
function highlightState(stateId) {
  var paths = document.getElementsByTagName('path');
  for (var i = 0; i < paths.length; i++) {
    if (paths[i].id === stateId) {
      paths[i].classList.add('highlighted');
    } else {
      paths[i].classList.remove('highlighted');
    }
  }
}


// Modify the existing mouseover event to also update the dropdown
document.addEventListener('mouseover', function (e) {
  if (e.target.tagName === 'path') {
    var stateId = e.target.id;
    document.getElementById('stateDropdown').value = stateId;
    var stateName = e.target.dataset.name;
    detailsBox.innerHTML = stateName;
    detailsBox.style.opacity = "100%";
  } else {
    detailsBox.style.opacity = "0%";
  }
});

// Redirecting
document.addEventListener('click', function (e) {
  if (e.target.tagName === 'path') {
    // Navigate to the next page of the form
    nextPage();
  }
});

document.getElementById('stateDropdown').addEventListener('change', function(e) {
  highlightState(e.target.value);
  // Navigate to the next page of the form
  nextPage();
});


let currentPage = 1;
  const pages = document.querySelectorAll('.page');

  function showPage(pageNumber) {
    pages.forEach(page => {
      page.classList.remove('active');
    });
    document.getElementById(`page${pageNumber}`).classList.add('active');
  }

  function nextPage() {
    if (currentPage < pages.length) {
      currentPage++;
      showPage(currentPage);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  }

  // Show the first page initially
  showPage(currentPage);

  // Function to validate email
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // Function to validate phone number
  function validatePhoneNumber(phoneNumber) {
    var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(String(phoneNumber));
  }

  // Function to validate form before proceeding
  function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;

    if (!firstName || !lastName || !email || !phoneNumber) {
      alert('Please fill out all the details.');
      return false;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email.');
      return false;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      alert('Please enter a valid phone number.');
      return false;
    }

    return true;
  }

      // Function to validate moving field
  function validateMoving() {
    var moving = document.getElementById('moving').value;

    if (!moving) {
      alert('Please fill out the moving field.');
      return false;
    }

    return true;
  }
