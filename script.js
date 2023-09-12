// JavaScript code in script.js
document.addEventListener('DOMContentLoaded', function () {
    const selectButtons = document.querySelectorAll('.select-button');
    const totalPriceSpan = document.getElementById('total-price');
    let totalPrice = 0;
    let selectedCount = 0;

    const customNotification = document.getElementById('custom-notification');

    selectButtons.forEach(button => {
        button.addEventListener('click', () => {
            const chocolateItem = button.closest('.chocolate-item');
            const price = parseFloat(chocolateItem.querySelector('.price').textContent.slice(1)); // Remove the '$' and parse as float

            if (button.classList.contains('selected')) {
                totalPrice -= price;
                selectedCount--;
            } else {
                if (selectedCount < 8) {
                    totalPrice += price;
                    selectedCount++;
                } else {
                    // Display the custom notification
                    customNotification.style.display = 'block';

                    // Automatically hide the notification after 2 seconds
                    setTimeout(() => {
                        customNotification.style.display = 'none';
                    }, 2000);

                    return; // Don't allow further selections
                }
            }

            button.classList.toggle('selected'); // Toggle the 'selected' class

            if (button.classList.contains('selected')) {
                button.textContent = 'Selected';
            } else {
                button.textContent = 'Select';
            }

            totalPriceSpan.textContent = `$${totalPrice.toFixed(2)}`;
        });
    });
});
