const clickButton = document.getElementById('clickButton');
const clicksDisplay = document.getElementById('clicks');

let clicks = 0;

clickButton.addEventListener('click', () => {
    clicks++;
    clicksDisplay.textContent = clicks;
});