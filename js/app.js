const toggleElement = document.querySelector("#toggle");
const flexContainerElement = document.querySelector("#flex-container");

toggleElement.addEventListener("change", () => {
    flexContainerElement.classList.toggle("show-monthly");
})