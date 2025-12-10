// script.js
const confirmation = document.getElementById('confirmation');

function pay(method) {
    confirmation.innerHTML = ''; // Clear previous content

    let content = document.createElement('div');
    content.classList.add('payment-content');

    if (method === 'Skrill') {
        content.innerHTML = `
            <p>Sorry, Skrill payment is currently <strong>not available</strong>.</p>
        `;
    } else if (method === 'BTC' || method === 'Bank Transfer') {
        let details = `
            <p><strong>${method} Payment Selected</strong></p>
        `;

        if (method === 'BTC') {
            details += `
                <p>USDT TRC20 Wallet:</p>
                <p><strong>TAP9gzMNVT3wspcAaNzg5dP4AHs2Kh3mSA</strong></p>
            `;
        } else if (method === 'Bank Transfer') {
            details += `
                <p>Here are my USD account details:</p>
                <p>Account Holder: <strong>Mumini Ajadi Afolabi</strong></p>
                <p>Bank Name: <strong>Wells Fargo</strong></p>
                <p>Account Number: <strong>40630269955156428</strong></p>
                <p>Account Type: <strong>Checking</strong></p>
                <p>Routing Number: <strong>121000248</strong></p>
                <p>Address: <strong>580 California Street, San Francisco, CA 94104, US</strong></p>
            `;
        }

        content.innerHTML = details;

        // Add confirm button
        let confirmBtn = document.createElement('button');
        confirmBtn.textContent = 'Confirm Payment Method';
        confirmBtn.onclick = () => confirmPayment(method);
        content.appendChild(confirmBtn);
    }

    confirmation.appendChild(content);
}

function confirmPayment(method) {
    confirmation.innerHTML = `
        <p>Processing ${method} payment...</p>
        <div class="loader"></div>
    `;

    // Simulate loading animation
    let progress = 0;
    const loader = document.querySelector('.loader');
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 20) + 10; // Increment randomly
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            confirmation.innerHTML = `
                <p>❌ Payment not confirmed. Please pay to get the driver.</p>
            `;
        }
        loader.style.width = progress + '%';
    }, 500);
}

// Dark/Light Mode Toggle
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    modeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
