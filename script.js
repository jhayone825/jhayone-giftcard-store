const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    if(document.body.classList.contains('dark-mode')){
        modeToggle.innerText = "Switch to Light Mode";
    } else {
        modeToggle.innerText = "Switch to Dark Mode";
    }
});

function pay(method) {
    const confirmation = document.getElementById('confirmation');
    confirmation.innerHTML = `Processing payment with ${method}...`;

    // Simulate payment delay
    setTimeout(() => {
        confirmation.innerHTML = `✅ Payment with ${method} received! <br> Your driver download is ready.`;
    }, 2000);
}
