const clock = document.getElementById("time")
const updateClock =()=>{

const date = new Date();
console.log(date);
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

clock.textContent= `${hours}:${minutes}:${seconds}`
}

setInterval(updateClock, 1000);

// console.log("Start");

// setTimeout(() => {
//     console.log("setTimeout Callback");
// }, 1000);

// Promise.resolve().then(() => {
//     console.log("Promise Resolved");
// });

// console.log("End");