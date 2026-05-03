/**
 * Generates 6 unique sorted numbers from 1 to 45.
 */
function generateLottoNumbers() {
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNum = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNum);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

/**
 * Renders a single lotto card with balls.
 */
function createLottoCard(gameIndex, numbers) {
  const card = document.createElement('div');
  card.className = 'lotto-card';
  card.style.animationDelay = `${gameIndex * 0.1}s`;

  const label = document.createElement('div');
  label.className = 'game-label';
  label.textContent = `G${gameIndex + 1}`;

  const ballsContainer = document.createElement('div');
  ballsContainer.className = 'balls-container';

  numbers.forEach(num => {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.textContent = num;
    ballsContainer.appendChild(ball);
  });

  card.appendChild(label);
  card.appendChild(ballsContainer);
  return card;
}

/**
 * Main render function for 5 games.
 */
function renderLottoGames() {
  const display = document.getElementById('lotto-display');
  display.innerHTML = ''; // Clear existing content

  for (let i = 0; i < 5; i++) {
    const numbers = generateLottoNumbers();
    const card = createLottoCard(i, numbers);
    display.appendChild(card);
  }
}

// Theme Management
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  const generateBtn = document.getElementById('generate-btn');
...
  generateBtn.addEventListener('click', () => {
    // Add a small feedback effect on the button
    generateBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      generateBtn.style.transform = '';
      renderLottoGames();
    }, 100);
  });
});
