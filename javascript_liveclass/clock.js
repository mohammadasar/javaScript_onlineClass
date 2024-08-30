function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12;  // the hour '0' should be '12'
    hours = hours.toString().padStart(2, '0');
    
    clockElement.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
}

setInterval(updateClock, 1000);
updateClock();  // Initial call to display the clock immediately
