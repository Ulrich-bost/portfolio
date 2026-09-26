const buttons = document.querySelectorAll(".filters button");
const works = document.querySelectorAll(".work article");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    buttons.forEach((item) => item.classList.toggle("is-on", item === button));
    works.forEach((work) => {
      work.hidden = filter !== "tous" && work.dataset.kind !== filter;
    });
  });
});
