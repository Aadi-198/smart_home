document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SELECT THE ELEMENTS (Hardware Mapping)
    const dashboard = document.getElementById('main-dashboard');
    const detailView = document.getElementById('detail-view');
    const deviceTitle = document.getElementById('device-title');
    const backBtn = document.getElementById('back-btn');
    const tiles = document.querySelectorAll('.device-tile');

    // 2. THE "OPEN" LOGIC
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            // Grab the name from the H3 tag inside the button
            const name = tile.querySelector('h3').innerText;
            
            // Switch views
            dashboard.style.display = 'none';
            detailView.style.display = 'block';
            
            // Update the title dynamically
            deviceTitle.innerText = name;
            
            console.log("System Log: " + name + " View Initialized.");
        });
    });

    // 3. THE "BACK" LOGIC
    backBtn.addEventListener('click', () => {
        // Switch back
        detailView.style.display = 'none';
        dashboard.style.display = 'grid'; // Note: Must be 'grid' to match your CSS!
        
        console.log("System Log: Returning to Forest View.");
    });
});