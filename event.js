const div = document.getElementById("myDiv");
const button = document.getElementById("button");

button.addEventListener("mouseover", () => {
  div.removeEventListener("click", handleClickDiv);
});

button.addEventListener("mouseout", () => {
  div.addEventListener("click", handleClickDiv);
});

div.addEventListener("click", handleClickDiv);

function handleClickDiv() {
  alert("Hola! Soy el div");
}

function handleClick() {
  alert("Hola!");
}
