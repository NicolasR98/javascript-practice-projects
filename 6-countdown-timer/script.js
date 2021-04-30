//Selectors
const secondsEl = document.getElementById("seconds");
const minutesEl = document.getElementById("minutes");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");

const tripDay = "22 Dec 2022";

// Formats the time when the time number is below 10, shows 09 instead 9
const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

function countDown() {
  const tripDate = new Date(tripDay);
  const currentDate = new Date();

  // Substracts the difference and converts it into seconds.
  const diffToSeconds = (tripDate - currentDate) / 1000;

  const seconds = Math.floor(diffToSeconds) % 60;
  const minutes = Math.floor(diffToSeconds / 60) % 60;
  const hours = Math.floor(diffToSeconds / 3600) % 24;
  const days = Math.floor(diffToSeconds / 3600 / 24);

  secondsEl.innerHTML = formatTime(seconds);
  minutesEl.innerHTML = formatTime(minutes);
  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
}

setInterval(countDown, 1000);
