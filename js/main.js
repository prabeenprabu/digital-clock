// ----------------getting elements----------------
let hours = document.getElementById("hours");
let seconds = document.getElementById("secs");
let minutes = document.getElementById("mins");
let ampm = document.getElementById("ampm");

// --------------setting the value to document--------------------
setInterval(() => {
    let hh = new Date().getHours();
    let mm = new Date().getMinutes();
    let ss = new Date().getSeconds();
    let am = hh >= 12 ? "PM" : "AM";

    //converting the 24hrs to 12hrs
    if (hh > 12) hh -= 12;
    //adding zero before single digital number
    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    hours.innerHTML = hh;
    minutes.innerHTML = mm;
    seconds.innerHTML = ss;
    ampm.innerHTML = am;
});
