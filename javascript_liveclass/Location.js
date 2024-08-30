const statusElement = document.getElementById('status');

function updateLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            fetch('/location/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ latitude, longitude })
            })
            .then(response => response.json())
            .then(data => {
                statusElement.innerText = `Location updated to district: ${data.district}`;
            })
            .catch(error => {
                console.error('Error updating location:', error);
                statusElement.innerText = 'Error updating location';
            });
        });
    } else {
        statusElement.innerText = 'Geolocation is not supported by this browser.';
    }
}

// Update location every 60 seconds
setInterval(updateLocation, 60000);
updateLocation();  // Initial call to set location immediately
