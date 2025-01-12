function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    document.addEventListener('click', handleOutsideClick);
}

function closeMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('active');
    document.removeEventListener('click', handleOutsideClick);
}

function handleOutsideClick(event) {
    const nav = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
        closeMenu();
    }
}

// import { Payments } from 'https://sandbox.web.squarecdn.com/v1/square.js';

// async function initializeSquare() {
//     const payments = Payments('sq0idp-W0D8nTPoqKATkCd4-N7KCg', 'LADGR956XKMHT');

//     const card = await payments.card();
//     await card.attach('#card-container');

//     document.querySelector('#pay-button').addEventListener('click', async () => {
//         const statusContainer = document.querySelector('#payment-status');
//         try {
//             const result = await card.tokenize();
//             if (result.status === 'OK') {
//                 statusContainer.innerText = 'Payment Successful!';
//                 console.log('Payment Token:', result.token); // Send this to your server for processing
//             } else {
//                 statusContainer.innerText = 'Payment Failed. Please try again.';
//             }
//         } catch (error) {
//             statusContainer.innerText = 'Payment Error: ' + error.message;
//             console.error('Payment Error:', error);
//         }
//     });
// }

// document.addEventListener('DOMContentLoaded', initializeSquare);
