let countDownDate = new Date(' Mar 22 2021 16:25:54 GMT-0600').getTime();
let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = ('0' + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-2);
    let hours = ('0' + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
    let minutes = ('0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
    let seconds = ('0' + Math.floor((distance % (1000 * 60)) / (1000 ))).slice(-2);

    document.getElementById('day').innerHTML = days;
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds;


})
