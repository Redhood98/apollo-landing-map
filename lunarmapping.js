document.addEventListener('DOMContentLoaded', () => {
    // Initialize the Leaflet map
    const map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -1,
        maxZoom: 4,
        zoomControl: true,
        attributionControl: false
    });

    // Define the aspect ratio of the image
    const imageWidth = 918; // Replace with the actual width of the image
    const imageHeight = 802; // Replace with the actual height of the image
    const bounds = [[0, 0], [imageHeight, imageWidth]];

    // Add the lunar map image to the map
    const image = L.imageOverlay('Lunar-Map-1962.png', bounds).addTo(map);

    // Fit the map to the bounds of the image
    map.fitBounds(bounds);

    // Restrict the map to the image bounds
    map.setMaxBounds(bounds);

    // Define the coordinates for the Apollo moon landings
    const apolloLandings = [
        { name: 'Apollo 11', coords: [400, 600], info: 'First manned moon landing (1969)' },
        { name: 'Apollo 12', coords: [370, 300], info: 'Second manned moon landing (1969)' },
        { name: 'Apollo 14', coords: [350, 330], info: 'Third manned moon landing (1971)' },
        { name: 'Apollo 15', coords: [580, 480], info: 'Fourth manned moon landing (1971)' },
        { name: 'Apollo 16', coords: [350, 530], info: 'Fifth manned moon landing (1972)' },
        { name: 'Apollo 17', coords: [550, 620], info: 'Sixth manned moon landing (1972)' }
    ];

    // Add markers for the Apollo moon landings
    apolloLandings.forEach(landing => {
        const marker = L.marker(landing.coords).addTo(map);
        marker.bindPopup(`<strong>${landing.name}</strong><br>${landing.info}`);
    });
});