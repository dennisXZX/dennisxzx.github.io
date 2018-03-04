$(document).ready(function () {
  // start the system clock
  startTime();

  // add start button click effect
  $('.start').click(function () {
    $(this).toggleClass('startNotclicked');
    $(this).toggleClass('startClicked');
  });
});


function startTime() {
  // get the current hour and minute
  const today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes() ;

  // format the hour and minute
  hour = hour === 0 ? "12" :
         hour > 12 ? hour - 12 : hour;
  minute = minute < 10 ? "0" + minute : minute;

  $('.time').html(
    hour + ":" + minute + " " + (hour < 12 ? "AM" : "PM")
  );

  setTimeout(() => { startTime() }, 1000);
}