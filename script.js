const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <span class="delete-button">X</span>
  `;

  const deleteButton = li.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  taskList.appendChild(li);
  taskInput.value = "";
}
// CountDown

const datepicker = document.getElementById("datepicker");
const countdownElement = document.getElementById("countdown");

datepicker.addEventListener("change", updateCountdown);

function updateCountdown() {
  const selectedDate = new Date(datepicker.value).getTime();
  const now = new Date().getTime();
  const timeLeft = selectedDate - now;

  if (timeLeft <= 0) {
    countdownElement.innerHTML = "Time's up!";
  } else {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m `;
  }
}
