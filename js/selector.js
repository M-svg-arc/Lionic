const element = document.querySelector(".join-us__form-select");
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
  position: "bottom",
});