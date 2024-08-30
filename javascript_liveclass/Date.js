function updateDate() {
    const dateElement = document.getElementById('date');
    const now = new Date();
    
    // Date formatting
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear();
    dateElement.textContent = `${month}/${day}/${year}`;
}

setInterval(updateDate, 1000 * 60 * 60 * 144); // Update date every 24 hours
updateDate();  // Initial call to display the date immediately
