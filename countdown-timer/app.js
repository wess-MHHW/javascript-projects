const deadline = document.querySelector(".deadline");
const giveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2024, 2, 4, 23, 35, 0);

giveaway.textContent =
  "giveaway ends on " +
  futureDate.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

items.forEach((item, index) => {
  let countdown = setInterval(() => {
    item.innerText = format(getRemainingTime(futureDate)[index]);
    if (getRemainingTime(futureDate).some((e) => e < 0)) {
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class ="expired">sorry, this giveaway has expired.</h4>`;
    }
  }, 1000);
});

function getRemainingTime(date) {
  let today = new Date().toLocaleString("en-US", {
    timeZone: "Africa/Tunis",
  });
  today = new Date(today);
  const t = date.getTime() - today.getTime();

  /*
  rules
    1s   = 1000ms
    1min = 60s
    1hr  = 60min
    1day = 24hr

  values 
    1min = 60 * 1000ms = 60000ms
    1hr  = 60 * 60 *1000ms = 3600000ms
    1day = 24 * 60 * 60 * 1000ms = 86400000ms

*/
  return [
    Math.floor(t / 86400000),
    Math.floor((t % 86400000) / 3600000),
    Math.floor((t % 3600000) / 60000),
    Math.floor((t % 60000) / 1000),
  ];
}

function format(item) {
  if (item < 10 && item >= 0) {
    return `0${item}`;
  } else if (item < 0) {
    return `00`;
  } else {
    return item;
  }
}
