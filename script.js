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
function pay(crypto) {
    const confirmation = document.getElementById('confirmation');
    confirmation.innerHTML = `Processing payment ...`;

    // Simulate a delay for processing payment
    setTimeout(() => {
        confirmation.innerHTML = ` USD account details. TAP9gzMNVT3wspcAaNzg5dP4AHs2Kh3mSA


usdt trc20


Account holder 
Mumini Ajadi Afolabi 
 
Bank Name 
Wells Fargo 
 
Account Number 
40630269955156428 
 
Account Type 
Checking 
 
Routing number 
121000248 
 
Address 
580 California Street,  San Francisco, CA 94104, US.`;
    }, 2000);
}
