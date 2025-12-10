function pay(crypto) {
    const confirmation = document.getElementById('confirmation');
    confirmation.innerHTML = `Processing payment with ${crypto}...`;

    // Simulate a delay for processing payment
    setTimeout(() => {
        confirmation.innerHTML = `✅ Payment with ${crypto} received! <br> Your driver download is ready.`;
    }, 2000);
}
