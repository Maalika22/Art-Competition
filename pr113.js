document.getElementById('submitForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    var artistName = document.getElementById('artistName').value;
    var artworkTitle = document.getElementById('artworkTitle').value;
    var artworkImage = document.getElementById('artworkImage').value;

    // Create new artwork element
    var artworkElement = document.createElement('div');
    artworkElement.classList.add('artwork');
    artworkElement.innerHTML = `
        <h3>${artworkTitle}</h3>
        <p>By: ${artistName}</p>
        <img src="${artworkImage}" alt="${artworkTitle}">
    `;

    // Append artwork element to gallery
    document.getElementById('gallery').appendChild(artworkElement);

    // Clear form fields
    document.getElementById('artistName').value = '';
    document.getElementById('artworkTitle').value = '';
    document.getElementById('artworkImage').value = '';
});
