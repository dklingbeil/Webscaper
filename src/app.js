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
let p1;
let p2;
let p3;
let p4;
let p5;
let p6;
let p7;
let p8;
let p9;
let p10;
let p11;

window.addEventListener("DOMContentLoaded", displayAns);

async function displayAns() {
  const response = await fetch("http://localhost:8000/results");
  answer = await response.text();
  test = answer
    .replace(/\\n/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/<br>/g, " ")
    .replace(/<strong>/g, "");
  if (test.indexOf("The Deli at the Village Market") == -1) {
    //var = test.indexOf("<p>", nth term)
  }
  Sunday = test.indexOf("Menu for Sunday");
  Monday = test.indexOf("Menu for Monday");
  Tuesday = test.indexOf("Menu for Tuesday");
  Wednesday = test.indexOf("Menu for Wednesday");
  Thursday = test.indexOf("Menu for Thursday");
  Friday = test.indexOf("Menu for Friday");
  Sabbath = test.indexOf("Menu for Sabbath");
  p1 = test.indexOf("</p>");
  p2 = test.indexOf("</p>", p1 + 1);
  p3 = test.indexOf("</p>", p2 + 1);
  p4 = test.indexOf("</p>", p3 + 1);
  p5 = test.indexOf("</p>", p4 + 1);
  p6 = test.indexOf("</p>", p5 + 1);
  p7 = test.indexOf("</p>", p6 + 1);
  p8 = test.indexOf("</p>", p7 + 1);
  p9 = test.indexOf("</p>", p8 + 1);
  p10 = test.indexOf("</p>", p9 + 1);
  p11 = test.indexOf("</p>", p10 + 1);
  //Sunday1
  if (test.indexOf("The Deli at the Village Market") == -1) {
    Sunday1 = p1;
  } else {
    Sunday1 = test.indexOf("The Deli at the Village Market");
  }
  //Monday1
  if (test.indexOf("The Deli at the Village Market", Sunday1 + 1) == -1) {
    Monday1 = p2;
  } else {
    Monday1 = test.indexOf("The Deli at the Village Market", Sunday1 + 1);
  }
  //Tuesday1
  if (test.indexOf("The Deli at the Village Market", Monday1 + 1) == -1) {
    Tuesday1 = p4;
  } else {
    Tuesday1 = test.indexOf("The Deli at the Village Market", Monday1 + 1);
  }
  //Wednesday1
  if (test.indexOf("The Deli at the Village Market", Tuesday1 + 1) == -1) {
    Wednesday1 = p5;
  } else {
    Wednesday1 = test.indexOf("The Deli at the Village Market", Tuesday1 + 1);
  }
  //Thurday1
  if (test.indexOf("The Deli at the Village Market", Wednesday1 + 1) == -1) {
    Thursday1 = p7;
  } else {
    Thursday1 = test.indexOf("The Deli at the Village Market", Wednesday1 + 1);
  }
  //Friday1
  if (test.indexOf("The Deli at the Village Market", Thursday1 + 1) == -1) {
    Friday1 = p9;
  } else {
    Friday1 = test.indexOf("The Deli at the Village Market", Thursday1 + 1);
  }
  //Sabbath1
  if (test.indexOf("The Deli at the Village Market", Friday1 + 1) == -1) {
    Sabbath1 = p11;
  } else {
    Sabbath1 = test.indexOf("The Deli at the Village Market", Friday1 + 1);
  }
  Sundayfin = test.slice(Sunday, Sunday1);
  Mondayfin = test.slice(Monday, Monday1);
  Tuesdayfin = test.slice(Tuesday, Tuesday1);
  Wednesdayfin = test.slice(Wednesday, Wednesday1);
  Thursdayfin = test.slice(Thursday, Thursday1);
  Fridayfin = test.slice(Friday, Friday1);
  Sabbathfin = test.slice(Sabbath, Sabbath1);
  document.getElementById("Sunday").innerHTML = Sundayfin;
  document.getElementById("Monday").innerHTML = Mondayfin;
  document.getElementById("Tuesday").innerHTML = Tuesdayfin;
  document.getElementById("Wednesday").innerHTML = Wednesdayfin;
  document.getElementById("Thursday").innerHTML = Thursdayfin;
  document.getElementById("Friday").innerHTML = Fridayfin;
  document.getElementById("Sabbath").innerHTML = Sabbathfin;
}
