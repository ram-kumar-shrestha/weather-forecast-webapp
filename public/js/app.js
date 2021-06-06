const weatherForm = document.querySelector("form");
const serach = document.querySelector("input");
let messageOne = document.querySelector("#message--one");
let messageTwo = document.querySelector("#message--two");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = serach.value;

  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = data.error;
          messageTwo.textContent = "";
        } else {
          messageOne.textContent = data.forecast;
          messageTwo.textContent = data.location;
        }
      });
    }
  );
});
