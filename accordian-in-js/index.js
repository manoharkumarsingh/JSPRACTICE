function handleToggle(e) {
  const element = e.target.nextElementSibling;
  if (element.classList.contains("hide")) {
    element.classList.remove("hide");
    element.classList.add("show");
  } else if (element.classList.contains("show")) {
    element.classList.remove("show");
    element.classList.add("hide");
  }
}
