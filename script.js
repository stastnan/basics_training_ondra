function updateMilesCounter() {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();

  // let counter = localStorage.setItem("milesCounter", 180);

  if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 4) {
    let counter = localStorage.getItem("milesCounter");

    if (counter === null) {
      counter = 180;
    }

    counter = parseInt(counter) + 60;
    localStorage.setItem("milesCounter", counter);

    document.getElementById("counter").innerText = `${counter} miles`;
  }
}

updateMilesCounter();
