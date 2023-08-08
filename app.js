const buttonBr = document.querySelector(".br");
const buttonUs = document.querySelector(".usa");
const portuguese = document.querySelectorAll(".pt");
const english = document.querySelectorAll(".us");
const sendEmail = document.querySelector(".send-email");

function translate(lang, hidenLang) {
  lang.forEach((element) => {
    element.classList.remove("invisible");
  });
  hidenLang.forEach((element) => {
    element.classList.add("invisible");
  });
}

buttonUs.addEventListener("click", () => {
  buttonUs.classList.remove("not-selected");
  buttonBr.classList.add("not-selected");
  translate(english, portuguese);
});

buttonBr.addEventListener("click", () => {
  buttonBr.classList.remove("not-selected");
  buttonUs.classList.add("not-selected");
  translate(portuguese, english);
});

sendEmail.addEventListener("click", () => {
  try {
    navigator.clipboard.writeText("tressoldi.lucas@gmail.com");
    sendEmail.style.backgroundColor = "#008000";
    document.querySelector(".email-icon img").src = "assets/check-icon.png";
    if (
      document
        .querySelector(".email-title.invisible")
        .textContent.includes("Send")
    ) {
      document.querySelector(".email-text p").textContent = "Copiado!";
    } else {
      document.querySelector(".email-text p").textContent = "Copied!";
    }
  } catch (err) {
    console.log(err);
    alert(
      "Error trying to copy email to clipboard. See the console log for more information."
    );
  }

  setTimeout(() => {
    document.querySelector(".email-icon img").src = "assets/email-icon.png";
    document.querySelector(".email-text p").textContent =
      "tressoldi.lucas@gmail.com";
    sendEmail.style.backgroundColor = "transparent";
  }, 2000);
});
