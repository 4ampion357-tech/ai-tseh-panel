const statusText = document.querySelector("#statusText");
const statusButton = document.querySelector("#statusButton");

statusButton.addEventListener("click", () => {
  const isDone = statusText.classList.toggle("done");

  statusText.textContent = isDone ? "Запуск отмечен" : "В работе";
  statusButton.textContent = isDone ? "Вернуть в работу" : "Отметить запуск";
});
