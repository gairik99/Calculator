let selectButton = document.querySelector(".btn-container");
let input = document.querySelector(".input");
let result = document.querySelector(".result");
let showDate = document.querySelector(".date");

let value = "";
let alphaRegex = /^[a-z]+$/i;

let date = new Date();
showDate.innerText = date.getHours() + ":" + date.getMinutes();

input.addEventListener("keyup", () => {
  value = input.value;
});

selectButton.addEventListener("click", (event) => {
  // Ensure the clicked element is a button
  if (event.target.tagName === "BUTTON") {
    let buttonText = event.target.innerText;

    if (!alphaRegex.test(value)) {
      if (buttonText === "del") {
        value = value.slice(0, -1);
        input.value = value;
      } else if (buttonText === "C") {
        result.innerText = "";
        input.value = value = "";
      } else if (buttonText === "=") {
        let reversedExpr = value.split("").reverse().join("");
        if ("+-*/".includes(reversedExpr[0])) {
          console.log("Add a number after the operator");
        } else {
          try {
            let total = eval(value).toString();
            if (total.length > 10) {
              result.style.fontSize = "20px";
            } else {
              result.style.fontSize = "32px";
            }
            result.innerHTML = total;
          } catch (e) {
            console.error("Invalid expression");
          }
        }
      } else {
        // Ensure only valid characters are added
        if (!alphaRegex.test(buttonText) && buttonText !== "=") {
          value += buttonText;
          input.value = value;
        }
      }
    } else {
      input.value = "";
    }
  }
});
