const scriptURL = "https://script.googleusercontent.com/macros/echo?user_content_key=fo1G6CVSVRc9DnNn0spPaqlC5hF94mDwdNgUJtWdYgrDgjqS05IHwEopzG53CC1WWw1wxMGZZ8965hmVoiyRgWwg5_k5g3OBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMr0FAtsGvslGQkrX3mcdJrv4IN7R9p0aVP-E5hskQfLcL6XQVH84ILgiYLdHElZ_QLlccUFeFIXRjzmYEWO883iEf7BY0UXzNz9Jw9Md8uu&lib=M7u4C0z66SBBl_9rkArSg996fe_5trBpv";


fetch(scriptURL)
.then(response => response.json())
.then(data => {
  displayEvents(data.events, "events-container");
})
.catch(error => console.error("Error fetching data", error));


//function for event display
function displayEvents(events, containerId) {
  const container = document.getElementById(containerId);

  const modal = document.getElementById('eventDetailModal'); 
  const closeModal = document.getElementById('closeModalEvent');
 

  events.forEach(event => {
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('event');
    eventDiv.innerHTML = `
      <h2>${event.Title}</h2>
    `;
    container.appendChild(eventDiv);

  });

  // Close the modal when the close button is clicked
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}


