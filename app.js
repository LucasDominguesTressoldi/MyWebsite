const buttonBr = document.querySelector(".br");
const buttonUs = document.querySelector(".usa");
const portuguese = document.querySelectorAll(".pt");
const english = document.querySelectorAll(".us");

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
