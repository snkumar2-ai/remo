// Floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.opacity = Math.random();
    document.getElementById('heartsContainer').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Create hearts periodically
setInterval(createHeart, 300);

// Button interactions
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const yaayyOverlay = document.getElementById('yaayyOverlay');
const successModal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');

let noBtnClickCount = 0;
const noBtnTexts = [
    "Maybe not... 💔",
    "Are you sure? 🥺",
    "Think again? 💭",
    "Really? 😢",
    "Please? 🙏",
    "Pretty please? 🥹",
    "I'll be sad... 😭",
    "Fine... but I'll miss you 💔"
];

yesBtn.addEventListener('click', function() {
    // Show yaayyy animation
    yaayyOverlay.style.display = 'flex';
    
    // Hide after 3 seconds and show modal
    setTimeout(() => {
        yaayyOverlay.style.display = 'none';
        successModal.style.display = 'block';
    }, 3000);
});

noBtn.addEventListener('click', function() {
    noBtnClickCount++;
    
    if (noBtnClickCount < noBtnTexts.length) {
        noBtn.textContent = noBtnTexts[noBtnClickCount];
        
        // Make the button smaller and move it slightly
        noBtn.style.transform = `scale(${1 - noBtnClickCount * 0.1}) translateX(${Math.random() * 20 - 10}px)`;
        
        // Make yes button bigger and more attractive
        yesBtn.style.transform = `scale(${1 + noBtnClickCount * 0.1})`;
        yesBtn.style.background = `linear-gradient(45deg, hsl(${350 + noBtnClickCount * 5}, 70%, ${60 + noBtnClickCount * 5}%), hsl(${350 + noBtnClickCount * 5}, 70%, ${70 + noBtnClickCount * 5}%))`;
    } else {
        // After many clicks, make it harder to click no
        noBtn.style.display = 'none';
        yesBtn.textContent = "You have no choice now! 💖";
        yesBtn.style.transform = 'scale(1.2)';
    }
});

closeModal.addEventListener('click', function() {
    successModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === successModal) {
        successModal.style.display = 'none';
    }
});

// Add some sparkle effects
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.fontSize = Math.random() * 20 + 10 + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1';
    sparkle.style.animation = 'sparkle 2s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

// Add sparkle animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% { opacity: 0; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1) rotate(180deg); }
        100% { opacity: 0; transform: scale(0) rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Create sparkles periodically
setInterval(createSparkle, 1000);