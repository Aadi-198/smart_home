// Ensure the DOM (structure) is fully loaded before running
document.addEventListener('DOMContentLoaded', () => {
    
    const tiles = document.querySelectorAll('.device-tile');

    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            // Get the name of the device from the h3 inside the clicked button
            const deviceName = tile.querySelector('h3').innerText;
            
            // Call the 'Show Details' function
            openDeviceDetails(deviceName);
        });
    });
});

function openDeviceDetails(name) {
    console.log("System Log: Accessing " + name + " details...");
    
    // For now, we use a simple confirmation
    // Later, this is where we will fetch data from Python
    alert("Displaying full status for: " + name);
}