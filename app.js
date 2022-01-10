const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4"); //grab the h4 within the div with the class deadline-format
// console.log(items);
let futureDate = new Date(2022, 7, 19, 20, 30, 00);
// console.log(futureDate);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();
let month = futureDate.getMonth();
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
// console.log(months[month]);
month = months[month];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} at ${hours}${minutes}hours`;

//future time in milliseconds
const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  // console.log(today);
  const t = futureTime - today;
  // console.log(t);
  //1s = 1000ms
  //1m = 60sec
  //1hr = 60min
  //1d = 24hours

  // values in milliseconds
  const oneDay = 24 * 60 * 60 * 1000; // 1day = 86400000 milliseconds
  // console.log(oneDay);
  const oneHour = 60 * 60 * 1000;
  // console.log(oneHour);
  const oneMinute = 60 * 1000;
  // console.log(oneMinute);

  //calculate all values
  let days = t / oneDay;
  days = Math.floor(days);

  let hours = Math.floor((t % oneDay) / oneHour);

  let minutes = Math.floor((t % oneHour) / oneMinute);

  let seconds = Math.floor((t % oneMinute) / 1000);
  // console.log(minutes);

  //set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4>Sorry, this giveaway has expired!!</h4>`;
  }
}
let countdown = setInterval(getRemainingTime, 1000); //i would like to get remaining time every second
getRemainingTime();
