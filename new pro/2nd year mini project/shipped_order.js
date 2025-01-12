// function initMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: 40.7128, lng: -74.0060 },
//         zoom: 8,
//     });
// }

// function confirmOrder() {
//     const userName = "John Doe";
//     const accountNumber = "1234567890";
//     const ifscCode = "ABC123456";
//     const eWasteType = "Mobile Phone";
//     const weight = 2;
//     const amount = 50;

//     // Store information in localStorage
//     localStorage.setItem('userName', userName);
//     localStorage.setItem('accountNumber', accountNumber);
//     localStorage.setItem('ifscCode', ifscCode);
//     localStorage.setItem('eWasteType', eWasteType);
//     localStorage.setItem('weight', weight);
//     localStorage.setItem('amount', amount);

//     // Navigate to confirmation page
//     window.location.href = "confirmation.html";
// }



function initShippedOrder() {
    // Retrieve data from localStorage
    const userName = localStorage.getItem('userName');
    const eWasteType = localStorage.getItem('eWasteType');
    const amount = localStorage.getItem('amount');
    const weight = localStorage.getItem('weight');

    // Display the data on the shipped order page
    document.getElementById('userNameInput').value = userName || '';
    document.getElementById('eWasteType').textContent = eWasteType || 'N/A';
    document.getElementById('amount').textContent = amount || '0';
    document.getElementById('weight').textContent = weight || '0';

    // Initialize Google Map
    initMap();

    // Confirmation button logic
    document.querySelector('.confirm-button').addEventListener('click', () => {
        const accountNumber = document.getElementById('accountNumberInput').value;
        const ifscCode = document.getElementById('ifscCodeInput').value;

        // Store bank details
        localStorage.setItem('accountNumber', accountNumber);
        localStorage.setItem('ifscCode', ifscCode);

        // Redirect to confirmation.html
        window.location.href = "confirmation.html";
    });
}

function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            const map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: latitude, lng: longitude },
                zoom: 15
            });
            new google.maps.Marker({
                position: { lat: latitude, lng: longitude },
                map: map
            });
        }, () => {
            alert("Geolocation failed or not supported.");
        });
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}

initShippedOrder();
