function submitOrder() {
    const uid = document.getElementById("uid").value;
    const username = document.getElementById("username").value;
    const diamond = document.getElementById("diamond").value;
    
    if (!uid || !username || !diamond) {
        alert("Please fill in all fields.");
        return;
    }

    // Send data to the Google Apps Script Web App
    fetch('https://script.google.com/macros/s/AKfycbylLCWEre4BbNicc9TlvbUzOSEweFOOdK-s8wDy_0kgNl73XyHH9EctUDmXHWjy-F1BWw/exec', {
        method: 'POST',
        body: JSON.stringify({
            uid: uid,
            username: username,
            diamond: diamond
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Alert the user with the response from Google Apps Script
        // Reset the form fields and cart
        document.getElementById("uid").value = '';
        document.getElementById("username").value = '';
        document.getElementById("diamond").value = '';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an issue submitting the order. Please try again later.');
    });
}

