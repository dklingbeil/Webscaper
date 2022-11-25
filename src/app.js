let answer;
let test;
let Sunday;
let Monday;
let Tuesday;
let Wednesday;
let Thursday;
let Friday;
let Sabbath;
let Sunday1;
let Monday1;
let Tuesday1;
let Wednesday1;
let Thursday1;
let Friday1;
let Sabbath1;
let Sundayfin;
let Mondayfin;
let Tuesdayfin;
let Wednesdayfin;
let Thursdayfin;
let Fridayfin;
let Sabbathfin;
let end1;
let end2;
let end3;
let end4;
let end5;
let end6;
let end7;

window.addEventListener("DOMContentLoaded", displayAns);

async function displayAns() {
  const response = await fetch("http://localhost:8000/results");
  answer = await response.text();
  test = answer
    .replace(/\\n/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/<br>/g, " ");
  //.replace(/<strong>/g, "");
  //Start points
  Sunday = test.indexOf("Menu for Sunday");
  Monday = test.indexOf("Menu for Monday");
  Tuesday = test.indexOf("Menu for Tuesday");
  Wednesday = test.indexOf("Menu for Wednesday");
  Thursday = test.indexOf("Menu for Thursday");
  Friday = test.indexOf("Menu for Friday");
  Sabbath = test.indexOf("Menu for Sabbath");

  //Endpoints
  end1 = test.indexOf('","');
  end2 = test.indexOf('","', end1 + 1);
  end3 = test.indexOf('","', end2 + 1);
  end4 = test.indexOf('","', end3 + 1);
  end5 = test.indexOf('","', end4 + 1);
  end6 = test.indexOf('","', end5 + 1);
  end7 = test.indexOf('"]');

  //Slice data by day.
  Sundayfin = test.slice(Sunday, end1);
  Mondayfin = test.slice(Monday, end2);
  Tuesdayfin = test.slice(Tuesday, end3);
  Wednesdayfin = test.slice(Wednesday, end4);
  Thursdayfin = test.slice(Thursday, end5);
  Fridayfin = test.slice(Friday, end6);
  Sabbathfin = test.slice(Sabbath, end7);
}

//Display data on html page

function displaySunday() {
  document.getElementById("Finaldisplay").innerHTML = Sundayfin;
}
function displayMonday() {
  document.getElementById("Finaldisplay").innerHTML = Mondayfin;
}
function displayTuesday() {
  document.getElementById("Finaldisplay").innerHTML = Tuesdayfin;
}
function displayWednesday() {
  document.getElementById("Finaldisplay").innerHTML = Wednesdayfin;
}
function displayThursday() {
  document.getElementById("Finaldisplay").innerHTML = Thursdayfin;
}
function displayFriday() {
  document.getElementById("Finaldisplay").innerHTML = Fridayfin;
}
function displaySabbath() {
  document.getElementById("Finaldisplay").innerHTML = Sabbathfin;
}
