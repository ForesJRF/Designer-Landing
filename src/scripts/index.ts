import "../styles/index.scss";
import langList from "./lang";
import initMenu from "./initMenu";

const buttons = document.querySelectorAll(
  ".language-switcher__btn"
) as NodeListOf<HTMLButtonElement>;
const textElements = document.querySelectorAll(
  "[data-translate-id]"
) as NodeListOf<HTMLElement>;

let lng = "eng";

const changeLanguage = () => {
  textElements.forEach((textEl) => {
    const key = textEl.dataset.translateId;
    const text = langList[key][lng];
    textEl.innerHTML = text;
  });
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const newLng = btn.dataset.lng;

    if (newLng === lng) return;

    lng = newLng;

    changeLanguage();
  });
});

changeLanguage();
initMenu();
