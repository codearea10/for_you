const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const targetDate = new Date('2024-05-03T00:00:00'); // Set the target date here

const updateCountdown = () => {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    // Redirect to a new page with a transition
    const newPage = document.createElement('div');
    newPage.className = 'fade-out';
    newPage.innerHTML = `<h1>Countdown ended!</h1><p>Redirecting to <a href="https://www.example.com">example.com</a></p>`;
    document.body.appendChild(newPage);

    setTimeout(() => {
      window.location.href = 'https://www.example.com';
    }, 1000);

    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  daysEl.innerText = formatTime(days);
  hoursEl.innerText = formatTime(hours);
  minutesEl.innerText = formatTime(minutes);
  secondsEl.innerText = formatTime(seconds);
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

setInterval(updateCountdown, 1000);

updateCountdown();

// confeti
