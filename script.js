const scriptURL = "https://script.googleusercontent.com/macros/echo?user_content_key=fo1G6CVSVRc9DnNn0spPaqlC5hF94mDwdNgUJtWdYgrDgjqS05IHwEopzG53CC1WWw1wxMGZZ8965hmVoiyRgWwg5_k5g3OBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMr0FAtsGvslGQkrX3mcdJrv4IN7R9p0aVP-E5hskQfLcL6XQVH84ILgiYLdHElZ_QLlccUFeFIXRjzmYEWO883iEf7BY0UXzNz9Jw9Md8uu&lib=M7u4C0z66SBBl_9rkArSg996fe_5trBpv";


fetch(scriptURL)
.then(response => response.json())
.then(data => {
  displayBooks(data.fiction, "fiction-container");
  displayBooks(data.nonFiction, "non-fiction-container");
  displayEvents(data.events, "events-container");
})
.catch(error => console.error("Error fetching data", error));

// Function to display books
function displayBooks(books, containerId) {

  const container = document.getElementById(containerId);
  const modal = document.getElementById('bookDetailModal');
  const closeModal = document.getElementById('closeModal');
  const bookTitle = document.getElementById('bookTitle');
  const bookGenre = document.getElementById('bookGenre');
  const bookDescription = document.getElementById('bookDescription');
  const bookReleaseDate = document.getElementById('bookReleaseDate');
  const bookImage = document.getElementById('bookImage');
  const bookLongDescription = document.getElementById('bookLongDescription'); // New field for long description

  books.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
      <h2>${book.Title}</h2>
      <p><strong>Genre:</strong> ${book.Genre}</p>
      <p>${book.Description}</p>
      <p><strong>Release Date:</strong> ${book['Released']}</p>
      <img src="${book['ImageURL']}" alt="${book.Title}" />
      <button class="learnMore">Learn More</button>
    `;
    container.appendChild(bookDiv);

    // Attach event listener to the button
    const learnMoreButton = bookDiv.querySelector('.learnMore');
    learnMoreButton.addEventListener('click', () => {
      // Populate modal with book details
      bookTitle.innerText = book.Title;
      bookGenre.innerHTML = `<strong>Genre:</strong> ${book.Genre}`;
      bookDescription.innerText = book.Description;
      bookReleaseDate.innerHTML = `<strong>Release Date:</strong> ${book.Released}`;
      bookImage.src = book.ImageURL;
      bookImage.alt = book.Title;
    
      // If the book has a LongDescription, display it; otherwise, show a fallback message
      if (book.LongDescription) {
        bookLongDescription.innerText = book.LongDescription;
      } else {
        bookLongDescription.innerText = "No long description available."; 
      }
    
      // Display the modal
      modal.style.display = 'block';
    });
  })
  // Close the modal when the close button is clicked
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

//function for event display
function displayEvents(events, containerId) {
  const container = document.getElementById(containerId);

  const modal = document.getElementById('eventDetailModal'); 
  const closeModal = document.getElementById('closeModalEvent');
  const eventTitle = document.getElementById('eventTitle');
  const eventDate = document.getElementById('eventDate');
  const eventDescription = document.getElementById('eventDescription');
  const eventLocation = document.getElementById('eventLocation');
  const eventLongDescription = document.getElementById('eventLongDescription'); 

  events.forEach(event => {
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('event');
    eventDiv.innerHTML = `
      <h2>${event.Title}</h2>
      <p><strong>Date:</strong> ${event.Date}</p>
      <p>${event.Description}</p>
      <p><strong>Location:</strong> ${event.Location}</p>
      <button class="learnMore">Learn More</button>
    `;
    container.appendChild(eventDiv);

    // Attach event listener to the "Learn More" button
    const learnMoreButton = eventDiv.querySelector('.learnMore');
    learnMoreButton.addEventListener('click', () => {
      // Populate modal with event details
      eventTitle.innerText = event.Title;
      eventDate.innerHTML = `<strong>Date:</strong> ${event.Date}`;
      eventDescription.innerText = event.Description;
      eventLocation.innerHTML = `<strong>Location:</strong> ${event.Location}`;
      
      // If the event has a LongDescription, display it; otherwise, show a fallback message
      if (event.LongDescription) {
        eventLongDescription.innerText = event.LongDescription;
      } else {
        eventLongDescription.innerText = "No additional details available.";
      }

      // Display the modal
      modal.style.display = 'block';
    });
  });

  // Close the modal when the close button is clicked
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

