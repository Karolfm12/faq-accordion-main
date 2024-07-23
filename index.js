const tab = document.querySelectorAll("li");

tab.forEach((val, i) => {
  val.addEventListener("click", (e) => {
    e.currentTarget.children[1].classList.toggle("hidden");
    e.currentTarget.children[0].children[2].classList.toggle("icon-hidden");
    e.currentTarget.children[0].children[1].classList.toggle("icon-hidden");
    tab.forEach((otherVal) => {
      if (otherVal !== val) {
        otherVal.children[1].classList.add("hidden");
        otherVal.children[0].children[2].classList.add("icon-hidden");
        otherVal.children[0].children[1].classList.remove("icon-hidden");
      }
    });
  });
});
