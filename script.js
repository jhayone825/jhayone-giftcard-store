// Dark/Light Mode Toggle
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    modeToggle.textContent = document.body.classList.contains('dark-mode') ? "Switch to Light Mode" : "Switch to Dark Mode";
});

// Plan Selection
function selectPlan(plan) {
    alert(`You selected the ${plan} server plan.`);
}

// Payment Methods
function pay(method) {
    const paymentDiv = document.getElementById('paymentInfo');
    if(method === 'USDT') {
        paymentDiv.innerHTML = `💰 Pay with USDT TRC20\n\nWallet Address:\nTAP9gzMNVT3wspcAaNzg5dP4AHs2Kh3mSA`;
    } else if(method === 'Bank Transfer') {
        paymentDiv.innerHTML = `🏦 Bank Transfer\n\nAccount holder: Mumini Ajadi Afolabi\nBank Name: Wells Fargo\nAccount Number: 40630269955156428\nRouting Number: 121000248`;
    } else {
        paymentDiv.innerHTML = "Payment method not available.";
    }

    // Confirm Payment Button
    paymentDiv.innerHTML += `\n\n<button onclick="confirmPayment()">Confirm Payment</button>`;
}

// Confirm Payment Simulation
function confirmPayment() {
    const paymentDiv = document.getElementById('paymentInfo');
    paymentDiv.innerHTML += `\n\n⏳ Processing Payment...`;

    setTimeout(() => {
        paymentDiv.innerHTML += `\n❌ Payment Not Confirmed. Please pay to get access.`;
    }, 2000);
}
